$(document).ready(() => {

    var u = $('form').attr('action');
    var f = $('form');
    var f = $.param(f_el);
    var f = new FormData(f);

    console.log(f);

    if (navigator.onLine) {
        var o = navigator.onLine;

    } else {
        var o = null;

    }

    function p() {
        $.post(u, f, function (r, a) {

            a.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        $('.alert-success').html(r);
                    } else if (this.status == 404) {
                        $('.alert-secondary').html(r);
                    } else if (this.status == 419) {
                        $('.alert-info').html(r);
                    } else if (this.status == 500) {
                        $('.alert-warning').html(r);
                    } else {
                        $('.alert-e').html(r);
                    }
                } else {
                    $(b).attr({
                        disabled: "",
                        value: "signing in...",
                        border: "1px !important"
                    }).css({
                        opacity: 0.6,
                        cursor: "not-allowed",
                        pointerevent: "none"
                    });
                }
            };

        });

    }

    $("form").on("submit", function (e) {
        //$(this).hide();
        e.preventDefault();

        if (o == true || o == null) {
            p();

        } else {
            confirm("You are offline. \n Are you sure you want to continue?");
        }
    });

});
