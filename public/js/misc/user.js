const searchBar = document.querySelector(".users .search input");

// $(searchBar).on("keyup", function () {
//   let searchTerm = searchBar.nodeValue;

//   let xhr = new XMLHttpRequest(); // new xml object
//   xhr.open("GET", "libs/search.php", true);
//   $(xhr).on("load", function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         let data = xhr.response;
//         console.log(data);
//         //userList.innerHTML = data;
//         $(userList).html(data);
//       }
//     }
//   });

//   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   xhr.send("searchTerm=" + searchTerm);
// });

var userList = document.querySelector(".users .users-list");

setInterval(() => {
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
}, 500); // this function will run every 500ms
