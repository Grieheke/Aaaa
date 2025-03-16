document.getElementById("loginBtn").addEventListener("click", function() {
    let discordName = document.getElementById("discordName").value;
    let age = document.getElementById("age").value;
    let country = document.getElementById("country").value;

    if (!discordName || !age || !country) {
        alert("يرجى ملء جميع الحقول قبل الإرسال.");
        return;
    }

    // إخفاء صفحة تسجيل الدخول وإظهار صفحة الجوائز
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("rewardsPage").classList.remove("hidden");
});

// إضافة إشعار عند الضغط على زر "أرسل ✅"
document.querySelectorAll(".sendBtn").forEach(button => {
    button.addEventListener("click", function() {
        alert("✅ تم إرسال طلبك بنجاح! للحصول على الجائزة ارسل توثيق انك قمت بادخال عشرة اشخاص للحصول على  الجائزة.");
    });
});