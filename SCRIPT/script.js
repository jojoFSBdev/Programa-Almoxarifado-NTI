import {sqlite3} from sqlite3;
import {open} from sqlite;


function AbrirMenu() {
    var inputEmail = document.getElementById("Input_Email").value;
    var inputPass = document.getElementById("Input_Pass").value;
    
    console.log(inputEmail, inputPass)
    if (inputEmail != "teste" || inputPass != "123321") {
        window.alert("Email ou Senha inseridos esta incorreto!")
    }else{
        window.location.href = "../HTML/tela_Principal.html"
    }
}