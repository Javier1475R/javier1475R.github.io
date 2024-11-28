const riddles = [
    // Nivel 1: Fácil
    { question: "Es amarillo por fuera, blanco por dentro y su sabor es dulce. ¿Qué es?", answer: "plátano" },
    
    // Nivel 2: Fácil
    { question: "Cae al río y no se ahoga, cae al fuego y no se quema. ¿Qué es?", answer: "hielo" },
    
    // Nivel 3: Moderado
    { question: "Tengo ojos pero no puedo ver, tengo agua y no soy mar. ¿Qué soy?", answer: "aguacate" },
  
    // Nivel 4: Moderado
    { question: "No es cama ni es león, y desaparece en cualquier rincón. ¿Qué es?", answer: "camaleón" },
  
    // Nivel 5: Moderado
    { question: "Siempre quieto en mi lugar, el polvo me suele visitar. ¿Qué soy?", answer: "espejo" },
  
    // Nivel 6: Difícil
    { question: "Paso por la puerta sin abrir y por la ventana sin subir. ¿Qué soy?", answer: "luz" },
  
    // Nivel 7: Difícil
    { question: "Si me nombras, desaparezco. ¿Qué soy?", answer: "silencio" },
  
    // Nivel 8: Muy difícil
    { question: "Si lo alimentas vive, si le das agua muere. ¿Qué es?", answer: "fuego" },
  
    // Nivel 9: Muy difícil
    { question: "Sin alas y sin motor, subo al cielo y hago calor. ¿Qué soy?", answer: "chispa" },
  
    // Nivel 10: Extrema dificultad
    { question: "Nadie puede verme, pero todos me sienten. Si me retienen, dejo de existir. ¿Qué soy?", answer: "aliento" }
  ];
  
  let level = 1;
  let currentRiddle;
  
  const riddleElement = document.getElementById("riddle");
  const answerInput = document.getElementById("answer");
  const feedbackElement = document.getElementById("feedback");
  const levelElement = document.getElementById("level");
  const submitButton = document.getElementById("submit");
  const startButton = document.getElementById("start");
  
  function getRandomRiddle() {
    const index = Math.floor(Math.random() * riddles.length);
    return riddles[index];
  }
  
  function startGame() {
    level = 1;
    levelElement.textContent = `Nivel: ${level}`;
    feedbackElement.textContent = "";
    nextLevel();
  }
  
  function nextLevel() {
    if (level > 10) {
      feedbackElement.textContent = "¡Felicidades! Completaste el juego.";
      riddleElement.textContent = "Juego terminado. Haz clic en Comenzar para reiniciar.";
      submitButton.style.display = "none";
      return;
    }
  
    currentRiddle = getRandomRiddle();
    riddleElement.textContent = currentRiddle.question;
    answerInput.value = "";
    submitButton.style.display = "inline-block";
  }
  
  function checkAnswer() {
    const playerAnswer = answerInput.value.trim().toLowerCase();
    if (playerAnswer === currentRiddle.answer) {
      feedbackElement.textContent = "¡Correcto! Pasas al siguiente nivel.";
      level++;
      levelElement.textContent = `Nivel: ${level}`;
      nextLevel();
    } else {
      feedbackElement.textContent = "Incorrecto. Inténtalo de nuevo.";
    }
  }
  
  submitButton.addEventListener("click", checkAnswer);
  startButton.addEventListener("click", startGame);
  