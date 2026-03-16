// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const chbFull = form.querySelector('[value = fulfilled]:checked');
  const chbRej = form.querySelector('[value = rejected]:checked');

  const delayMS = form.delay.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(delay => {
      console.log(chbFull);

      if (chbFull === null) {
        iziToast.show({
          backgroundColor: 'red',
          title: `❌ Rejected promise in ${delayMS}ms`,
          position: 'topRight',
        });
      } else {
        iziToast.show({
          backgroundColor: 'green',
          title: `✅ Fulfilled promise in ${delayMS}ms`,
          position: 'topRight',
        });
      }
    }, delayMS);
  });
  form.reset();
});
