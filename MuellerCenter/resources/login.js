$(document).ready(function(){//1
  var submit   =  $("#submit")
  var u = [
  {
    "userId": "jonesj",
    "Password": "baby"
  },
  {
    "userId": "davisd",
    "Password": "mommy"
  },
  {
    "userId": "eriksa",
    "Password": "sissor"
  }
  ]
  submit.click(function(){//2
    var username =  $("#user").val()
    var password =  $("#password").val()
    //$.getJSON("database.json", function(users){//3
    console.log(username, password);
    if (!username){

        console.log("Enter Username");
        alert("Enter Username");
    }
    if (! password){
        console.log("Enter Password");
        alert("Enter Password");
    }
      $.each(u, function(i, user) {//4
        if (username == user.userId){//checks if username is matches any in list
          if (password == user.Password){//checks if password matches
            document.cookie = "status= in; path = /;";
            window.location.href= "thanks.html";//if true, send valid request
          }
          //else{  //else print invalid credentials
            //console.log("Invalid Credentials");
            //alert("Invalid Credentials");
            //document.cookie = "out; path = /;";
          //}
        }
        //else{  //else print invalid credentials
          //console.log("Invalid Credentials");
          //alert("Invalid Credentials");
          //document.cookie = "out; path = /;";
        //}
      });//4
      if(document.cookie != "status=in"){
        console.log("Invalid Credentials");
        alert("Invalid Credentials");
      };
      //});//3
  });//2
});//1

function loggedIn(){
  if(document.cookie == "status=in" && document.getElementById("log").innerText == "Log In"){
    document.getElementById("log").innerText == "Log Out"
    $("#log").html("Log Out");
  }

};

function navigation1(){
  if(document.getElementById("log").innerText == "Log In"){
    window.location.assign("gymAccess/login.html");
  }

  if(document.getElementById("log").innerText == "Log Out"){
    $("#log").html("Log In");
    document.cookie = "status= out; path = /;";
  }
};

function navigation2(){
  if(document.getElementById("log").innerText == "Log In"){
    window.location.assign("login.html");
  }

  if(document.getElementById("log").innerText == "Log Out"){
    $("#log").html("Log In");
    document.cookie = "status= out; path = /;";
  }
};

function navigation3(){
  if(document.getElementById("log").innerText == "Log In"){
    window.location.assign("../gymAccess/login.html");
  }

  if(document.getElementById("log").innerText == "Log Out"){
    $("#log").html("Log In");
    document.cookie = "status= out; path = /;";
  }
};
