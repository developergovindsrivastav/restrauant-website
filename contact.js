function data() {
    let a = document.getElementById('name').value;
    let b = document.getElementById('email').value;
    let c = document.getElementById('phonenumber').value;
    let d = document.getElementById('message').value;
    if (a==""||b==""||c==""||d=="") {
        alert("Please enter all required fields")
        return false;
    }
    else if (c.length>10||c.length<10) {
        alert("please enter the correct mobile phone number")
        return false;
    }
   else if (isNaN(c)) {
        alert("only numbers in mobile number")
        return false;
    }
    else if (d.length<2) {
        alert("message is too short")
        return false;
    }
    else if (d.length>250) {
        alert("message is too long")
        return false;
    }
    else if (a.length<2) {
        alert("name is too short")
        return false;
    }
    
    else{
        return true;
    }
}


