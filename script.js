const mainBtn = document.getElementById('mainBtn');
const statusText = document.getElementById('statusText');
const audioPlayer = document.getElementById('audioPlayer');

mainBtn.addEventListener('click', () => {
  // Ocultar o deshabilitar el botón
  mainBtn.style.display = 'none';

  // Mostrar el texto de borrado del sistema
  statusText.textContent = 'deleting /system...';
  statusText.classList.remove('hidden');

  // Reproducir el audio
  audioPlayer.play().catch(error => {
    console.log('Error al intentar reproducir el audio:', error);
  });
});
