// متغير لتخزين عدد النجوم التي يجمعها الطفل
let stars = 0;

// دالة نطق الكلمة وعرضها بشكل مكبر
function playLesson(word, emoji) {
    // 1. عرض الكلمة والرمز في منطقة التركيز للطفل
    const focusArea = document.getElementById('focus-area');
    focusArea.innerHTML = `${emoji} <span style="color: #ff6b6b;">${word}</span>`;
    
    // 2. ميزة النطق الآلي بصوت واضح ومناسب للأطفال
    let speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US'; // لكنة أمريكية تعليمية
    speech.rate = 0.75;    // إبطاء الصوت قليلاً ليفهم الطفل الحروف
    speech.pitch = 1.3;    // جعل طبقة الصوت مرحة وطفولية
    window.speechSynthesis.speak(speech);
}

// دالة التحقق من إجابة الطفل في الاختبار
function checkAnswer(isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    const scoreCount = document.getElementById('score-count');
    
    if (isCorrect) {
        // إذا كانت الإجابة صحيحة، نزيد النجوم وننطق عبارة تشجيعية
        stars += 1;
        scoreCount.innerHTML = `⭐ ${stars}`;
        feedback.innerHTML = "🎉 ممتاز! إجابة صحيحة رائعة! 🎉";
        feedback.style.color = "#4ecdc4";
        
        let speech = new SpeechSynthesisUtterance("Excellent! Great job!");
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
    } else {
        // إذا أخطأ الطفل تشجعه على المحاولة ثانية دون إحباط
        feedback.innerHTML = "💡 حاول مرة أخرى، أنت تستطيع فعلها!";
        feedback.style.color = "#ff6b6b";
        
        let speech = new SpeechSynthesisUtterance("Try again, you can do it!");
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
    }
}
