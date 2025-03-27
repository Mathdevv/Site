document.getElementById('btnToggleMenu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.left === '0px') {
        menu.style.left = '-200px';
    } else {
        menu.style.left = '0px';
    }
});

//referente aos tipos de conta
function mostrarCaixa() {
    var alunoRadio = document.getElementById('aluno');
    var contaAluno = document.getElementById('contaAluno');
    var contaProf = document.getElementById('contaProf');
    var profRadio = document.getElementById('professor');

    if (alunoRadio.checked) {
        contaAluno.style.display = 'block';
    }else{
        contaAluno.style.display = 'none';
    }

    if(profRadio.checked) {
        contaProf.style.display = 'block';
    }else{
        contaProf.style.display = 'none';
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordImg = document.getElementById("showPasswordBtn");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordImg.src = "../imagens/eye.svg";
    } else {
      passwordInput.type = "password";
      passwordImg.src = "../imagens/eye-slash.svg";
    }
  }
  