import input from "input";

class App {
  constructor(password) {
    this.answer = password;
  }

  async main() {
    const response = await input.text("What is your Password?");
    console.log("Password");
    if (response == this.answer) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  }
}

const app = new App("My Password");
app.main();
