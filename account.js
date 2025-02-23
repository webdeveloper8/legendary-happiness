// إظهار وإخفاء القائمة المنسدلة
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// إغلاق القائمة عند النقر على رابط
function closeMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = 'none';
}

// إظهار القسم المحدد وإخفاء الآخرين
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // إخفاء جميع الأقسام
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        // إظهار القسم المحدد
        targetSection.classList.add('active');
    });
});

// فتح نافذة الصورة الموسعة
function openModal(imgSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

// إغلاق نافذة الصورة الموسعة
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
