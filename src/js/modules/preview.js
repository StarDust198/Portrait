const preview = (blockSelector, fileTag) => {
    const blocks = document.querySelectorAll(blockSelector);

    const showImg = (block) => {
        const img = block.querySelector('img');
        img.classList.add('animated', 'fadeIn');
        img.src = img.src.slice(0, -4) + fileTag + img.src.slice(-4);
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.classList.remove('fadeIn');
            p.classList.add('animated', 'fadeOut');
        });      
    };

    const hideImg = (block) => {
        const img = block.querySelector('img');
        img.classList.remove('fadeIn');
        img.src = img.src.slice(0, -(4 + fileTag.length)) + img.src.slice(-4);
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.classList.remove('fadeOut');
            p.classList.add('fadeIn');
        });      
    };

    blocks.forEach(item => {
        item.addEventListener('mouseover', () => {
            showImg(item);
        });

        item.addEventListener('mouseout', () => {
            hideImg(item);
        });
    });
};

export default preview;