function showSection(sectionId) {
    // Oculta todas as seções antes de mostrar a selecionada
    document.querySelectorAll('.form-group').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function validateStep(select, nextId, message) {
    if (select.value === "nao") {
        alert(message);
    } else {
        document.getElementById(nextId).classList.remove('hidden');
    }
}

function finalizeForm(select, sectionId) {
    if (select.value === "nao") {
        alert("Verifique o mapeamento X antes de encaminhar o ticket");
    } else {
        document.getElementById(`copy-${sectionId}`).classList.remove('hidden');
    }
}

function copyData(sectionId) {
    let textToCopy = `Seção: ${sectionId}\n\n`;
    
    // Captura os campos de entrada preenchidos
    document.querySelectorAll(`#${sectionId} input`).forEach(input => {
        if (input.value) {
            textToCopy += `${input.placeholder}: ${input.value}\n`;
        }
    });

    // Captura as perguntas e respostas
    document.querySelectorAll(`#${sectionId} select`).forEach(select => {
        if (select.value) {
            let label = select.previousElementSibling.innerText;
            textToCopy += `${label}: ${select.value}\n`;
        }
    });

    // Copia os dados para a área de transferência
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Dados copiados com sucesso!");
    }).catch(err => {
        alert("Erro ao copiar: " + err);
    });
}

// Exemplo de função global no script.js
function goToInitialScreen() {
  // Verifica se a página atual é o index
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    // Se for o index, limpe os campos
    let nome = document.getElementById("nome");
    let contacto = document.getElementById("contacto");
    let problema = document.getElementById("dados_problema");
    if (nome) nome.value = "";
    if (contacto) contacto.value = "";
    if (problema) problema.value = "";
    
    // Seções que possam ter sido exibidas
    let sectionSelection = document.getElementById("sectionSelection");
    let copiedData = document.getElementById("copiedData");
    if (sectionSelection) sectionSelection.style.display = "none";
    if (copiedData) copiedData.style.display = "none";
    
  } else {
    // Se não for o index, redireciona para lá
    window.location.href = "../index.html"; // ajuste o caminho se necessário
  }
}

