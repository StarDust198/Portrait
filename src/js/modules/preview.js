const preview = (blockSelector, fileTag) => {
    const blocks = document.querySelectorAll(blockSelector);

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            for (let element of block.children) {
                element.classList.add('animated');
                if (element.tagName === 'IMG') {
                    element.classList.add('fadeIn');
                    let src = element.src.split('.');
                    element.src = src[0] + fileTag + '.' + src[1];
                } else if (!element.classList.contains('sizes-hit')) {
                    element.classList.add('fadeOut');
                }
            }
        });
        
        block.addEventListener('mouseout', () => {
            for (let element of block.children) {
                if (element.tagName === 'IMG') {
                    element.classList.remove('fadeIn');
                    let src = element.src.split('.');
                    element.src = src[0].slice(0, -fileTag.length) + '.' + src[1];
                } else if (!element.classList.contains('sizes-hit')) {
                    element.classList.remove('fadeOut');
                    element.classList.add('fadeIn');
                }
            }
        });
    });
};

export default preview;