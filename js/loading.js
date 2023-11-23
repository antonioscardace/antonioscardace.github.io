var hideLoading = () => {
    $('.loader').animate({opacity: '0'}, 1150);
    $('.loading-page p').animate({opacity: '0'}, 1150);
    setTimeout(() => { $('.loading-page').css('display', 'none'); }, 1150);
    setTimeout(() => { $('.realPage').css('display', 'contents'); }, 1150);
    setTimeout(() => { $('.realPage *').animate({opacity: '1'}, 1150); }, 1150);
}

$(document).ready(() => {
    setTimeout(hideLoading, 1500);
})