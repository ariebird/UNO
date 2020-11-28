$(document).ready(function(){//1
  var submit   =  $("#submit")
  var u = [
  {
    "userId": "Joann",
    "Password": "baby"
  },
  {
    "userId": "david",
    "Password": "mommy"
  },
  {
    "userId": "arron",
    "Password": "sissor"
  }
  ]
  submit.click(function(){//2
    var username =  $("#user").val()
    var password =  $("#password").val()
    //$.getJSON("database.json", function(users){//3
    console.log(username, password);
    if (! username){
        console.log("Enter Username");
    }
    if (! password){
        console.log("Enter Password");
    }
      $.each(u, function(i, user) {//4
        if (username == user.userId){//checks if username is matches any in list
          if (password == user.Password){//checks if password matches
            window.location.href= "thanks.html";//if true, send valid request
          }else{  //else print invalid credentials
            console.log("Invalid Credentials");
          }
        }
      });//4
    //});//3
  });//2
});//1
