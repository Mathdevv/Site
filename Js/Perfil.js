document.addEventListener('DOMContentLoaded', function() {
    fetch('../Codigos/info.php')  // Requisição para o arquivo PHP (ajustado o caminho)
        .then(response => response.json())  // Converte a resposta para JSON
        .then(data => {
            if (data.error) {
                document.getElementById('nomeUsuario').innerText = data.error;
                document.getElementById('emailUsuario').innerText = '';
            } else {
                document.getElementById('nomeUsuario').innerText = data.nome;
                document.getElementById('emailUsuario').innerText = data.email;
            }
        })
        .catch(() => {
            document.getElementById('nomeUsuario').innerText = 'Erro ao carregar dados';
            document.getElementById('emailUsuario').innerText = '';
        });
});
