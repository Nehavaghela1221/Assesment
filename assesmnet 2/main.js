
function ValidData() {
    var fname = document.getElementById('fname').value;
    if (fname == "") {
        alert("Please enter First name!");
        document.getElementById('fname').focus();
        return false;
    }
    var lname = document.getElementById('lname').value;
    if (lname == "") {
        alert("Please enter Last name!");
        document.getElementById('lname').focus();
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        alert("Please enter email!");
        document.getElementById('email').focus();
        return false;
    }

    const myInput = document.querySelector('#my-input');
    if (myInput.value.length != 10) {
        alert('10 digit mobile number is required');
        document.getElementById('my-input').focus();
        return false
    }
    var s = document.getElementById("rbtn1");
    var n = document.getElementById("rbtn2");
    if (!s.checked && !n.checked) {
        alert("Plz select your gender");
        document.getElementById('rbtn1').focus();
        return false;
    }


    var date = document.getElementById('date').value;
    if (date == "") {
        alert("Please enter date!");
        document.getElementById('date').focus();
        return false;
    }
    var add = document.getElementById('add').value;
    if (add == "") {
        alert("Please enter add!");
        document.getElementById('add').focus();
        return false;
    }
    var city = document.getElementById('city').value;
    if (city == "") {
        alert("Please enter city!");
        document.getElementById('city').focus();
        return false;
    }
    const myInput2 = document.querySelector('#my-input2');
    if (myInput2.value.length != 6) {
        alert('6 digit area pin is required');
        document.getElementById('my-input2').focus();
        return false
    }

    var state = document.getElementById('state').value;
    if (state == "") {
        alert("Please enter state!");
        document.getElementById('state').focus();
        return false;
    }
  
    var pwd = document.getElementById('pwd').value;
    if (pwd == "") {
        alert("Please enter pwd!");
        document.getElementById('pwd').focus();
        return false;
    }
    var a = document.forms.contsiner;
    for (i = 0; i < a.length; i++) {
        if (a[i].checked == true) {
            return true;

        }
        alert("select one")
        document.getElementById('one').focus();
        return false;
        

    }
}
