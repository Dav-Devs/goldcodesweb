function ajaxstate() {
  xajax.onreadystatechange = function () {

    if (this.readyState == 1) {

      document.getElementById("ajax_notify").innerHTML =
        "server connection established";

    } else if (this.readyState == 2) {

      document.getElementById("ajax_notify").innerHTML = "request received";
    } else if (this.readyState == 3) {

      document.getElementById("ajax_notify").innerHTML = "processing request";
    } else if (this.readyState == 4 && this.status == 200) {

      if (this.response !== null) {

        var json_obj = JSON.parse(this.response);

        document.getElementById("ajax_notify").innerHTML =
          "<h3>Name: " + json_obj.name + "</h3><br />";

        document.getElementById("ajax_notify").innerHTML +=
          "<h3>Description: " + json_obj.description + "</h3><br />";

        document.getElementById("ajax_notify").innerHTML +=
          "<h3>Price: " + json_obj.price + "</h3><br />";

        document.getElementById("ajax_notify").innerHTML +=
          "<h3>Category Name: " + json_obj.category_name + "</h3><br />";
      }
    } else if (this.readyState == 4 && this.status == 404) {

      let json_obj = JSON.parse(this.response);

      document.getElementById("ajax_notify").innerHTML =
        "<h3>Message: " + json_obj.message + "</h3><br />";
    }
  };
}

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
      let json_obj = JSON.parse(this.response);
      document.getElementById("ajax_notify").innerHTML =
        "<h3>Name: " + json_obj.name + "</h3><br />";
      document.getElementById("ajax_notify").innerHTML +=
        "<h3>Description: " + json_obj.description + "</h3><br />";
      document.getElementById("ajax_notify").innerHTML +=
        "<h3>Price: " + json_obj.price + "</h3><br />";
      document.getElementById("ajax_notify").innerHTML +=
        "<h3>Category Name: " + json_obj.category_name + "</h3><br />";
    }
  };

  ajax.open("get", url, true);

  ajax.send();
}