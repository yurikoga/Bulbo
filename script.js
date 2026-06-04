const lampOn = document.getElementById('lamp-on');
        const btnToggle = document.getElementById('btn-toggle');
        const container = document.getElementById('lamp-container');
        
        // Inicia desligada para permitir a interação de "ligar"
        let isLightOn = false; 

        function updateLampState() {
            if (isLightOn) {
                lampOn.style.opacity = '1';
                btnToggle.textContent = 'TURN OFF';
                // Adiciona um brilho extra ao fundo quando ligado
                document.body.style.backgroundColor = '#1a1a10'; 
            } else {
                lampOn.style.opacity = '0';
                btnToggle.textContent = 'TURN ON';
                document.body.style.backgroundColor = '#111111';
            }
        }

        // Liga/Desliga tanto no botão quanto clicando na própria lâmpada
        btnToggle.addEventListener('click', () => {
            isLightOn = !isLightOn;
            updateLampState();
        });

        container.addEventListener('click', () => {
            isLightOn = !isLightOn;
            updateLampState();
        });
