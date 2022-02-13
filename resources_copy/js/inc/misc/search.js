var userList = document.querySelector(".users .users-list");

$(document).ready(function () {
  
  let xhr = new XMLHttpRequest(); // new xml object
  xhr.open("GET", "../libs/search.php", true);
  
  $(xhr).on("load", function () {
    
    if (xhr.readyState === XMLHttpRequest.DONE) {
      
      if (xhr.status === 200) {
        
        let data = xhr.response;
        //userList.innerHTML = data;
        $(userList).html(data);
      
      }while(inputdata != userList){
        
        let data = xhr.response;
        var inputdata = $(userList).html(data);
        $(userList).html('<h2>No Users Found</h2>');
      
      };
    }
  });
  
  xhr.send();
});