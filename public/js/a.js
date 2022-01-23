$(document).ready(() => {

var u = $('form[action]').val();

alert(u);

function s() {
    a.onreadystatechange = function () {

        switch (this.readyState) {
            case 4:

            switch (this.status) {
                case 200:
                    $('.a.alert').html('<b>Success</b>');
                    break;
                case 404:
                    $('.a.alert').html('<b>Not Found</b>');
                    break;
                case 419:
                    $('.a.alert').html('<b>Session Expired</b>');
                    break;
                case 500:
                    $('.a.alert').html('<b>Server Error</b>');
                    break;
            
                default:
                $('.a.alert').html('<b>Unknown Error</b>');
                    break;
            }

                break;
        
            default:
            $('.fm .fm-btn').attr('disabled', 'disabled').css('opacity', '0.6').html('<i><b>signing in...</b></i>');
                break;
        }
    };
}

s();

a.open("get", u, true);

a.send();

});