// Espera a página carregar completamente para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', function() {
    // Recupera os dados do usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('loggedInUser'));
    const emailLogado = JSON.parse(localStorage.getItem('loggedInUser'));

    // Verifica se existe um usuário logado
    if (usuarioLogado) {
        // Exibe o nome do usuário no elemento com id 'nomeUsuario'
        document.getElementById('nomeUsuario').innerText = usuarioLogado.fullname;
        document.getElementById('emailUsuario').innerText = emailLogado.email;
    } else {
        // Exibe mensagem padrão caso não haja um usuário logado
        document.getElementById('nomeUsuario').innerText = "Nenhum usuário logado";
    }
});

//MOSTRAR O MENU DA CONTA

// Função para alternar a visibilidade do menu da conta
function toggleMenu() {
    const menu = document.getElementById('accountMenu');
    menu.classList.toggle('show');
}

// Função para fechar o menu se o clique for fora da área do menu e do botão
function handleClickOutside(event) {
    const menu = document.getElementById('accountMenu');
    const button = document.querySelector('.bottom-linkDaConta');

    // Verifica se o clique foi fora do menu e do botão
    if (menu && !menu.contains(event.target) && button && !button.contains(event.target)) {
        menu.classList.remove('show');
    }
}
// Adiciona o listener para o clique no documento
document.addEventListener('click', handleClickOutside);



//MOSTRAR OS SUBMENUS DO CURSO

// Função para alternar o submenu de cursos
function toggleSubMenu(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Seleciona o submenu de cursos
    const subMenu = document.getElementById('cursosSubMenu');

    // Seleciona todos os submenus para ocultá-los
    const allSubMenus = document.querySelectorAll('.sub-menu');

    // Verifica se o submenu está visível
    const isVisible = subMenu.classList.contains('show');

    // Oculta todos os submenus
    allSubMenus.forEach(menu => menu.classList.remove('show'));

    // Alterna a visibilidade do submenu atual
    if (!isVisible) {
        subMenu.classList.add('show');
    }
}

// Adiciona evento de clique para o link que ativa o submenu
document.querySelector('.link-cursos').addEventListener('click', toggleSubMenu);



//MOSTRAR A TELA DAS OPÇÕES DA CONTA
  // Função para abrir o modal
  function abrirModal() {
    document.getElementById("fundo").style.display = "block";
    document.getElementById("modal").style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("fundo").style.display = "none";
    document.getElementById("modal").style.display = "none";
}

// Ao clicar no link, abre o modal
document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    abrirModal();
});

// Ao clicar no fundo (embaçado), fecha o modal
document.getElementById("fundo").addEventListener("click", fecharModal);




//MOSTRAR A TELA DAS CONFIGURAÇÕES
  // Função para abrir o modal
  function abrirModal2() {
    document.getElementById("fundo2").style.display = "block";
    document.getElementById("modal2").style.display = "block";
}

// Função para fechar o modal
function fecharModal2() {
    document.getElementById("fundo2").style.display = "none";
    document.getElementById("modal2").style.display = "none";
}

// Ao clicar no link, abre o modal
document.getElementById("link2").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    abrirModal2();
});

// Ao clicar no fundo (embaçado), fecha o modal
document.getElementById("fundo2").addEventListener("click", fecharModal);

document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar os dados do usuário
    function carregarDadosUsuario() {
        fetch('caminho/para/o/script.php')
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    document.getElementById('nomeUsuario').innerText = data.fullname;
                    document.getElementById('emailUsuario').innerText = data.email;
                } else {
                    console.error(data.error);
                }
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }

    // Exibe os dados quando o submenu "perfil" for aberto
    document.querySelector('.bottom-linkDaConta').addEventListener('click', carregarDadosUsuario);
});