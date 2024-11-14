let divGetText = document.querySelectorAll('.art-titulo-icon');
divGetText.forEach(abrir => {
    abrir.addEventListener('click', () => {
        const getModal = abrir.getAttribute('data-modal');
        const flecha= abrir.querySelector('.fa-solid');
        const TraerGetModal = document.querySelector(`.${getModal}`);

        if (TraerGetModal.style.display == "none") {
            TraerGetModal.style.display = "block";
            flecha.style.transform = `rotateZ(${180}deg)`;
        } else {
            TraerGetModal.style.display = "none";
            flecha.style.transform = `rotateZ(${0}deg)`;
        }
    });
});