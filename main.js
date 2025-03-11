let Arrow = document.getElementById('Arrow');
let LeftBar = document.getElementById('LeftNavBar');

let LeftNavOpen = false;

function OpenLeftBar() {
    LeftNavOpen = !LeftNavOpen;

    Arrow.style.transform = (LeftNavOpen && '180dg')
    LeftBar.style.width = (LeftNavOpen && '200px') || (!LeftNavOpen && 0);

    Array.from(LeftBar.children).forEach((button) => {
        button.addEventListener('mouseover', () => {
          button.style.border = '2px solid grey';
        });
        
        button.addEventListener('mouseout', () => {
          button.style.border = '1.5px solid white';
        });
    });
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
    
}

  preloadAssets([
    { url: 'https://1drv.ms/i/c/18de5401116012f0/IQRfmWp0PuyiRaeG8lCoOmRXAVwBjd5Zjf_X95KfhCEOmDE?width=1024', as: 'image' },
    { url: 'https://1drv.ms/i/c/18de5401116012f0/UQTwEmARAVTeIIAYNgIAAAAAAI2hhdhmK6jETkM?width=256', as: 'image' },
    { url: 'https://1drv.ms/i/c/18de5401116012f0/UQTwEmARAVTeIIAYNAIAAAAAAP2v2YQOLCNvGBM?width=256', as: 'image' },
    { url: 'main.js', as: 'script' },
    { url: 'styles.css', as: 'style' },
    { url: 'Gotham Black,otf', as: 'font', crossorigin: 'anonymous' }
  ]);
