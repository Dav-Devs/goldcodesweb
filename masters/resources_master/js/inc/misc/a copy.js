$(document).ready(() => {

var u = $('form').attr('action');
var f_el = $('form');
var f = $.param(f_el);

// console.log(u);

// alert(u);

// function s() {
//     a.onreadystatechange = function () {

//         switch (this.readyState) {
//             case 4:

//             switch (this.status) {
//                 case 200:
//                     $('.alert').html('<b>Success</b>');
//                     break;
//                 case 404:
//                     $('.alert').html('<b>Not Found</b>');
//                     break;
//                 case 419:
//                     $('.alert').html('<b>Session Expired</b>');
//                     break;
//                 case 500:
//                     $('.alert').html('<b>Server Error</b>');
//                     break;
            
//                 default:
//                 $('.alert').html('<b>Unknown Error</b>');
//                     break;
//             }

//                 break;
        
//             default:
//             $('.fm .fm-btn')
//             .attr({
//               disabled: "",
//               value: "signing in...",
//               border: "1px !important"
//             })
//             .css({
//             opacity: 0.6,
//             cursor: "not-allowed"
//           });
//                 break;
//         }
//     };
// }

// s();

// a.open("get", u, true);

// a.send();


if (navigator.onLine) {
var o = navigator.onLine;

} else {
var o = null;
    
}

if (o == true || o == null) {
    

$.post(u, f, function(r,s,a){

      a.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            $('.a').html('<b>Success</b>');
          } else if (this.status == 404) {
            $('.a').html('<b>Not Found</b>');
          } else if (this.status == 419) {
            $('.a').html('<b>Session Expired</b>');
          } else if (this.status == 500) {
            $('.a').html('<b>Server Error</b>');
          } else {
            $('.a').html('<b>Unknown Error</b>');
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

} else {
    
}
});