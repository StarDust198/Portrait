import { postData } from '../services/requests';

function forms(state) {
    const allForms = document.querySelectorAll('form'),
          upload = document.querySelectorAll('[name ="upload"]');
        //   phoneInputs = document.querySelectorAll('input[name="user_phone"]'),
        //   windows = document.querySelectorAll('[data-modal]');
    
/*     phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^0-9\+\-\(\)]/g, '');
        });
    }); */

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        // designer: 'assets/question.php',
        question: 'assets/question.php'
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const fileNameArr = item.files[0].name.split('.');

            dots = fileNameArr[0].length > 7 ? '...' : '.';
            const name = fileNameArr[0].substring(0, 7) + dots + fileNameArr[1];

            item.previousElementSibling.textContent = name;

            if (item.getAttribute('data-autoupload')) {
                let btn = item.previousElementSibling.previousElementSibling;
                const formData = new FormData();

                formData.append('upload', item.files[0]);
                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                        btn.textContent = 'Отправлено!';
                    }).catch(() => {
                        btn.textContent = 'Ошибка!';
                    }).finally(() => {
                        item.value = '';
                        item.previousElementSibling.textContent = 'Файл не выбран';        
                        setTimeout(() => {
                            btn.textContent = 'Загрузить фотографию';  
                        }, 5000);
                    });
            }
        });
    });

    allForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.appendChild(statusMessage);       
            
            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.src = message.spinner;
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);
      
            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);            

            const formData = new FormData(form);
            let api;
            api = form.closest('.popup-design') || form.classList.contains('calc_form') ?
            path.designer : path.question;
            if (form.classList.contains('calc_form')) {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                }).catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                }).finally(() => {
                    form.reset();
                    upload.forEach(item => {
                        item.previousElementSibling.textContent = 'Файл не выбран';
                    });
                    // setTimeout(() => {
                    //     windows.forEach(window => window.style.display = 'none');               
                    // }, 3000);                    
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });
}

export default forms;