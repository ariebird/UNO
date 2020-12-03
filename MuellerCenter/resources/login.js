$(document).ready(function(){//1
  var submit   =  $("#submit")
  var u = [
  {
    "userId": "jonesj",
    "Password": "password"
  },
  {
    "userId": "davisd",
    "Password": "birthday"
  },
  {
    "userId": "eriksa",
    "Password": "1234"
  }
  ]
  submit.click(function(){//2
    var username =  $("#user").val()
    var password =  $("#password").val()
    var alertTxt = "";
    //$.getJSON("database.json", function(users){//3
    console.log(username, password);
    if (!username){

        console.log("Enter Username");
        alertTxt += "Enter Username\n";
    }
    if (! password){
        console.log("Enter Password");
        alertTxt += "Enter Password";
    }
    if (alertTxt != ""){
      alert(alertTxt);
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
      var cookieInfo = "";
      for(var i = 0; i < cookies.length; i++){
        if(cookies[i] == " status=in" || cookies[i] == "status=in"){
          cookieInfo = cookies[i]
        }
      }
      if(! (cookieInfo == " status=in" || cookieInfo == "status=in") && username != "" && password != ""){//checks if user and pass input matches any valid user ids
        console.log("Invalid Credentials");
        alert("Invalid Credentials");
      };
      //});//3
  });//2
});//1

//Changes Log In button text if user has logged in
function loggedIn(){
  var cookies = document.cookie.split(";");
  var cookieInfo = "";
  var user = "";
  for(var i = 0; i < cookies.length; i++){
    cookieInfo = cookies[i].split("=");
    if(cookieInfo[0] == " user" || cookieInfo[0] == "user"){
      user = cookieInfo[1];
    }
  }
  if(user != "" && document.getElementById("log").innerText == "Log In"){
    document.getElementById("log").innerText == "Log Out"
    $("#log").html("Log Out");
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
    document.cookie = "user=; path = /;"; 
    document.cookie = "status=out; path=/;";
    document.cookie = "resDate=; path=/;";
    document.cookie = "resTime=; path = /;";
  }
};

function navigation2(){
  if(document.getElementById("log").innerText == "Log In"){
    window.location.assign("login.html");
  }

  if(document.getElementById("log").innerText == "Log Out"){
    $("#log").html("Log In");
    document.cookie = "user=; path = /;"; 
    document.cookie = "status=out; path=/;";
    document.cookie = "resDate=; path=/;";
    document.cookie = "resTime=; path = /;";
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
    document.cookie = "user=; path = /;"; 
    document.cookie = "status=out; path=/;";
    document.cookie = "resDate=; path=/;";
    document.cookie = "resTime=; path = /;";
  }
};


//onclick of check in submit button
function subClck(){
  //error checking on check in
  if(document.getElementById("entering").checked && document.getElementById("leaving").checked){
    alert("Please choose only one option");
  }
  else if(! document.getElementById("entering").checked && ! document.getElementById("leaving").checked){
    alert("Please select an option")
  }
  else{
    $.ajax({
      type: "GET",
      url: "../resources/database.json",
      dataType: "json",
      success: function(data){
        var date = "";
        var time = "";
        var cookies = document.cookie.split(";");
        var userInfo = "";
        var user = "";
        var pop = "";
        var space = ""
        var resDate = "";
        var resTime = "";
        //finds logged in user ID
        for(var i = 0; i < cookies.length; i++){
          userInfo = cookies[i].split("=");
          if(userInfo[0] == " user" || userInfo[0] == "user"){
            user = userInfo[1];
          }
          //finds current pop
          if(userInfo[0] == "pop" || userInfo[0] == " pop"){
            pop = userInfo[1];
          }
          //finds current space
          if(userInfo[0] == " space"){
            space = userInfo[1];
          }
          if(userInfo[0] == " resDate"){
            resDate = userInfo[1];
          }
          if(userInfo[0] == " resTime"){
            resTime = userInfo[1];
          }
        }
        $.each(data.userProfiles, function(i, item){
          if(item.userId == user){
            date = item.res_date;
            time = item.res_time;
          }
          });
          //informs user of successful check in/out and routes to home page
          if((date != "None" && date != "N/A" && time != "None" && time != "N/A") || (resDate != "" && resTime != "")){
             //updates pop and space cookies
             if(document.getElementById("leaving").checked){
               pop --;
               space ++;
             }
             if(document.getElementById("entering").checked){
              pop ++;
              space --;
            }
            if(pop < 0 || space < 0){
              alert("Invalid Check In/Out. Capacity Full");
            }
            else{
              document.cookie = "pop=" + pop + "; path=/;";
              document.cookie = "space=" + space + "; path=/;";
              alert("Successful Check In/Out");
            }
             window.location.assign("../index.html");
          }
          else{
              //routes user to login page
               if(document.getElementById("log").innerText == "Log In"){
                  alert("Need Reservation to Check In/Out. Log In to Access Reservations");
                  window.location.assign("login.html");
               }
               //routes user to home page 
               if(document.getElementById("log").innerText == "Log Out"){
                  alert("No Reservation Detected. Create Reservation to Check In/Out.");
                  window.location.assign("../index.html")
               }
            }
         }
   });
  }
};

//fills reservation on home page
function reservation(){
  $.ajax({
    type: "GET",
    url: "resources/database.json",
    dataType: "json",
    success: function(data){
      var date = "";
      var time = "";
      var resDate = "";
      var resTime = "";
      var cookies = document.cookie.split(";");
      var userInfo = "";
      var user = "";
      //finds logged in user ID
      for(var i = 0; i < cookies.length; i++){
        userInfo = cookies[i].split("=");
        if(userInfo[0] == " user" || userInfo[0] == "user"){
          user = userInfo[1];
        }
        //finds input reservation date
        if(userInfo[0] == " resDate"){
          resDate = userInfo[1];
        }
        //finds input reservation time
        if(userInfo[0] == " resTime"){
          resTime = userInfo[1];
        }
      }
      //gets reservation info from json file based on user
      $.each(data.userProfiles, function(i, item){
        if(item.userId == user){
          date = item.res_date;
          time = item.res_time;
        }
      });
      //fills reservation info from json file or cookie onto home page
      if(user != "" && date == "None" && time == "None" && resDate != "" && resTime != ""){
        $("#date").html("Date: " + resDate);
        $("#time").html("Time: " + resTime);
      }
      else{
        $("#date").html("Date: " + date);
        $("#time").html("Time: " + time);
      }
    
   }        
});
};

function focusLoad(){
  document.getElementById("user").focus();
};

//updates Gym Status display on home page
function population(){
  $.ajax({
    type: "GET",
    url: "resources/gymStatus.json",
    dataType: "json",
    success: function(data){
      var pop = "";
      var space = "";
      var cookies = document.cookie.split(";");
      var userInfo = "";
      for(var i = 0; i < cookies.length; i++){
        userInfo = cookies[i].split("=");
        //finds current pop in cookie
        if(userInfo[0] == "pop" || userInfo[0] == " pop"){
          pop = userInfo[1];
        }
        //finds current space in cookie
        if(userInfo[0] == " space"){
          space = userInfo[1];
        }
      }
      //adds pop and space variable to cookie
      if(pop == "" && space == ""){
        $.each(data.gymStatus, function(i, item){
          document.cookie = "pop=" + item.pop + "; path=/;";
          document.cookie = "space=" + item.space + "; path=/;";
          pop = item.pop;
          space = item.space;
        });
      }
      $("#pop").html(pop);
      $("#space").html(space);  
   }        
});
};