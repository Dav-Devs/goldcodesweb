var form = document.querySelector('.typing-area');
const inputField = form.querySelector('.input-field');
const sendBtn = form.querySelector('button');
var chatBox = document.querySelector(".chat-box");

function scrollToBottom() {
  //chatBox.scrollTop = chatBox.scrollHeight;
  $(chatBox).scrollTop(chatBox.scrollHeight);
}

$("form").on("submit", function (e) {
    //$(this).hide();
    e.preventDefault();
  });

$(sendBtn).on("click", function () {
    let xhr = new XMLHttpRequest(); // new xml object
    xhr.open("POST", "../libs/insert-chat.php", true);
    $(xhr).on("load", function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
                inputField.value = "";
                scrollToBottom();
          }
        }
      });
    // We've got to use AJAX to send the form through to PHP
    let formData = new FormData(form); // New formData Object
    xhr.send(formData); // sends the form data
});

$(chatBox).on("mouseenter", function () {
  $(chatBox).addClass("active");
});

$(chatBox).on("mouseleave", function () {
  $(chatBox).removeClass("active");
});

setInterval(() => {
  let xhr = new XMLHttpRequest(); // new xml object
  xhr.open("POST", "../libs/get-chat.php", true);
  $(xhr).on("load", function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = xhr.response;
        //userList.innerHTML = data;
        $(chatBox).html(data);
        if (!document.querySelector(".chat-box").classList.contains("active")) {
          scrollToBottom();
        }
      }
    }
  });

  // We've got to use AJAX to send the form through to PHP
  let formData = new FormData(form); // New formData Object
  xhr.send(formData); // sends the form data
}, 500); // this function will run every 500ms

// function scrollToBottom() {
//   chatBox.scrollTop = chatBox.scrollHeight;
//   $(chatBox).scrollTop(chatBox.scrollHeight);
// }