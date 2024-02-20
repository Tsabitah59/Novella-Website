// FAQ
const faqItem = document.querySelectorAll('.faq__item');

faqItem.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');

    item.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        const iconClass = isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line';
        const iconElement = faqBtn.querySelector('i');
        iconElement.className = `${iconClass} text-2xl`; 
        // Menggunakan className untuk mengubah kelas CSS dari icon
    });
});