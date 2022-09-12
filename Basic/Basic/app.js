new Vue({
  el: "#app",
  data: {
    myChoice: null,
    comChoice: null,
    count: 3,
    winner: null,
    lifeOfMe: 3,
    lifeOfCom: 3,
    isSelectable: true,
    logs: [],
    selects: [
      { name: "가위", value: "scissor" },
      { name: "바위", value: "rock" },
      { name: "보", value: "paper" },
    ],
  },
  computed: {
    myChoiceImg: function () {
      return this.myChoice !== null
        ? `images/${this.myChoice}.jpg`
        : "images/question.jpg";
    },
    comChoiceImg: function () {
      return this.comChoice !== null
        ? `images/${this.comChoice}.jpg`
        : "images/question.jpg";
    },
    leftLifeOfMe: function () {
      return 3 - this.lifeOfMe;
    },
    leftLifeOfCom: function () {
      return 3 - this.lifeOfCom;
    },
  },
  watch: {
    count: function (newVal) {
      if (newVal === 0) {
        // 컴퓨터가 가위바위보를 선택하는 부분
        this.selectCom();

        this.whoIsWin();
        // 가위바위보 승패 결정

        //몫 차감, 게임 리셋
        this.count = 3;

        //버튼은 다시 보이게 됨
        this.isSelectable = true;

        //로그를 업데이트 하는 부분
        this.updateLogs();
      }
    },
    lifeOfMe: function (newVal) {
      if (newVal === 0) {
        //게임을 종료
        this.endGame("안타깝네요. 당신이 패배하였습니다.");
      }
    },
    lifeOfCom: function (newVal) {
      if (newVal === 0) {
        this.endGame("축하드립니다. 당신이 승리하였습니다.");
      }
    },
  },
  methods: {
    startGame: function () {
      if (this.myChoice === null) {
        alert("가위 바위 보 중 하나를 선택해주세요.");
      } else {
        this.isSelectable = false;
        let countDown = setInterval(() => {
          this.count--;
          if (this.count === 0) {
            clearInterval(countDown);
          }
        }, 1000);
      }
    },
    selectCom: function () {
      let number = Math.random();
      if (number < 0.33) {
        this.comChoice = "scissor";
      } else if (number < 0.66) {
        this.comChoice = "rock";
      } else {
        this.comChoice = "paper";
      }
    },
    whoIsWin: function () {
      if (this.myChoice === this.comChoice) this.winner == "no one";
      else if (this.myChoice === "rock" && this.comChoice === "scissor")
        this.winner = "me";
      else if (this.myChoice === "scissor" && this.comChoice === "paper")
        this.winner = "me";
      else if (this.myChoice === "paper" && this.comChoice === "rock")
        this.winner = "me";
      else if (this.myChoice === "scissor" && this.comChoice === "rock")
        this.winner = "com";
      else if (this.myChoice === "paper" && this.comChoice === "scissor")
        this.winner = "com";
      else if (this.myChoice === "rock" && this.comChoice === "paper")
        this.winner = "com";
      else this.winner = "error";

      if (this.winner === "me") {
        this.lifeOfCom--;
      } else if (this.winner === "com") {
        this.lifeOfMe--;
      }
    },
    updateLogs: function () {
      let log = {
        message: `You: ${this.myChoice}, Computer: ${this.comChoice}`,
        winner: this.winner,
      };

      this.logs.unshift(log);
    },
    endGame: function (msg) {
      setTimeout(() => {
        confirm(msg);
        this.lifeOfMe = 3;
        this.lifeOfCom = 3;
        (this.myChoice = null), (this.comChoice = null);
        this.winner = null;
        this.logs = [];
      }, 500);
    },
  },
});
