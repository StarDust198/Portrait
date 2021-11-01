import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', () => {
        getResource('http://localhost:3000/styles')
            .then(res => {
                console.log(res);
                createCards(res);
            }).catch(() => {
                console.log('Ошибка');
            }).finally(() => {
                btn.remove();
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