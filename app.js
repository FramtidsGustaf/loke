class Fluga {
  constructor() {
    this.body = document.querySelector("body");
  }
  skapaFluga() {
    let element = document.createElement("div");
    element.style.position = "absolute";
    element.style.top = "50%";
    element.style.left = "50%";
    element.style.transform = "translate(-50%, -50%)";
    element.classList.add("lokesFace");
    this.body.appendChild(element);

    setInterval(() => {
      let randomTop = Math.floor(Math.random() * 80) + 5;
      let randomLeft = Math.floor(Math.random() * 80) + 5;
      let randomSpeed = Math.floor(Math.random() * 2) + 0.5;
      let randomRotate = Math.random() * 360;
      element.style.transition = `all ${randomSpeed}s ease-out`;
      element.style.top = `${randomTop}%`;
      element.style.left = `${randomLeft}%`;
      element.style.transform = `rotate(${randomRotate}deg)`;
    }, Math.floor(Math.random() * 500) + 400);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let fluga = new Fluga();
  for (let i = 0; i < 200; i++) {
    fluga.skapaFluga();
  }
});
