
const xajax = new XMLHttpRequest();
const url = "https://api-test.me/product/read_one.php?id=60";

ajaxstate();

xajax.open("get", url, true);

xajax.send();

function ajax_exec() {
  const ajax = new XMLHttpRequest();
  const url = "https://api-test.me/product/read_one.php?id=60";

  ajax.onreadystatechange = function () {
    if (this.readyState == 1) {
      document.getElementById("ajax_notify").innerHTML =
        "server connection established";
    } else if (this.readyState == 2) {
      document.getElementById("ajax_notify").innerHTML = "request received";
    } else if (this.readyState == 3) {
      document.getElementById("ajax_notify").innerHTML = "processing request";
    } else if (this.readyState == 4 && this.status == 200) {
        
    }
  };

  ajax.open("get", url, true);

  ajax.send();
}
