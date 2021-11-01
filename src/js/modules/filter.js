const filter = (menuSelector, blockSelector, absentSelector, activeClass) => {
    const menu = document.querySelector(menuSelector),
          menuItems = menu.querySelectorAll('li'),
          blocks = document.querySelectorAll(blockSelector),
          absentBlock = document.querySelector(absentSelector);
    menu.addEventListener('click', function(e) {
        const tgt = e.target;
        
        if (tgt && tgt.nodeName === 'LI') {
            let counter = 0;

            menuItems.forEach(item => {
                item == tgt ? item.classList.add(activeClass) : item.classList.remove(activeClass);
            });
            
            blocks.forEach((block, i) => {
                block.classList.add('animated', 'fadeIn');
                if (block.classList.contains(tgt.classList[0])) {
                    block.style.display = 'block';
                    counter++;
                } else {
                    block.style.display = 'none';
                }

                if (i === blocks.length - 1 && counter === 0) {
                    absentBlock.style.display = 'block';
                } else {
                    absentBlock.style.display = 'none';
                }
            });
        }
    });

};

export default filter;