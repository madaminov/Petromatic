if (document.getElementById('preOrderModal')) {
  let preOrderModal = document.getElementById('preOrderModal');
  preOrderModal.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget;
    product = button.getAttribute('data-product');
    price = button.getAttribute('data-price');

    if (product == undefined) {
      product = '';
    }
    let modalTitle = preOrderModal.querySelector('.title-product');
    let modalBodyInputProduct = preOrderModal.querySelector(
      '.modal-body input[name="product"]'
    );
    let check_att = '';
    document
      .querySelectorAll(
        "#form-product input[type='text'], #form-product input[type='number'], #form-product input[type='hidden'], #form-product input[type='radio']:checked, #form-product input[type='checkbox'], #form-product select option:checked"
      )
      .forEach((elemnt) => {
        if (elemnt.getAttribute('data-option')) {
          check_att += elemnt.getAttribute('data-option') + ', ';
        }
      });
    modalTitle.textContent = product + ', ' + check_att + price;
    modalBodyInputProduct.setAttribute(
      'value',
      product + ', ' + check_att + price
    );
  });
}
