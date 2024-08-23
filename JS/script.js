import {sqlite3} from sqlite3;
import {open} from sqlite;


function openMenu(this) {
    var email = document.getElementById("INPT_email").value;
    var senha = document.getElementById("INPT_pass").value;
    
    console.log(email, senha);
}