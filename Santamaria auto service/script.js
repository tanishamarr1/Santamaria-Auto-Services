// Botón y modal
const questionBtn = document.getElementById('question-btn');
const modal = document.getElementById('question-modal');
const closeModal = document.querySelector('.close');
const submitQuestion = document.getElementById('submit-question');

// Mostrar modal
questionBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Enviar pregunta
submitQuestion.addEventListener('click', () => {
    const question = document.getElementById('question-input').value;
    if (question.trim()) {
        alert('Pregunta enviada: ' + question);
        modal.style.display = 'none';
    } else {
        alert('Por favor, escribe tu pregunta.');
    }
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
