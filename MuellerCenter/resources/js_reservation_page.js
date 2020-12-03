 function submitForms() {
    document.getElementById("date").submit();
    document.getElementById("time").submit();
    alert("Thank you for Making a Reservation");
}

function deleteTxt(){
    var txt = document.getElementById("date");
    if(txt.value == "Please enter a date."){
       txt.innerHTML = "";
    }
 }  
 
function defaultTxt(){
   var txt = document.getElementById("date");
   if(txt.value == ""){
      txt.innerHTML = "Please enter a date."
   }
}

//onclick of reservation page submit button
function subClck_res(){
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
        var alertTxt = "";
        //finds logged in user ID
        for(var i = 0; i < cookies.length; i++){
          userInfo = cookies[i].split("=");
          if(userInfo[0] == " user" || userInfo[0] == "user"){
            user = userInfo[1];
          }
        }
        //finds reservation info in user json object
        $.each(data.userProfiles, function(i, item){
          if(item.userId == user){
            date = item.res_date;
            time = item.res_time;
          }
          });
          if(date != "None" && date != "N/A" && time != "None" && time != "N/A"){
             alert("Please complete your current reservation before making a new one");
             window.location.assign("../index.html");
          }
          else{
            if(document.getElementById("date").value == "Please enter a date." || document.getElementById("date") == ""){
               alertTxt += "Please Enter A Reservation Date";
            }
            if(document.getElementById("time").value == "time"){
               alertTxt += "Please Enter A Reservation Time";
            }
            if(alertTxt != ""){
               alert(alertTxt);
            }
            else{
               document.cookie = "resDate=" + document.getElementById("date").value + "; path = /;";
               document.cookie = "resTime=" + document.getElementById("time").value + "; path = /;";
               if(document.getElementById("log").innerText == "Log In"){
                  window.location.assign("login.html");
               }
          
               if(document.getElementById("log").innerText == "Log Out"){
                  window.location.assign("../index.html")
               }
            }
         }
         }
   });
 };

function resFocusLoad(){
   document.getElementById("date").focus();
};

