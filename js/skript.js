'use strick',

    (function showHeader() {
        let btnElementMenu = document.getElementById("menu")
        let blockElementInfo = document.getElementById("info")
        let elementPlus = document.getElementById("plus")
        let elementMinus = document.getElementById("minus")

        btnElementMenu.addEventListener("click", () => {
            blockElementInfo.classList.toggle("container__info__active")
            elementMinus.classList.toggle("container__info__active")
            elementPlus.classList.toggle("container__info__hidden")
        })
    })();


(function showMain() {
    let btnElementMenu = document.getElementById("main_menu")
    let blockElementInfo = document.getElementById("main_info")
    let elementPlus = document.getElementById("main_plus")
    let elementMinus = document.getElementById("main_minus")
    let btnElementHidden = document.getElementById("button_span_hidden")
    let btnElementBlock = document.getElementById("button_span_block")

    btnElementMenu.addEventListener("click", () => {
        elementPlus.classList.toggle("container__info__hidden")
        elementMinus.classList.toggle("container__info__active")
        btnElementHidden.classList.toggle("container__info__active")
        btnElementBlock.classList.toggle("container__info__hidden")
        blockElementInfo.classList.toggle("container__info__active")
    })
})();

function menuShow() {
    let openHeaderMenu = document.getElementById('open-header-menu');
    let blueHiddenMenu = document.getElementById('blue-hidden-menu');
    let closeHeader = document.getElementById('close-header-menu');


    openHeaderMenu.addEventListener('click', () => {
        blueHiddenMenu.classList.toggle("blue__active__mode")
    })
    closeHeader.addEventListener('click', () => {
        blueHiddenMenu.classList.toggle('blue__active__mode')
    })
}
menuShow();



const arrayOfLinksAnchors = document.querySelectorAll('.link-anchor');
const toTop = document.querySelector(".to-Top");
const mainSection = document.querySelector('.add-more')

window.addEventListener('scroll', () => {
    const sectionWorkCoords = mainSection.getBoundingClientRect();
    if (sectionWorkCoords.top < window.innerHeight) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
});


function smooth(e) {
    console.log(e.target);
    e.preventDefault();
    if (e.target.classList.contains('link-anchor')) {
        const href = e.target.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    }
}
const behaviorHeader = document.querySelector('.yellow__nav__list').addEventListener('click', smooth)


///======== MAIN BANNER +======??/

function closeMainBanner() {

    let mainBanner = document.querySelector(".main__banner");
    let bannerCloseButton = document.querySelector(".button-close");

    bannerCloseButton.addEventListener("click", () => {
        mainBanner.classList.toggle("main__banner__button__hidden");
    });
};
closeMainBanner();

//==============////

///===== Open Modal Window =====///
const openModalDiv = document.querySelectorAll('.open-modal-video');
let modalWindow = document.querySelectorAll('.modal-window-hidden');
const closeModalButton = document.querySelectorAll('.modal-close');
const closeModalBc = document.querySelectorAll('.modal-body');
////======Opem=======//
(function openModalWin() {

    if (openModalDiv.length > 1) {

        openModalDiv.forEach((element, i) => {
            element.classList.add('number-of-video-' + i)
        });

        modalWindow.forEach((element, i) => {
            element.classList.add('number-of-video-' + i)
        });
    };

    document.addEventListener('click', (e) => {
        let elem = e.target;
        // console.log(elem);

        for (let i = 0; i < openModalDiv.length; i++) {

            if (elem.classList.contains('number-of-video-' + i)) {
                modalWindow[i].classList.add('visibility');
            };
        };
    });

})();
///.......... Close Modal Win ............///////
(function closeModalWin() {
    if (closeModalBc.length > 1) {
        closeModalBc.forEach((element, i) => {
            element.classList.add('close-modal-win-' + i)
        });
        closeModalButton.forEach((element, i) => {
            element.classList.add('close-modal-win-' + i)
        });
        modalWindow.forEach((element, i) => {
            element.classList.add('close-modal-win-' + i)
        });
        document.addEventListener('click', (e) => {
            let elem = e.target;
            console.log(elem);

            for (let i = 0; i < closeModalBc.length; i++) {
                if (elem.classList.contains('close-modal-win-' + i)) {
                    modalWindow[i].classList.remove('visibility');
                };
            };
            for (let i = 0; i < closeModalButton.length; i++) {
                if (elem.classList.contains('close-modal-win-' + i)) {
                    modalWindow[i].classList.remove('visibility');
                };
            };
        });
    }
})();