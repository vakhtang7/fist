$("#sendMail").on("click", function () {
  var text = $("#email")
    .val()
    .trim();
  var phone = $("#phone")
    .val()
    .trim();

  if (text == "") {
    $("#errorMess").text("Введите Ваше Имя");
    return false;
  } else if (phone == "") {
    $("#errorMess").text("Введите Ваш номер телефона");
    return false;
  }
  $("#errorMess").text("");

  $.ajax({
    url: "ajax/mail.php",
    type: "POST",
    cache: false,
    data: {
      text: name,
      phone: phone,
    },
    dataType: "html",
    beforeSend: function () {
      $("#sendMail").prop("disabled", true);
    },
    success: function (data) {
      if (!data) alert("Были ошибки, сообщение не отправлно!");
      else $("#mailForm").trigger("reset");
      $("#sendMail").prop("disabled", false);
    }
  });
});

/*console.log(somefhing);
  let person = {
  name: "John",
  age: 25,
  isMaried: false,
};*/



/*var answer = alert("Hellou World");

console.log(answer);*/

/* let answer1 = confirm("Hello world");

console.log(answer1);*/

/*let answer2 = prompt("Если Вам 18 лет?", "Да");

console.log(typeof(answer2));*/

console.log("ass" + "- object");