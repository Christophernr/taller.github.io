//ABRIR PRIMER MODAL 


let botones = document.querySelectorAll('.abrirPrincipal');

botones.forEach(funcionBotones => {

    funcionBotones.addEventListener('click', () => {
        const getClass = funcionBotones.getAttribute('data-modal');
        const TraerModales = document.querySelector(`.${getClass}`);
        TraerModales.showModal();
    });

});


// CERRAR TODOS LOS MODALES



let X = document.querySelectorAll('.cerrarTodo');

X.forEach(cerrarMOdales => {
    cerrarMOdales.addEventListener('click', () => {

        const modal = document.querySelectorAll('dialog[open]');
        modal.forEach(close => {
            close.close();

        })

    });

});

// LOS QUE ME LLEVAN AL SEGUNDO MODAL

let flechaAlN2 = document.querySelectorAll('.abrir-segundo-modal');

flechaAlN2.forEach(abrir2 => {
    abrir2.addEventListener('click', () => {
        const getClass = abrir2.getAttribute('data-modal');
        const TraerModales2 = document.querySelector(`.${getClass}`);

        TraerModales2.showModal();
    });

});

// LOS QUE ME LLEVAN AL TERCER MODAL

let flechaAlN3 = document.querySelectorAll('.abrir-tercer-modal');

flechaAlN3.forEach(abrir3 => {
    abrir3.addEventListener('click', () => {
        const getclass = abrir3.getAttribute('data-modal');
        const TraerModales3 = document.querySelector(`.${getclass}`);

        TraerModales3.showModal();
    });
                                                                        // NOTA:LOS MODALES YA ABIERTOS NO SE PUEDEN ABRIR NUEVO,
                                                                        //         EN UN FUTURO PROCURAR SIEMRPE CERRAR
});

// LOS QUE ME LLEVAN AL PRIMERO DESDE EL SEGUNDO

let flechaAtrasn1 = document.querySelectorAll('.abrir-primero-modal');

flechaAtrasn1.forEach(abrir1 => {
    abrir1.addEventListener('click', () => {
// ABRIR EL MODAL
        const getClass = abrir1.getAttribute('data-modal');
        const TraerModales1 = document.querySelector(`.${getClass}`);
        TraerModales1.showModal();
// CERRAR EL ACTUAL PARA ABRIR EL NUEVO
        const modal22 = abrir1.closest('dialog');
        modal22.close();
    });

});

//LOS QUE ME LLEVAN AL DOS DESDE EL TRES

let flechaAtrasn2= document.querySelectorAll('.abrir-modal-dos');
flechaAtrasn2.forEach(abrir2=>{
    abrir2.addEventListener('click',()=>{
        const getClass=abrir2.getAttribute('data-modal');
        const TraerModales2=document.querySelector(`.${getClass}`);

        TraerModales2.showModal();

        //CERRAR ESTE PARA ABRIR EL DOS

        const modal33= abrir2.closest('dialog');
        modal33.close();

    });
});