var window_width = document.body.clientWidth;
var viewProducts = '';
window.addEventListener(
  'resize',
  function (event) {
    window_width = document.body.clientWidth;
    viewProducts(window_width);
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
if (document.querySelector('.type-view-products')) {
  const gridView = document.getElementById('grid-view');
  const listView = document.getElementById('list-view');
  const listViewCompact = document.getElementById('list-view-compact');
  let productsList = document.querySelectorAll('.row-products .product-layout');
  gridView.addEventListener('click', function (event) {
    gridView.classList.add('active');
    listView.classList.remove('active');
    listViewCompact.classList.remove('active');
    productsList.forEach((box) => {
      box.className = '';
      box.classList.add(
        'product-layout',
        'product-grid',
        'col-12',
        'col-md-4',
        'col-lg-3',
        'col-xl-1-of-5'
      );
    });
    localStorage.setItem('display', 'grid');
  });
  listView.addEventListener('click', function (event) {
    listView.classList.add('active');
    gridView.classList.remove('active');
    listViewCompact.classList.remove('active');
    productsList.forEach((box) => {
      box.className = '';
      box.classList.add('product-layout', 'product-list', 'col-12');
    });
    localStorage.setItem('display', 'list');
  });
  listViewCompact.addEventListener('click', function (event) {
    listViewCompact.classList.add('active');
    gridView.classList.remove('active');
    listView.classList.remove('active');
    productsList.forEach((box) => {
      box.className = '';
      box.classList.add('product-layout', 'product-list-compact', 'col-12');
    });
    localStorage.setItem('display', 'list-compact');
  });
  viewProducts = (window_width) => {
    if (window_width < 991) {
      localStorage.setItem('display', 'grid');
    }
    if (localStorage.getItem('display') == 'list-compact') {
      listViewCompact.dispatchEvent(new Event('click'));
    } else if (localStorage.getItem('display') == 'list') {
      listView.dispatchEvent(new Event('click'));
    } else {
      gridView.dispatchEvent(new Event('click'));
    }
  };
}

function plusCount(event) {
  parent = event.parentElement;
  value = parent.querySelector('input[name="quantity"]').value;
  if (value > 0) {
    parent.querySelector('input[name="quantity"]').value = parseInt(value) + 1;
  } else {
    parent.querySelector('input[name="quantity"]').value = 1;
  }
}
function minusCount(event) {
  parent = event.parentElement;
  value = parent.querySelector('input[name="quantity"]').value;
  if (value > 1) {
    parent.querySelector('input[name="quantity"]').value = parseInt(value) - 1;
  } else {
    parent.querySelector('input[name="quantity"]').value = 1;
  }
}
