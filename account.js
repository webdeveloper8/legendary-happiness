document.getElementById('payment-form').addEventListener('submit', function(event) {  
    event.preventDefault(); // منع إعادة تحميل الصفحة  

    // عرض رسالة النجاح  
    document.getElementById('payment-form').style.display = 'none';  
    document.getElementById('payment-result').style.display = 'block';  
});
