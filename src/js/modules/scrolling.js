const scrolling = (upSelector) => {
    const upArrow = document.querySelector(upSelector),
          links = document.querySelectorAll('a[href^="#"]:not([href="#"])');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upArrow.classList.remove('fadeOut');
            upArrow.classList.add('animated', 'fadeIn');
        } else {
            upArrow.classList.remove('fadeIn');
            upArrow.classList.add('fadeOut');
        }
    });

    const element = document.documentElement,
          body = document.body;

    const calcScroll = (item) => {
        item.addEventListener('click', function(e) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (this.hash !== '') {
                e.preventDefault();
                let hashElement = document.querySelector(this.hash),
                    hashElementTop = 0;

                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop);
                console.log(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed = to > from ? 30 : -30;

        let move = setInterval(function() {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (
                prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    };

    console.log(history);
    links.forEach(link => calcScroll(link));
};

export default scrolling;