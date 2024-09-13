const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

slideNumber = 1;

for (let i = 0; i < images.length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  document.querySelector(".bottom").appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.cssText = "background-color: white; opacity: 100%";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.cssText = "background-color: transparent; opacity: 40%";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 100}%)`;
    buttons[i].style.cssText = "background-color: white; opacity: 100%";

    slideNumber = i + 1;
  });
});

right.addEventListener("click", () => {
  if (slideNumber < images.length) {
    slider.style.transform = `translateX(-${100 * slideNumber}%)`;
    slideNumber++;
    resetBg();
    buttons[slideNumber - 1].style.cssText =
      "background-color: white; opacity: 100%";
  } else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
    resetBg();
    buttons[0].style.cssText = "background-color: white; opacity: 100%";
  }
  console.log(slideNumber);
});

left.addEventListener("click", () => {
  if (slideNumber == 1) {
    slider.style.transform = `translateX(-${100 * (images.length - 1)}%)`;
    slideNumber = images.length;
    resetBg();
    buttons[images.length - 1].style.cssText =
      "background-color: white; opacity: 100%";
  } else {
    slider.style.transform = `translateX(-${100 * (slideNumber - 2)}%)`;
    slideNumber--;
    resetBg();
    buttons[slideNumber - 1].style.cssText =
      "background-color: white; opacity: 100%";
  }
});
