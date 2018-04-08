const loading = document.getElementById("blank");

window.onload = function loaded() {
  loading.classList.add("fadeOut");
  window.setTimeout(deleteLoad, 1000)
};

function deleteLoad() {
  loading.parentNode.removeChild(loading);

  const dataText = "MARCO GARCIA";

  function typeWriter(text, i, fnCallback) {

    if (i < (text.length)) {

      document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation() {
    typeWriter(dataText, 0, function () {
    });
  }
  StartTextAnimation();
}

$(document).ready(function () {

  $('.tab').click(function () {
    $('#graphisme-tab, #dev-tab').removeClass('is-active')
    $(this).addClass('is-active')

    if ($(this).attr('id') === 'graphisme-tab') {
      $('#developpement').hide()
      $('#graphisme').show()
    } else if ($(this).attr('id') === 'dev-tab') {
      $('#graphisme').hide()
      $('#developpement').show()
    }
  })

  $('.card').click(function () {
    $('#modal-' + $(this).attr('id')).show()
  })

  $('.delete, .modal-background, .modal-close').click(function () {
    $('.modal').hide()
  })
})

function sendMail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name.length && email.length && message.length) {
    $.post('./assets/php/send.php', $('#mailform').serialize());
    openModal();
  }

}

function openModal() {
  const modal = document.getElementById('modal-contact');
  modal.style.display = "block";
}