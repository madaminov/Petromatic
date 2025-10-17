var window_width = document.body.clientWidth;
window.addEventListener(
  'resize',
  function (event) {
    window_width = document.body.clientWidth;
  },
  true
);
//images
let setImg = () => {
  document.querySelectorAll('.img-data-src').forEach((box) => {
    src = box.getAttribute('data-src');
    box.setAttribute('src', src);
  });
};

let setBg = () => {
  document.querySelectorAll('.set-bg').forEach((box) => {
    bg = box.getAttribute('data-setbg');
    box.style.backgroundImage = "url('" + bg + "')";
  });
};
setImg();
setBg();
//images
Fancybox.bind('[data-fancybox]');
if (document.querySelector('.buttonCatalogToggle')) {
  var buttonCatalogToggle = document.querySelector('.buttonCatalogToggle');
  var sectionCatalogMenuToggle = document.querySelector(
    '.sectionCatalogMenuToggle'
  );
  var sectionCatalogMenuToggleWrapper = document.querySelector(
    '.sectionCatalogMenuToggle .wrapper'
  );
  var btnCloseCatalogToggle = document.querySelector('.btnCloseCatalogToggle');
  var bgCatalog = document.querySelector('.bg-catalog');
  buttonCatalogToggle.addEventListener('click', function (event) {
    sectionCatalogMenuToggle.classList.add('open');
    bgCatalog.classList.add('show');
    sectionCatalogMenuToggle.classList.add(
      'animate__animated',
      'animate__fadeIn'
    );
    setTimeout(() => {
      sectionCatalogMenuToggle.classList.remove(
        'animate__animated',
        'animate__fadeIn'
      );
    }, 600);
  });
  btnCloseCatalogToggle.addEventListener('click', function (event) {
    bgCatalog.classList.remove('show');
    sectionCatalogMenuToggle.classList.add(
      'animate__animated',
      'animate__fadeOut'
    );
    setTimeout(() => {
      sectionCatalogMenuToggle.classList.remove(
        'animate__animated',
        'animate__fadeOut'
      );
      sectionCatalogMenuToggle.classList.remove('open');
    }, 600);
  });
  bgCatalog.addEventListener('click', function (event) {
    bgCatalog.classList.remove('show');
    sectionCatalogMenuToggle.classList.add(
      'animate__animated',
      'animate__fadeOut'
    );
    setTimeout(() => {
      sectionCatalogMenuToggle.classList.remove(
        'animate__animated',
        'animate__fadeOut'
      );
      sectionCatalogMenuToggle.classList.remove('open');
    }, 600);
  });
}
