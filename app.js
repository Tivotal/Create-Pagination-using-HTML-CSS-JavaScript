/* Created by Tivotal */

let startBtn = document.querySelector("#startBtn");
let prevNext = document.querySelectorAll(".prevNext");
let links = document.querySelectorAll(".link");
let endBtn = document.querySelector("#endBtn");

let currentStep = 0;

function updateButtons() {
  //if user at last link
  if (currentStep === 4) {
    endBtn.disabled = true;
    prevNext[1].disabled = true;
  } else if (currentStep === 0) {
    //if user at first link
    startBtn.disabled = true;
    prevNext[0].disabled = true;
  } else {
    endBtn.disabled = false;
    prevNext[1].disabled = false;
    startBtn.disabled = false;
    prevNext[0].disabled = false;
  }
}

//event listeners for links
links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    //removing active class from links which has that class
    document.querySelector(".active").classList.remove("active");

    //adding active class to clicked link
    link.classList.add("active");

    //updating current step
    currentStep = index;

    //updating buttons
    updateButtons();
  });
});

//event listener for prev & next buttons
prevNext.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //increment or decrement current step value based on button clicked
    currentStep += e.target.id === "next" ? 1 : -1;

    //toggling active class for links based on current step value
    links.forEach((link, index) => {
      link.classList.toggle("active", index === currentStep);

      //update buttons
      updateButtons();
    });
  });
});

//event listener for end button
endBtn.addEventListener("click", () => {
  //removing active class from links had active class
  document.querySelector(".active").classList.remove("active");

  //adding active class to last link
  links[4].classList.add("active");

  //updating current step value
  currentStep = 4;

  //update buttons
  updateButtons();
  startBtn.disabled = false;
  prevNext[0].disabled = false;
});

//event listener for start button
startBtn.addEventListener("click", () => {
  //removing active class from links had active class
  document.querySelector(".active").classList.remove("active");

  //adding active class to first link
  links[0].classList.add("active");

  //updating current step value
  currentStep = 0;

  //update buttons
  updateButtons();
  endBtn.disabled = false;
  prevNext[1].disabled = false;
});
