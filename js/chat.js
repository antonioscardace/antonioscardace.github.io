var validEmail = false;

function colorUpdate(_this, col, rgba = null) {
    const shadow = rgba != null ? "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px " + rgba : "none"; 
    $(_this).css({"border-color": col, "box-shadow": shadow, "outline": "0 none"});
}

function validate(_this, value_len) {    
    if (value_len <= 0) colorUpdate(_this, '#ccc');
    else if (value_len >= _this.attr('minlength') && value_len <= _this.attr('maxlength')) colorUpdate(_this, 'green', 'rgba(0, 255, 0, 0.6)');
    else colorUpdate(_this, 'red', 'rgba(255, 0, 0, 0.6)');
}

function hideLoading() {
    $('.loader').animate({opacity: '0'}, 1500);
    $('.loading-page p').animate({opacity: '0'}, 1500);
    setTimeout(() => { $('.loading-page').css('display', 'none'); }, 1500);
    setTimeout(() => { $('.realPage').css('display', 'contents'); }, 1500);
    setTimeout(() => { $('.realPage *').animate({opacity: '1'}, 1500); }, 1500);
}

$(document).ready(() => {
    $('#name').on('keyup', (e) => {
        validate($('#name'), $('#name').val().length);
    })
    $('#details').on('keyup', (e) => {
        validate($('#details'), $('#details').val().length);
    })

    $('#email').on('keyup', (e) => {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const is_email = reg.test($('#email').val());
        
        if ($('#email').val().length <= 0) {
            colorUpdate($('#email'), '#ccc');
            validEmail = false;
        }
        else if (is_email) {
            colorUpdate($('#email'), 'green', 'rgba(0, 255, 0, 0.6)');
            validEmail = true;
        }
        else {
            colorUpdate($('#email'), 'red', 'rgba(255, 0, 0, 0.6)');
            validEmail = false;
        }
    })

    $('form').submit((e) => {
        if (!validEmail) e.preventDefault();
        else $("#btnSubmit").attr("disabled", true);
    })

    window.setTimeout(() => {
        $(".alert").fadeTo(500, 0).slideUp(500, () => {
            $(this).remove(); 
            $(".alert").attr('style', 'display: none!important; transition : opacity 0.5s ease-out');
        });
    }, 9000)
})