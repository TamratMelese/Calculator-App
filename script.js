let toggle = document.querySelector(".toggle");
let count = 0;

function clickMe() {
  // count++;
  toggle.addEventListener("click", eximiner);
}
clickMe();

function eximiner() {
  // count++;
  if (count == 0) {
    themeChanger();
    count++;
  } else if (count == 1) {
    thirdTheme();
    count++;
  } else if (count > 1) {
    reset();
  }
}

// function eximinerChange() {
//   count++;
// }

function themeChanger() {
  toggle.classList.add("active");
  toggle.classList.remove("activeTwo");
  themeTwo();

  clickMe();
}

function thirdTheme() {
  toggle.classList.add("activeTwo");
  toggle.classList.remove("active");
  themeThree();

  // count = 0;
}

function reset() {
  toggle.classList.remove("active");
  toggle.classList.remove("activeTwo");
  themeOne();
  count = 0;
}

function themeOne() {
  document.documentElement.style.setProperty(
    "--main-background",
    "hsl(222, 26%, 31%)"
  );

  document.documentElement.style.setProperty(
    "--toggle_keypad-background",
    "hsl(223, 31%, 20%)"
  );

  document.documentElement.style.setProperty(
    "--screen-background",
    "hsl(224, 36%, 15%)"
  );

  document.documentElement.style.setProperty(
    "--key-background",
    "hsl(225, 21%, 49%)"
  );
  document.documentElement.style.setProperty(
    "--key-shadow",
    "hsl(224, 28%, 35%)"
  );
  document.documentElement.style.setProperty(
    "--keybackground-toggle",
    "hsl(6, 63%, 50%)"
  );
  document.documentElement.style.setProperty(
    "--keybackground-toggle-shadow",
    "hsl(6, 70%, 34%)"
  );
  document.documentElement.style.setProperty(
    "--Light-grayish-orange",
    "hsl(30, 25%, 89%)"
  );

  document.documentElement.style.setProperty(
    "--Grayish-orange",
    "hsl(28, 16%, 65%)"
  );
  document.documentElement.style.setProperty(
    "--Very-dark-grayish-blue",
    "hsl(221, 14%, 31%)"
  );
  document.documentElement.style.setProperty("--White", "hsl(0, 0%, 100%)");
}

function themeTwo() {
  document.documentElement.style.setProperty(
    "--main-background",
    "hsl(0, 0%, 90%)"
  );

  document.documentElement.style.setProperty(
    "--toggle_keypad-background",
    "hsl(0, 5%, 81%)"
  );

  document.documentElement.style.setProperty(
    "--screen-background",
    "hsl(0, 0%, 93%)"
  );

  document.documentElement.style.setProperty(
    "--key-background",
    " hsl(185, 42%, 37%)"
  );
  document.documentElement.style.setProperty(
    "--key-shadow",
    "hsl(185, 74%, 16%)"
  );
  document.documentElement.style.setProperty(
    "--keybackground-toggle",
    "hsl(25, 98%, 40%)"
  );
  document.documentElement.style.setProperty(
    "--keybackground-toggle-shadow",
    "hsl(25, 99%, 27%)"
  );
  document.documentElement.style.setProperty(
    "--Light-grayish-orange",
    "hsl(45, 7%, 89%)"
  );

  document.documentElement.style.setProperty(
    "--Grayish-orange",
    "hsl(35, 11%, 61%)"
  );
  document.documentElement.style.setProperty(
    "--Very-dark-grayish-blue",
    "hsl(60, 10%, 19%)"
  );
  document.documentElement.style.setProperty("--White", "hsl(0, 2%, 17%)");
}

function themeThree() {
  document.documentElement.style.setProperty(
    "--main-background",
    "hsl(268, 75%, 9%)"
  );

  document.documentElement.style.setProperty(
    "--toggle_keypad-background",
    "hsl(268, 71%, 12%)"
  );

  document.documentElement.style.setProperty(
    "--screen-background",
    "hsl(268, 71%, 12%)"
  );

  document.documentElement.style.setProperty(
    "--key-background",
    "hsl(281, 89%, 26%)"
  );
  document.documentElement.style.setProperty(
    "--key-shadow",
    "hsl(285, 91%, 52%)"
  );
  document.documentElement.style.setProperty(
    "--keybackground-toggle",
    "hsl(176, 100%, 44%)"
  );
  document.documentElement.style.setProperty(
    "--keybackground-toggle-shadow",
    "hsl(177, 92%, 70%)"
  );
  document.documentElement.style.setProperty(
    "--Light-grayish-orange",
    "hsl(268, 47%, 21%)"
  );

  document.documentElement.style.setProperty(
    "--Grayish-orange",
    "hsl(290, 70%, 36%)"
  );
  document.documentElement.style.setProperty(
    "--Very-dark-grayish-blue",
    "hsl(52, 100%, 62%)"
  );
  document.documentElement.style.setProperty("--White", "hsl(52, 100%, 62%)");
}

// -------------------

let display = document.querySelector(".answer");
let numbers = document.querySelector(".numbers");
let firstContainer = document.querySelector(".firstContainer");
let alertDisplay = document.querySelector(".alert");
let alertMessage = document.querySelector(".alertMessage");
let dot = document.querySelector(".dot");

console.log(firstContainer.offsetWidth);

function appendToDisplay(input) {
  if (firstContainer.offsetWidth > 380) {
    if (display.value.length > 13) {
      display.style.fontSize = "3vw";
    }
    if (display.value.length > 18) {
      display.style.fontSize = "2vw";
    }
    if (display.value.length > 27) {
      display.style.fontSize = "1.5vw";
    }
    if (display.value.length > 36) {
      alertDisplay.style.visibility = "visible";
      alertMessage.innerText = "Maximum number of digit (36) exceeded!";
      display.value = display.value.toString().slice(0, -1);
      setTimeout(() => {
        alertDisplay.style.visibility = "hidden";
        alertMessage.innerText = "";
      }, 500);
    }
  }
  if (firstContainer.offsetWidth <= 380) {
    if (display.value.length > 19) {
      display.style.fontSize = "5vw";
    }
    if (display.value.length > 27) {
      display.style.fontSize = "4vw";
    }
    if (display.value.length > 34) {
      alertDisplay.style.visibility = "visible";
      alertMessage.innerText = "Maximum number of digit (34) exceeded!";
      display.value = display.value.toString().slice(0, -1);
      setTimeout(() => {
        alertDisplay.style.visibility = "hidden";
        alertMessage.innerText = "";
      }, 500);
    }
  }

  if (
    display.value === "Error" ||
    display.value === "undefined" ||
    display.value === "Infinity"
  ) {
    clearToDisplay();
  }

  display.value += input;
}

function lastRemove() {
  display.value = display.value.toString().slice(0, -1);
}
function clearToDisplay() {
  display.value = "";
  if (firstContainer.offsetWidth > 380) {
    display.style.fontSize = "4vw";
  }
  if (firstContainer.offsetWidth <= 380) {
    display.style.fontSize = "7vw";
  }
}

function calculate() {
  try {
    if (firstContainer.offsetWidth > 380) {
      display.style.fontSize = "4vw";
    }
    if (firstContainer.offsetWidth <= 380) {
      display.style.fontSize = "7vw";
    }
    display.value = eval(display.value);
    console.log(display.value.length);

    if (display.value === "function Error() { [native code] }") {
      display.value = "";
    }
  } catch (error) {
    display.value = "Error";
  }
}
