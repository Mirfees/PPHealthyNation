document.addEventListener('DOMContentLoaded', function () {
    //plugins begin
    const lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
    });

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
    //plugins end

    //begin sliders
    const mainSlider = new Swiper('.hero__swiper', {
        // Optional parameters
        loop: true,
        spaceBetween: 20,
        autoplay: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });
    //end sliders

    //begin BURGER-MENU
    let burgerMenu = document.getElementById('burger-menu');
    let overlay = document.querySelector('.header-menu');
    if (burgerMenu) {
        burgerMenu.addEventListener('click',function(){
            this.classList.toggle("close");
            overlay.classList.toggle("overlay");
        });
    }
    //end BURGER-MENU

    let accountTabs = new Tabs('.account-tabs-container');
});

class Tabs {
    constructor(tabsContainerSelector) {
        this.tabsContainer = document.querySelector(tabsContainerSelector);
        this.tabTitleClass = 'account-header-menu__link';
        this.tabClass = 'account-tab';


        if (this.tabsContainer) {
            this.tabsContainer.addEventListener('click', (e) => {
                let target = e.target;

                if(target.closest(`.${this.tabTitleClass}`)) {
                    let tabTitle = (target.closest(`.${this.tabTitleClass}`));
                    let tabTitles = this.tabsContainer.querySelectorAll(`.${this.tabTitleClass}`);
                    let tabId = tabTitle.dataset.tabId;
                    let tab = this.tabsContainer.querySelector('#' + tabId);
                    let tabs = this.tabsContainer.querySelectorAll(`.${this.tabClass}`);

                    tabTitles.forEach(title => {
                        title.classList.remove('active');
                    });

                    tabs.forEach(tab => {
                        tab.classList.remove('active');

                        if (tab.id === tabId) {
                            tab.classList.add('active');
                        }
                    });

                    tabTitle.classList.add('active');
                }
            });
        }
    }
}