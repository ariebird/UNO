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
            document.cookie = "status=in; path = /;";
            document.cookie = "user=" + username + "; path=/;";
            window.location.href= "thanks.html";//if true, send valid request
          }
        }
      });//4
      var cookies = document.cookie.split(";");
      if(cookies[0] != "status=in" && (username != "" || password != "")){
        console.log("Invalid Credentials");
        alert("Invalid Credentials");
      };
      //});//3
  });//2
});//1

//Changes Log In button text if user has logged in
function loggedIn(){
  var cookies = document.cookie.split(";");
  for(var i = 0; i < cookies.length; i++){
    if(cookies[i] == "status=in" && document.getElementById("log").innerText == "Log In" && cookies[cookies.length -1] != " status=out"){
      document.getElementById("log").innerText == "Log Out"
      $("#log").html("Log Out");
    }
  }
};

//changes function of log in button based on if user is logged in or logged out
function navigation1(){
  if(document.getElementById("log").innerText == "Log In"){
    window.location.assign("gymAccess/login.html");
  }

  if(document.getElementById("log").innerText == "Log Out"){
    $("#log").html("Log In");
    $("#date").html("Date: N/A");
    $("#time").html("Time: N/A");
    document.cookie = "status= out;user=; path = /;";
  }
};

function navigation2(){
  if(document.getElementById("log").innerText == "Log In"){
    window.location.assign("login.html");
  }

  if(document.getElementById("log").innerText == "Log Out"){
    $("#log").html("Log In");
    document.cookie = "status=out;user=; path = /;";
  }
};

function navigation3(){
  if(document.getElementById("log").innerText == "Log In"){
    window.location.assign("../gymAccess/login.html");
  }

  if(document.getElementById("log").innerText == "Log Out"){
    $("#log").html("Log In");
    $("#date").html("Date: N/A");
    $("#time").html("Time: N/A");
    document.cookie = "status=out;user=; path = /;";
  }
};

//changes navigation of check in and reservations pages' submit buttons based on if 
// user is logged in or logged out
function resSave(formObj){
  document.cookie = "date=" + formObj.date.value + ";path=/;";

  var timeInput = document.getElementById("time");
  var input = timeInput.options[timeInput.selectedIndex];
  document.cookie = "time=" + input + ";path=/;";
  if(document.getElementById("log").innerText == "Log In"){
    window.location.assign("login.html");
  }
  
  if(document.getElementById("log").innerText == "Log Out"){
    window.location.assign("../index.html")
  }
};

function subClck(){
  if(document.getElementById("log").innerText == "Log In"){
    window.location.assign("login.html");
  }
  
  if(document.getElementById("log").innerText == "Log Out"){
    window.location.assign("../index.html")
  }
};

//fills reservation
function reservation(){
  $.ajax({
    type: "GET",
    url: "resources/database.json",
    dataType: "json",
    success: function(data){
      var date = "";
      var time = "";
      var cookies = document.cookie.split(";");
      var userInfo = "";
      var user = "";
      //finds logged in user ID
      for(var i = 0; i < cookies.length; i++){
        userInfo = cookies[i].split("=");
        if(userInfo[0] == " user"){
          user = userInfo[1];
        }
      }
      $.each(data.userProfiles, function(i, item){
        if(item.userId == user){
          date = item.res_date;
          time = item.res_time;
        }
      });
    
    $("#date").html("Date: " + date);
    $("#time").html("Time: " + time);
   }        
});
};