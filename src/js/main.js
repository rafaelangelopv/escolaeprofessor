// Este arquivo contém o código JavaScript que adiciona interatividade à página. 
// Você pode incluir funções para manipulação de eventos, animações e outras funcionalidades dinâmicas.

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de manipulação de evento: clique em um botão
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Botão clicado!');
        });
    }

    // Função para adicionar animação a um elemento
    function animateElement(element) {
        element.classList.add('animate');
        setTimeout(() => {
            element.classList.remove('animate');
        }, 1000);
    }

    // Exemplo de uso da função de animação
    const animatedElement = document.getElementById('animatedElement');
    if (animatedElement) {
        animateElement(animatedElement);
    }
});