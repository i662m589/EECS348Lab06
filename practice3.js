function validate_pass() {
    var firstp = document.getElementById("pass_one").value;
    var secp = document.getElementById("pass_two").value;
    
    if (firstp.length < 8) {
        alert("The first password is less than 8 characters. Change that!")
    }
    else if (secp.length < 8) {
        alert("The second password is less than 8 characters. Change that!")
    }
    else if (firstp != secp) {
        alert("These passwords are not the same! Make them the same!")
    }
    else {
        alert("Both passwords are the same and are longer than or equal to 8 characters. Good Job!")
    }
}