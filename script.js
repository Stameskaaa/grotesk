const dialogButton = document.getElementById('dialog-button');
const dialogMenu = document.getElementById('dialog');
const closeDialogButton = document.getElementById('modal-button--close');
const firstCtaButt = document.getElementById('scroll-to-form');
const secondCtaButt = document.getElementById('scroll-to-slider');
const accordionList = document.querySelectorAll('.accordion');
const tgLinkButt = document.getElementById('tg-link-butt');
const vkLinkButt = document.getElementById('vk-link-butt');
const ctaCheckBox = document.getElementById('cta-checkbox');
const ctaGradientCube = document.getElementById('gradient-cube');
const form = document.querySelector('.form-body');
const formInputs = form.querySelectorAll('input');

// listeners

dialogButton.addEventListener('click', showDialog);

dialogMenu.addEventListener('click', closeDialog);

firstCtaButt.addEventListener('click', scrollToForm);

secondCtaButt.addEventListener('click', scrollToSlider);

accordionList.forEach((accordion) => accordion.addEventListener('click', showAccordion));

tgLinkButt.addEventListener('click', () => redirectTo('https://t.me/growtask_studio'));

vkLinkButt.addEventListener('click', () => redirectTo('https://vk.com/growtask'));

ctaCheckBox.addEventListener('change', changeBackgroundCube);

formInputs.forEach((input) => {
  const name = input.name;

  switch (name) {
    case 'name':
      input.addEventListener('input', applyNameFormate);
      break;
    case 'phone':
      input.addEventListener('input', applyNumberFormate);
      break;
    case 'email':
      input.addEventListener('input', applyEmailFormate);
      break;
  }
});

form.addEventListener('submit', submitForm);

// functions

function showDialog() {
  if (!dialogMenu) return;
  dialogMenu.showModal();
  document.body.style.overflow = 'hidden';
}

function closeDialog(e) {
  if (e.target === dialogMenu || e.target === closeDialogButton) {
    document.body.style.overflow = '';
    dialogMenu.close();
  }
}

function scrollToForm() {
  const form = document.getElementById('form');
  if (form) {
    form.scrollIntoView({
      block: 'start',
    });
  }
}

function scrollToSlider() {
  const slider = document.getElementById('slider');
  if (slider) {
    slider.scrollIntoView({
      block: 'start',
    });
  }
}

function showAccordion(e) {
  const accordionContent = e.target.closest('.accordion').querySelector('.accordion-content');

  if (accordionContent) {
    if (accordionContent.classList.contains('accordion-content--show')) {
      accordionContent.classList.remove('accordion-content--show');
      accordionContent.style.height = '0px';
    } else {
      accordionContent.classList.add('accordion-content--show');
      const contentHeight = accordionContent.scrollHeight;
      accordionContent.style.height = `${contentHeight}px`;
    }
  }
}

function redirectTo(path) {
  window.location.href = path;
}

function changeBackgroundCube(e) {
  if (e.target.checked) {
    ctaGradientCube.style.background = 'var(--color2-main)';
  } else {
    ctaGradientCube.style.background = 'var(--gradient-main-linear)';
  }
}

function applyNameFormate(e) {
  let name = e.target.value;
  name = name.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
  e.target.value = name;
}

function applyNumberFormate(e) {
  let number = e.target.value;
  number = number.replace(/\D/g, '');
  e.target.value = number;
}

function applyEmailFormate(e) {
  let email = e.target.value;
  email = email.replace(/[^a-zA-Z0-9._%+-@]/g, '');
  e.target.value = email;
}

function submitForm(e) {
  e.preventDefault();
  const result = {};
  formInputs.forEach((input) => {
    result[input.name] = input.value;
  });

  // Сделать валидацию и уведомления
}

// Notification
