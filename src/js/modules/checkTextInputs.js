const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            this.value = this.value.replace(/[^а-яё 0-9\?\.\,]/ig, '');
        });

/*         input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        }); */
    });
};

export default checkTextInputs;