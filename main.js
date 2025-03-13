let Arrow = document.getElementById('Arrow');
let MainText = document.getElementById('MainText');
let LeftBar = document.getElementById('LeftNavBar');

let LeftNavOpen = false;

function OpenLeftBar() {
  LeftNavOpen = !LeftNavOpen;

  let mainTextPositionY = MainText.getBoundingClientRect().top + window.scrollY;

  Arrow.style.transform = `rotate(${LeftNavOpen ? 180 : 0}deg) translateY(${LeftNavOpen ? mainTextPositionY : -mainTextPositionY}px)`;
  LeftBar.style.width = LeftNavOpen ? '200px' : '0';

  Array.from(LeftBar.children).forEach((button) => {
      button.addEventListener('mouseover', () => {
          button.style.border = '2px solid grey';
      });

      button.addEventListener('mouseout', () => {
          button.style.border = '1.5px solid white';
      });
  });
}

function SetStuffForScreenSize() {
   
}

function preloadAssets(assets) {
    assets.forEach(({ url, as, type, crossorigin }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = as || 'fetch';

        if (type) {
            link.type = type;
        }

        if (crossorigin) {
            link.crossOrigin = crossorigin;
        }

        document.head.appendChild(link);
    });
}

function OnLoad() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let Sizes = {
        Mx600: window.matchMedia("(max-width: 600px)"),
        Mn600: window.matchMedia("(min-width: 600px)"),
        Mn768: window.matchMedia("(min-width: 768px)"),
        Mn992: window.matchMedia("(min-width: 992px)"),
        Mn1200: window.matchMedia("(min-width: 1200px)"),
    };

    let mainTextPositionY = MainText.getBoundingClientRect().top + window.scrollY;
    Arrow.style.transform = `translateY(${mainTextPositionY}px)`;

    Object.values(Sizes).forEach((ScreenSize) => {
        if (ScreenSize.matches) {
            console.log("Matched");
        }
    });
}

preloadAssets([
    { url: 'https://1drv.ms/i/c/18de5401116012f0/IQRfmWp0PuyiRaeG8lCoOmRXAVwBjd5Zjf_X95KfhCEOmDE?width=1024', as: 'image' },
    { url: 'https://1drv.ms/i/c/18de5401116012f0/UQTwEmARAVTeIIAYNgIAAAAAAI2hhdhmK6jETkM?width=256', as: 'image' },
    { url: 'https://1drv.ms/i/c/18de5401116012f0/UQTwEmARAVTeIIAYNAIAAAAAAP2v2YQOLCNvGBM?width=256', as: 'image' },
    { url: 'main.js', as: 'script' },
    { url: 'styles.css', as: 'style' },
    { url: 'Gotham Black,otf', as: 'font', type: 'font/otf', crossorigin: 'anonymous' }
]);

window.onload = OnLoad;
