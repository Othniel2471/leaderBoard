// class to display the scores
class Display {
  constructor() {
    this.nameArray = [];
    this.refreshBtn = document.querySelector('.refresh');
    this.nameInput = document.querySelector('.name-input');
    this.scoreInput = document.querySelector('.score-input');
    this.form = document.querySelector('.form');
    this.boardContainer = document.querySelector('.board');
    this.alert = document.querySelector('.alert');
    this.succes = document.querySelector('.success');
  }

  //   display alert function
  displayAlert(text, action) {
    this.alert.textContent = text;
    this.alert.classList.add(`alert-${action}`);
    setTimeout(() => {
      this.alert.textContent = '';
      this.alert.classList.remove(`alert-${action}`);
    }, 3000);
  }

  // add item to name array
  addName() {
    const leaderboard = {
      name: this.nameInput.value,
      score: this.scoreInput.value,
    };
    if (leaderboard.name !== '' && leaderboard.score !== '') {
      this.nameArray.push(leaderboard);
      this.displayAlert('Score added', 'success');
    } else {
      this.displayAlert('Please enter a name and a score', 'danger');
    }
  }

  // display leaderboard
  displayLeaderboard(leaderboard) {
    const displayBoard = leaderboard.map((item) => `<div class="scores">
                    <div class="name">${item.name}:</div>
                    <div class="score">${item.score}</div>
                    </div>`).join('');
    this.boardContainer.innerHTML = displayBoard;
  }

  // display leaderboard on load
  displayOnLoad() {
    this.displayLeaderboard(this.nameArray);
  }
}

export default Display;