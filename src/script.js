var result = [];
$(document).ready(function () {
  $("#para1").hide();
  $("#para2").hide();
  $("#para3").hide();
  $("#para4").hide();

  $("#button1").click(function () {
    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(name);
    var isValid = /^[a-zA-Z]*$/.test(name);
    if (!isValid) {
      $("#para1").show().css("background-color", "red");
    } else if (name == "") {
      console.log(name);
      $("#para2").show().css("background-color", "red");
    } else if (password == "") {
      $("#para1").hide();
      $("#para3").show().css("background-color", "red");
    } else {
      obj = {
        name: name,
        password: password,
      };
      result.push(obj);
      display(result);

      $("#para4").show().css("background-color", "green");
      $("#para4").show().css("padding", "10px");
    }
  });
  function display(result) {
    html = "<table><tr><th>USERNAME</th><th>PASSWORD</th></tr>";
    for (var i = 0; i < result.length; i++) {
      html +=
        "<tr><td>" +
        result[i].name +
        "</td><td>" +
        result[i].password +
        "</td></tr>";
    }
    html += "</table";
    document.getElementById("display").innerHTML = html;
    console.log(html);
  }
});
