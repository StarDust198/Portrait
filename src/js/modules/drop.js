import { postData } from '../services/requests';

const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0, 0, 0, .5";
    }

    function unHighlight(item) {
        item.closest('.file_upload').style.border = "none";
        item.closest('.file_upload').style.backgroundColor = "";
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            let dots;
            const fileNameArr = input.files[0].name.split('.');
            dots = fileNameArr[0].length > 7 ? '...' : '.';
            const name = fileNameArr[0].substring(0, 7) + dots + fileNameArr[1];
            input.previousElementSibling.textContent = name;

            if (input.getAttribute('data-autoupload')) {
                let btn = input.previousElementSibling.previousElementSibling;
                const formData = new FormData();

                formData.append('upload', input.files[0]);
                postData('assets/server.php', formData)
                    .then(res => {
                        console.log(res);
                        btn.textContent = 'Отправлено!';
                    }).catch(() => {
                        btn.textContent = 'Ошибка!';
                    }).finally(() => {
                        input.value = '';
                        input.previousElementSibling.textContent = 'Файл не выбран';        
                        setTimeout(() => {
                            btn.textContent = 'Загрузить фотографию';  
                        }, 5000);
                    });
            }
        });
    });
};

export default drop;