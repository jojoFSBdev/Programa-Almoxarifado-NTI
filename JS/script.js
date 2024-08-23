
function acessar() {
    var emailElement = document.getElementById("INPT_Email").value;
    var senhaElement = document.getElementById("INPT_Pass").value;
    
    console.log(emailElement, senhaElement);

    if (emailElement != "teste" || senhaElement != "123321") {
        window.alert("Email ou Senha estão incorretas!");
    } else {
        window.open("../HTML/tela_Principal.html", "_self");
    }
}