function validation() {
    
    var uname = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var mail = document.getElementById("mail").value;
    var atposition=mail.indexOf("@");  
    var dotposition=mail.lastIndexOf(".");
    var tel = document.getElementById("tel").value;
    uservalidation(uname);
    passwordvalidation(pass);
    telvalidation(tel);
    mailvalidation(mail,atposition,dotposition);
  

}
function uservalidation(uname){
    if(uname==null || uname==""){
        document.getElementById("name-msg").innerHTML = "Enter Name";
        return false;
    }
    else {
        return true;
    }
    
}
function passwordvalidation(pass) {
    if (pass==null || pass==""){  
        document.getElementById("pass-msg").innerHTML = "Enter password"; 
        return false;  
    }
    else if(pass.length<6){  
        document.getElementById("pass-msg").innerHTML = "Password must be at least 6 characters long.";   
        return false;  
    }  
    else {
        return true;
    }
}
 function telvalidation(tel){
    if (isNaN(tel)){  
        document.getElementById("tel-msg").innerHTML="Enter Numeric value only";  
        return false;  
    }
    else{  
        return true;  
        }

 }
 function mailvalidation(mail,atposition,dotposition) {
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=mail.length){  
        document.getElementById("mail-msg").innerHTML="Please enter a valid e-mail address";  
        return false;  

    }  
    else {
        return true;
    }

 }   
  