function fadeIn(identifier, delay_time = 0, position = 1.1, time = 400) {
    const mid_of_object = identifier.offset().top + Math.floor(identifier.outerHeight() / 2);
    const tq_of_window = $(window).scrollTop() + Math.floor($(window).height() / position);

    if (tq_of_window >= mid_of_object)
        identifier.delay(delay_time).animate({ 'opacity': '1' }, time);
}

function mediaQueries() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
        $(".home .scroll p i").addClass('fa-chevron-up');
        $(".home .scroll p i").removeClass('fa-chevron-down');
    }
    else {
        $(".home .scroll p i").removeClass('fa-chevron-up');
        $(".home .scroll p i").addClass('fa-chevron-down');
    }
}

function typeWriter(txt, N, pos, MsSpeed) {
    if (pos < N) {
        $('.home .middle h2').html(txt.substr(0, pos+1) + "<span class='blink'>|</span>");
        setTimeout(typeWriter, MsSpeed, txt, N, pos+1, MsSpeed);
    }
}

$(document).ready(() => {
    mediaQueries();
    window.addEventListener("resize", mediaQueries, false);

    setTimeout(typeWriter, 4000, "Student of Computer Science", 27, 0, 250);

    $('.scroll').click(() => {
        location.href = '#presentation-page'
    })

    $('body').on('scroll', () => {
        fadeIn($(".presentation .container h1"), 250);
        fadeIn($(".presentation .container h4"), 500);
    })
})