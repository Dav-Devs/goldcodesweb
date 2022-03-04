"use strict";
function sync() {
  let xhr = new XMLHttpRequest(); // new xml object
  xhr.open("GET", "../libs/users.php", true);
  $(xhr).on("load", function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = xhr.response;
        //userList.innerHTML = data;
        $(userList).html(data);
      }
    }
  });
  xhr.send();
}
