$(document).ready(() => {

    var u = $('a').attr('href');
    var l = $('a');
    var m = "You are offline. \nAre you sure you want to continue?";

    if (navigator.onLine) {
        var o = navigator.onLine;

    } else {
        var o = null;

    }

    function g() {
  $.get(u, function(data, xhr){
    let a = xhr;

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
                        $('.alert-danger').html(r);
                    }
                } else {
                    $(b).attr({
                        disabled: "",
                        value: "signing in...",
                        border: "1px !important"
                    }).css({
                        opacity: 0.6,
                        cursor: "not-allowed",
                        "pointer-events": "none"
                    });
                }
            };

  });
    }

    $("form").on("submit", function (e) {
        //$(this).hide();
        e.preventDefault();

        if (o == true || o == null) {
            g();

        } else if (confirm(m)) {
            g();
        }
    });

});


$(l).click(function(){
        e.preventDefault();

        if (o == true || o == null) {
            g();

        } else if (confirm(m)) {
            g();
        }
});