import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', () => {
        getResource('assets/db.json')
            .then(res => {
                createCards(res.styles);
                btn.remove();
            }).catch(error => {
                const errorDiv = document.createElement('div');

                errorDiv.style.textAlign = 'center';
                errorDiv.style.marginBottom = '-20px';
                errorDiv.textContent = `Поизошла ошибка: ${error.message}`;

                document.querySelector(wrapper).appendChild(errorDiv);
                setTimeout(() => {
                    errorDiv.remove();
                }, 3000);
            });
    });

    function createCards(response) {
        response.forEach(({ src, title, link }) => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('animated', 'fadeInDown', 'col-sm-3',
                'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            cardDiv.innerHTML = `
                <div class=styles-block>
                    <img src="${src}" alt>
                    <h4>"${title}"</h4>
                    <a href=""${link}"">Подробнее</a>
                </div>`;
            document.querySelector(wrapper).appendChild(cardDiv);
        });
    }
};

export default showMoreStyles;