const share_icon = document.querySelector('.icon-share');
const share_tooltip = document.querySelector('.share-tooltip');

share_icon.addEventListener('click', e => {
    if (share_tooltip.style.visibility == 'hidden' || share_tooltip.style.visibility == ''){
        share_tooltip.style.visibility = 'visible';
    } else {
        share_tooltip.style.visibility = 'hidden';
    }
});
