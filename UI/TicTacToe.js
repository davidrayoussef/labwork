class TicTacToe {
  gameboard = Array.from({ length: 9 }, () => undefined);
  turn = 0;

  initialize() {
    const gameContainer = document.createElement('ul');
    gameContainer.className = 'game-container';

    this.renderBoard(gameContainer);

    const css = `
      .game-container { 
        display: grid;
        list-style: none;
        grid-template-columns: repeat(3, 200px);
        grid-template-rows: repeat(3, 200px);
        grid-gap: .5rem;
      }
      .game-container li { 
        background: #DDD;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
        color: #444;
      }
    `;
    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(css));
    document.body.appendChild(styleElement);
  }

  getNextPlay() {
    return this.turn++ % 2 === 0 ? 'X' : 'O';
  }

  renderBoard(gameContainer) {
    this.gameboard.forEach((_, i) => {
      const li = document.createElement('li');
      li.addEventListener('click', () => {
        if (this.gameboard[i] === undefined) {
          this.update(li, i);
        }
      });
      gameContainer.appendChild(li);
    });
    document.body.appendChild(gameContainer);
  }

  update(squareElement, gameboardIndex) {
    const nextPlay = this.getNextPlay();
    squareElement.innerText = nextPlay;
    this.gameboard[gameboardIndex] = nextPlay;
    setTimeout(() => {
      this.checkForWinner(nextPlay);
    }, 0);
  }

  checkForWinner(nextPlay) {
    const hasWinner = [
      this.gameboard.slice(0, 3).join(''),
      this.gameboard.slice(3, 6).join(''),
      this.gameboard.slice(6).join(''),
      this.gameboard[0] + this.gameboard[3] + this.gameboard[6],
      this.gameboard[1] + this.gameboard[4] + this.gameboard[7],
      this.gameboard[2] + this.gameboard[5] + this.gameboard[8],
      this.gameboard[0] + this.gameboard[4] + this.gameboard[8],
      this.gameboard[2] + this.gameboard[4] + this.gameboard[6]
    ].some(str => /(XXX)|(OOO)/.test(str));
    if (hasWinner) {
      alert(`Winner is ${nextPlay}`);
    }
  }
}

const game = new TicTacToe();
game.initialize();
