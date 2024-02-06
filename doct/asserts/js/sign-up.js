const inputGroup = document.querySelectorAll(".input-group");
console.log(inputGroup);

[...inputGroup].forEach((item) =>
  item.addEventListener("click", (event) => {
    const srcEyeOn = "./asserts/images/Eye-on.svg";
    const srcEyeOff = "./asserts/images/Eye-off.svg";
    if (event.target.matches(".eye")) {
      if (event.target.getAttribute("src") == srcEyeOn) {
        event.target.setAttribute("src", srcEyeOff);
      } else {
        event.target.setAttribute("src", srcEyeOn);
      }
    }
  })
);
