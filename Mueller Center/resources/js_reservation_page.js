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

