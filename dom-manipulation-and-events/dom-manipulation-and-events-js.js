const container = document.querySelector("#container");

const red = document.createElement("p");
red.classList.add("red-attr");
red.style.color = "red";
red.textContent = "Hey I'm red!";

const blue = document.createElement("h3");
blue.classList.add("blue-attr");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3!";

const box = document.createElement("div");
box.classList.add("box-attr");
box.style.cssText = "border-style: solid; background: pink;";

const insideDiv1 = document.createElement("h1");
insideDiv1.textContent = "I'm in a div.";

const insideDiv2 = document.createElement("p");
insideDiv2.textContent = "ME TOO!";

container.appendChild(red);
container.appendChild(blue);
container.appendChild(box);

box.appendChild(insideDiv1);
box.appendChild(insideDiv2);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
  
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});