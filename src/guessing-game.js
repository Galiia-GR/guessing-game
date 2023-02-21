class GuessingGame {
  constructor() {
    this.minNum = 0;
    this.maxNum = 0;
    this.middleNum = 0;
  }

  setRange(min, max) {
    this.minNum = min;
    this.maxNum = max;

    console.log(min, max);
  }

  guess() {
    this.middleNum = Math.ceil((this.minNum + this.maxNum) / 2);
    console.log(this.middleNum);
    return this.middleNum;
  }

  lower() {
    this.maxNum = this.middleNum;
  }

  greater() {
    this.minNum = this.middleNum;
  }
}

module.exports = GuessingGame;
