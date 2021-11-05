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

    // requestAnimationFrame scroll
    let speed = 0.3;            // smaller number is faster

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let thisTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(thisTop - progress/speed, thisTop + toBlock) :
                        Math.min(thisTop + progress/speed, thisTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != thisTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });


    // timeout scroll 
/*     const element = document.documentElement,
          body = document.body;

    const calcScroll = (item) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            let scrollTop = Math.round(body.scrollTop || element.scrollTop),
                hashElement = document.querySelector(this.hash),
                hashElementTop = 0;

            while (hashElement.offsetParent) {
                hashElementTop += hashElement.offsetTop;
                hashElement = hashElement.offsetParent;
            }

            hashElementTop = Math.round(hashElementTop);
            console.log(hashElementTop);
            smoothScroll(scrollTop, hashElementTop, this.hash);
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
    
    links.forEach(link => calcScroll(link)); */
};

export default scrolling;