/**
 * 中医体质测试逻辑
 * 实现测验流程、答案计算和结果生成
 */

// 体质类型及其评分系统
const constitutionTypes = {
    qi_deficiency: { // 气虚
        name: 'qi_deficiency',
        score: 0,
        threshold: 5 // 降低阈值，增加出现几率
    },
    yang_deficiency: { // 阳虚
        name: 'yang_deficiency',
        score: 0,
        threshold: 5
    },
    yin_deficiency: { // 阴虚
        name: 'yin_deficiency',
        score: 0,
        threshold: 5
    },
    phlegm_dampness: { // 痰湿
        name: 'phlegm_dampness',
        score: 0,
        threshold: 5
    },
    blood_stasis: { // 血瘀
        name: 'blood_stasis',
        score: 0,
        threshold: 5
    }
};

// 问题权重配置（每个问题对各体质的影响程度）
const questionWeights = {
    q1: { // 手脚冰凉
        q1_o1: {yang_deficiency: 2}, // 是，经常
        q1_o2: {yang_deficiency: 1}, // 有时
        q1_o3: {} // 很少或从不
    },
    q2: { // 能量水平
        q2_o1: {qi_deficiency: 2}, // 经常疲劳
        q2_o2: {qi_deficiency: 1}, // 中等能量
        q2_o3: {} // 能量充沛
    },
    q3: { // 出汗情况
        q3_o1: {qi_deficiency: 1, yin_deficiency: 1}, // 容易出汗
        q3_o2: {}, // 正常出汗
        q3_o3: {yang_deficiency: 1} // 很少出汗
    },
    q4: { // 消化情况
        q4_o1: {phlegm_dampness: 2}, // 常感胀气
        q4_o2: {phlegm_dampness: 1}, // 偶尔消化不良
        q4_o3: {} // 消化良好
    },
    q5: { // 口渴情况
        q5_o1: {yin_deficiency: 2}, // 经常口渴
        q5_o2: {yin_deficiency: 1}, // 有时口渴
        q5_o3: {yang_deficiency: 1} // 很少口渴
    },
    q6: { // 睡眠质量
        q6_o1: {yin_deficiency: 2}, // 失眠
        q6_o2: {yin_deficiency: 1}, // 有时睡不好
        q6_o3: {} // 睡眠良好
    },
    q7: { // 干燥情况
        q7_o1: {yin_deficiency: 2}, // 干燥明显
        q7_o2: {yin_deficiency: 1}, // 有时干燥
        q7_o3: {} // 很少干燥
    },
    q8: { // 情绪状态
        q8_o1: {qi_deficiency: 1, yin_deficiency: 1}, // 焦虑紧张
        q8_o2: {}, // 一般平衡
        q8_o3: {} // 情绪稳定
    },
    q9: { // 饭后胀气
        q9_o1: {phlegm_dampness: 2}, // 常感胀气
        q9_o2: {phlegm_dampness: 1}, // 有时胀气
        q9_o3: {} // 很少胀气
    },
    q10: { // 对潮湿天气反应
        q10_o1: {phlegm_dampness: 2, yang_deficiency: 1}, // 不舒服沉重
        q10_o2: {phlegm_dampness: 1}, // 稍有影响
        q10_o3: {} // 无明显影响
    }
};

// 用户答案存储
let userAnswers = {};

/**
 * 初始化测验
 */
function initQuiz() {
    // 设置进度条
    updateProgress(1);
    
    // 显示第一个问题
    showQuestion(1);
    
    // 设置导航按钮事件
    document.getElementById('prev-btn').addEventListener('click', goToPrevQuestion);
    document.getElementById('next-btn').addEventListener('click', goToNextQuestion);
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
    
    // 隐藏上一题按钮（第一题不需要）
    document.getElementById('prev-btn').style.display = 'none';
    
    // 隐藏提交按钮（非最后一题不需要）
    document.getElementById('submit-btn').style.display = 'none';
}

/**
 * 显示指定的问题
 * @param {number} questionNumber - 问题编号
 */
function showQuestion(questionNumber) {
    // 隐藏所有问题
    document.querySelectorAll('.question-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // 显示当前问题
    const currentQuestion = document.getElementById(`question-${questionNumber}`);
    if (currentQuestion) {
        currentQuestion.classList.add('active');
    }
    
    // 更新按钮状态
    updateButtonsState(questionNumber);
    
    // 更新进度条
    updateProgress(questionNumber);
    
    // 如果之前已经回答过此问题，恢复选中状态
    if (userAnswers[`q${questionNumber}`]) {
        const selectedOption = document.querySelector(`input[name="q${questionNumber}"][value="${userAnswers[`q${questionNumber}`]}"]`);
        if (selectedOption) {
            selectedOption.checked = true;
        }
    }
}

/**
 * 更新导航按钮状态
 * @param {number} currentQuestion - 当前问题编号
 */
function updateButtonsState(currentQuestion) {
    const totalQuestions = document.querySelectorAll('.question-card').length;
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    // 第一题隐藏"上一题"按钮
    prevBtn.style.display = currentQuestion === 1 ? 'none' : 'inline-flex';
    
    // 最后一题显示"提交"按钮，隐藏"下一题"按钮
    if (currentQuestion === totalQuestions) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

/**
 * 更新进度条
 * @param {number} currentQuestion - 当前问题编号
 */
function updateProgress(currentQuestion) {
    const totalQuestions = document.querySelectorAll('.question-card').length;
    const progressPercent = (currentQuestion / totalQuestions) * 100;
    const progressBar = document.querySelector('.progress-bar');
    
    progressBar.style.width = `${progressPercent}%`;
}

/**
 * 前往上一个问题
 */
function goToPrevQuestion() {
    const activeQuestion = document.querySelector('.question-card.active');
    if (activeQuestion) {
        const questionNumber = parseInt(activeQuestion.id.split('-')[1]);
        if (questionNumber > 1) {
            saveCurrentAnswer(questionNumber);
            showQuestion(questionNumber - 1);
        }
    }
}

/**
 * 前往下一个问题
 */
function goToNextQuestion() {
    const activeQuestion = document.querySelector('.question-card.active');
    if (activeQuestion) {
        const questionNumber = parseInt(activeQuestion.id.split('-')[1]);
        const totalQuestions = document.querySelectorAll('.question-card').length;
        
        // 保存当前问题的答案
        if (saveCurrentAnswer(questionNumber)) {
            // 如果成功保存答案，进入下一题
            if (questionNumber < totalQuestions) {
                showQuestion(questionNumber + 1);
            }
        } else {
            // 未选择答案，显示提示
            alert(getText('please_select_option'));
        }
    }
}

/**
 * 保存当前问题的答案
 * @param {number} questionNumber - 问题编号
 * @returns {boolean} 是否成功保存
 */
function saveCurrentAnswer(questionNumber) {
    const selectedOption = document.querySelector(`input[name="q${questionNumber}"]:checked`);
    
    if (selectedOption) {
        userAnswers[`q${questionNumber}`] = selectedOption.value;
        return true;
    }
    
    return false;
}

/**
 * 提交测验并计算结果
 */
function submitQuiz() {
    // 保存最后一个问题的答案
    const activeQuestion = document.querySelector('.question-card.active');
    const questionNumber = parseInt(activeQuestion.id.split('-')[1]);
    
    if (!saveCurrentAnswer(questionNumber)) {
        // 未选择答案，显示提示
        alert(getText('please_select_option'));
        return;
    }
    
    // 检查是否所有问题都已回答
    const totalQuestions = document.querySelectorAll('.question-card').length;
    for (let i = 1; i <= totalQuestions; i++) {
        if (!userAnswers[`q${i}`]) {
            alert(getText('answer_all_questions'));
            showQuestion(i);
            return;
        }
    }
    
    // 计算结果
    calculateResults();
    
    // 跳转到结果页面
    window.location.href = 'result.html';
}

/**
 * 计算测验结果
 */
function calculateResults() {
    // 重置所有体质分数
    Object.keys(constitutionTypes).forEach(key => {
        constitutionTypes[key].score = 0;
    });
    
    // 根据答案计算各体质得分
    Object.keys(userAnswers).forEach(questionKey => {
        const optionKey = userAnswers[questionKey];
        const weights = questionWeights[questionKey][optionKey];
        
        if (weights) {
            Object.keys(weights).forEach(constitutionKey => {
                constitutionTypes[constitutionKey].score += weights[constitutionKey];
            });
        }
    });
    
    // 找出得分最高的体质类型（主要体质）
    let primaryType = null;
    let highestScore = 0;
    
    Object.keys(constitutionTypes).forEach(key => {
        if (constitutionTypes[key].score > highestScore) {
            highestScore = constitutionTypes[key].score;
            primaryType = key;
        }
    });
    
    // 如果得分低于阈值，则归为平和体质
    if (highestScore < constitutionTypes[primaryType].threshold) {
        primaryType = 'balanced';
    }
    
    // 找出次要体质类型（得分第二高的）
    let secondaryType = null;
    let secondHighestScore = 0;
    
    Object.keys(constitutionTypes).forEach(key => {
        if (key !== primaryType && constitutionTypes[key].score > secondHighestScore) {
            secondHighestScore = constitutionTypes[key].score;
            secondaryType = key;
        }
    });
    
    // 如果次要体质得分超过其阈值的70%，则认为用户有混合体质
    const hasSecondaryType = secondaryType && 
                            secondHighestScore >= (constitutionTypes[secondaryType].threshold * 0.7);
    
    // 保存结果到本地存储
    localStorage.setItem('tcmQuizResult', primaryType);
    localStorage.setItem('tcmQuizSecondaryType', hasSecondaryType ? secondaryType : '');
    localStorage.setItem('tcmQuizScores', JSON.stringify(Object.keys(constitutionTypes).map(key => ({
        type: key,
        score: constitutionTypes[key].score
    }))));
    
    // 添加额外的混合体质判断
    if (hasSecondaryType) {
        localStorage.setItem('tcmQuizMixedType', `${primaryType}_${secondaryType}`);
    } else {
        localStorage.setItem('tcmQuizMixedType', '');
    }
}

/**
 * 初始化结果页面
 */
function initResultPage() {
    const resultType = localStorage.getItem('tcmQuizResult');
    if (!resultType) {
        // 如果没有结果，重定向到测验页面
        window.location.href = 'quiz.html';
        return;
    }
    
    const secondaryType = localStorage.getItem('tcmQuizSecondaryType');
    const hasMixedType = secondaryType && secondaryType !== '';
    
    // 显示主要体质类型
    document.getElementById('constitution-name').textContent = getText(resultType);
    document.getElementById('constitution-description').textContent = getText(`${resultType}_desc`);
    
    // 设置图标
    document.getElementById('constitution-icon').src = `img/${resultType}.svg`;
    
    // 显示膳食建议
    document.getElementById('diet-title').textContent = getText(`${resultType}_diet`);
    document.getElementById('diet-content').textContent = getText(`${resultType}_diet_text`);
    document.getElementById('avoid-title').textContent = getText(`${resultType}_avoid`);
    document.getElementById('avoid-content').textContent = getText(`${resultType}_avoid_text`);
    
    // 显示生活方式建议
    document.getElementById('lifestyle-title').textContent = getText(`${resultType}_lifestyle`);
    document.getElementById('lifestyle-content').textContent = getText(`${resultType}_lifestyle_text`);
    
    // 如果有次要体质，显示相关信息
    const secondarySection = document.getElementById('secondary-type-section');
    if (hasMixedType && secondarySection) {
        // 设置次要体质信息
        secondarySection.style.display = 'block';
        const secondaryIcon = document.getElementById('secondary-icon');
        const secondaryName = document.getElementById('secondary-name');
        const secondaryDescription = document.getElementById('secondary-description');
        
        if (secondaryIcon) secondaryIcon.src = `img/${secondaryType}.svg`;
        if (secondaryName) secondaryName.textContent = getText(secondaryType);
        if (secondaryDescription) secondaryDescription.textContent = getText(`${secondaryType}_desc`);
    }
}

// 页面加载完成后自动初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检测当前页面并初始化相应功能
    if (document.querySelector('.quiz-form')) {
        initQuiz();
    } else if (document.querySelector('.result-container')) {
        initResultPage();
    }
    
    // 初始化语言选择器
    initLanguageSelector();
});

/**
 * 初始化语言选择器
 */
function initLanguageSelector() {
    // 获取语言按钮并添加事件监听
    document.querySelectorAll('.language-selector button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);
        });
    });
    
    // 设置默认语言
    const savedLang = localStorage.getItem('tcmQuizLanguage') || 'en';
    switchLanguage(savedLang);
} 