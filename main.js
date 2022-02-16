import input from "input";

class App {
  constructor(password) {
    this.answer = password;
  }

  async main() {
    let response;
    while (response != this.answer) {
      response = await input.text("What is your Password?");
      if (response == this.answer) {
        console.log("Correct");
        return;
      } else {
        console.log("Incorrect");
      }
    }
  }
}

const app = new App("My Password");
app.main();
