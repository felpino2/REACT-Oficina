document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slider = document.querySelector('.slider');

    let scrollAmount = 0;
    const scrollStep = 320; // Ajuste conforme necessário para o tamanho dos slides

    nextBtn.addEventListener('click', () => {
        console.log('Next button clicked'); // Verifique se o botão está sendo clicado
        if (scrollAmount < slider.scrollWidth - slider.clientWidth) {
            scrollAmount += scrollStep;
            slider.scroll({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    prevBtn.addEventListener('click', () => {
        console.log('Previous button clicked'); // Verifique se o botão está sendo clicado
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            slider.scroll({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});
