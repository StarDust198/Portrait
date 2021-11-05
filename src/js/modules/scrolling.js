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

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                speed = 0;

            requestAnimationFrame(step);

            function step() {
                speed = toBlock >= 100 ? 100 : toBlock <= -100 ? -100 : toBlock;
                document.documentElement.scrollBy(0, speed);
                if (toBlock >= 100 || toBlock <= -100) {
                    toBlock -= speed; 
                }
                if (!(toBlock < 100 && toBlock > -100)) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};

export default scrolling;