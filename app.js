let game = () => {
  let pScore = 0;
  let cScore = 0;

  const playerScore = document.querySelector(".playerScore");
  const computerScore = document.querySelector(".computerScore");
  const roundMessage = document.querySelector(".roundMessage");
  const gameOver = document.querySelector(".gameOver");
  const rockBtn = document.querySelector("#btn1");
  const paperBtn = document.querySelector("#btn2");
  const scissorsBtn = document.querySelector("#btn3");
  const reset = document.querySelector("#reset");
  const borat = document.querySelector(".winnergif");
  const office = document.querySelector(".losergif");
  const flawless = document.querySelector(".flawlessgif");
  //EventListeners
  rockBtn.addEventListener("click", () => {
    round(rockBtn.value, computerPick());
  });
  paperBtn.addEventListener("click", () => {
    round(paperBtn.value, computerPick());
  });
  scissorsBtn.addEventListener("click", () => {
    round(scissorsBtn.value, computerPick());
  });
  reset.addEventListener("click", () => {
    restart();
  });

  //Update Score Function
  let updateScore = () => {
    playerScore.textContent = `You: ${pScore}`;
    computerScore.textContent = `Computer: ${cScore}`;
    if (pScore == 5 && cScore == 0) {
      gameOver.classList.remove("lose");
      gameOver.classList.add("win");
      gameOver.textContent = "Flawless Victory!";
      office.classList.remove("losergifappear");
      borat.classList.remove("winnergifappear");
      flawless.classList.add("flawlessgifappear");
      return;
    }
    if (pScore == 5) {
      gameOver.classList.remove("lose");
      gameOver.classList.add("win");
      gameOver.textContent = "You Win the match!";
      flawless.classList.remove("flawlessgifappear");
      office.classList.remove("losergifappear");
      borat.classList.add("winnergifappear");
      return;
    } else if (cScore == 5) {
      gameOver.classList.remove("win");
      gameOver.classList.add("lose");
      gameOver.textContent = "You Lose the match! ";
      borat.classList.remove("winnergifappear");
      flawless.classList.remove("flawlessgifappear");
      office.classList.add("losergifappear");
      return;
    }
  };

  //Restart Game Function
  let restart = () => {
    pScore = 0;
    cScore = 0;
    roundMessage.textContent = "";
    gameOver.textContent = "";
    borat.classList.remove("winnergifappear");
    office.classList.remove("losergifappear");
    flawless.classList.remove("flawlessgifappear");
    updateScore();
  };
  //Computer's Random Pick Function
  let computerPick = () => {
    let cChoices = ["Rock", "Paper", "Scissors"];
    let rPick = cChoices[Math.floor(Math.random() * 3)];
    return rPick;
  };

  //Round of RPS
  let round = (pPick, cPick) => {
    if (pScore == 5 || cScore == 5) {
      return;
    }
    if (pPick === cPick) {
      roundMessage.classList.remove("lose");
      roundMessage.classList.remove("win");
      roundMessage.classList.add("tie");
      roundMessage.textContent = `It's a Tie! You picked ${pPick} and the computer picked ${cPick}! `;
      return;
    } else if (
      (pPick === "Rock" && cPick === "Scissors") ||
      (pPick === "Paper" && cPick === "Rock") ||
      (pPick === "Scissors" && cPick === "Paper")
    ) {
      roundMessage.classList.remove("lose");
      roundMessage.classList.remove("tie");
      roundMessage.classList.add("win");
      roundMessage.textContent = `You Win! You picked ${pPick} and the computer picked ${cPick}!  `;
      pScore++;
      updateScore();
      playerScore.textContent = `You: ${pScore}`;
      return;
    } else {
      roundMessage.classList.remove("win");
      roundMessage.classList.remove("tie");
      roundMessage.classList.add("lose");
      roundMessage.textContent = `You Lose! You picked ${pPick} and the computer picked ${cPick}! `;
      cScore++;
      updateScore();
      computerScore.textContent = `Computer: ${cScore}`;
      return;
    }
  };
};

game();
