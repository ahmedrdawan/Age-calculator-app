const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
const middle_img = document.querySelector(".middle img");
const one = document.querySelectorAll(".one");
const spanYears = document.querySelector("#y");
const spanMonth = document.querySelector("#m");
const spanDay = document.querySelector("#d");

middle_img.onclick = function () {
  if (input[0].value === "" || input[1].value === "" || input[2].value === "") {
    for (let i = 0; i < input.length; i++) {
      input[i].style.cssText = `border-color: var(--Light-red)`;
      label[i].style.cssText = `color: var(--Light-red)`;
      let labelOnly = document.createElement("label");
      let labelEmpty = document.createTextNode("This Field Is Required");
      labelOnly.appendChild(labelEmpty);
      labelOnly.style.cssText = `
            color: var(--Light-red);
            font-weight: 400;
            font-size: 9px;
            margin-top: 5px;
            `;
      one[i].appendChild(labelOnly);
    }
  } else if (
    input[0].value > 31 &&
    input[1].value > 12 &&
    input[2].value > new Date().getFullYear()
  ) {
    for (let i = 0; i < input.length; i++) {
      input[i].style.cssText = `border-color: var(--Light-red)`;
      label[i].style.cssText = `color: var(--Light-red)`;
      let labelOnly = document.createElement("label");
      let labelEmpty = document.createTextNode(
        `Must Be a valid ${label[i].innerHTML}`
      );
      labelOnly.appendChild(labelEmpty);
      labelOnly.style.cssText = `
            color: var(--Light-red);
            font-weight: 400;
            font-size: 9px;
            margin-top: 5px;
            `;
      one[i].appendChild(labelOnly);
    }
  }
  else if (input[0].value > 31) {
    input[0].style.cssText = `border-color: var(--Light-red)`;
      label[0].style.cssText = `color: var(--Light-red)`;
      let labelOnly = document.createElement("label");
      let labelEmpty = document.createTextNode(
        `Must Be a valid ${label[0].innerHTML}`
      );
      labelOnly.appendChild(labelEmpty);
      labelOnly.style.cssText = `
            color: var(--Light-red);
            font-weight: 400;
            font-size: 9px;
            margin-top: 5px;
            `;
      one[0].appendChild(labelOnly);
  }
  else if (input[1].value > 12) {
    input[1].style.cssText = `border-color: var(--Light-red)`;
      label[1].style.cssText = `color: var(--Light-red)`;
      let labelOnly = document.createElement("label");
      let labelEmpty = document.createTextNode(
        `Must Be a valid ${label[1].innerHTML}`
      );
      labelOnly.appendChild(labelEmpty);
      labelOnly.style.cssText = `
            color: var(--Light-red);
            font-weight: 400;
            font-size: 9px;
            margin-top: 5px;
            `;
      one[1].appendChild(labelOnly);
  }
  else if (input[2].value > new Date().getFullYear()) {
    input[2].style.cssText = `border-color: var(--Light-red)`;
      label[2].style.cssText = `color: var(--Light-red)`;
      let labelOnly = document.createElement("label");
      let labelEmpty = document.createTextNode(
        `Must Be a valid ${label[2].innerHTML}`
      );
      labelOnly.appendChild(labelEmpty);
      labelOnly.style.cssText = `
            color: var(--Light-red);
            font-weight: 400;
            font-size: 9px;
            margin-top: 5px;
            `;
      one[2].appendChild(labelOnly);
  }
  else {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // يبدأ الشهر من 0
    let currentDay = currentDate.getDate();
  
    if (currentDay - input[0].value < 0) {
      currentMonth--; // تقليل الشهور إذا كانت الأيام سالبة
      currentDay += 30; // تعويض للأيام السالبة
    }
    if (currentMonth - input[1].value < 0) {
      currentYear--; // تقليل السنوات إذا كانت الشهور سالبة
      currentMonth += 12; // تعويض للشهور السالبة
    }
    spanYears.innerHTML = currentYear - input[2].value;
    spanMonth.innerHTML = currentMonth - input[1].value;
    spanDay.innerHTML = currentDay - input[0].value;
  }  
};
