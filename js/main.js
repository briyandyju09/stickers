document.addEventListener("DOMContentLoaded", function () {
    const stickers = document.querySelectorAll('.sticker');
    const clickedStickers = JSON.parse(localStorage.getItem('clickedStickers')) || [];


    const stickerDivs = document.querySelectorAll('.css-74f4dx');
  

    clickedStickers.forEach(id => {
        const sticker = document.querySelector(`.css-74f4dx[data-id="${id}"]`);
        if (sticker) {
            sticker.classList.add('clicked');
        }
    });
  

    stickerDivs.forEach(sticker => {
        sticker.addEventListener('click', () => {
            const stickerId = sticker.getAttribute('data-id');
            

            if (sticker.classList.contains('clicked')) {

                sticker.classList.remove('clicked');
                const index = clickedStickers.indexOf(stickerId);
                if (index > -1) {
                    clickedStickers.splice(index, 1);
                }
            } else {

                sticker.classList.add('clicked');
                clickedStickers.push(stickerId);
            }
  

            localStorage.setItem('clickedStickers', JSON.stringify(clickedStickers));
        });
    });
});
