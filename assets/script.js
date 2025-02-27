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

function clearAllData() {
  // Seleciona todos os inputs de texto e textareas e zera o valor
  document.querySelectorAll('input[type="text"], textarea').forEach(input => {
    input.value = "";
  });

  // Se houver checkboxes ou radios, desmarque-os
  document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
    input.checked = false;
  });
}

