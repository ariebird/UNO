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
            document.cookie = "in; path = /;";
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
      if(document.cookie != "in"){
        console.log("Invalid Credentials");
        alert("Invalid Credentials");
      };
      //});//3
  });//2
});//1

function loggedIn(){
    if(document.cookie == "in"){
      $("#in/out").html("<button type='button' class='loginBtn' id = 'res' onclick='logOut();'><a>Log Out</a></button>");
    }
};

function logOut(){
  $("#in/out").html("<button type='button' class='loginBtn' id = 'res' onclick='window.location.assign('gymAccess/login.html');'><a>Log Out</a></button>");
  document.cookie = "; path = /;";
}