const ul = document.getElementById("list");
let li = document.createElement("li");

// Loop
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
    // ul.innerHTML += `<li>FizzBuzz</li>`;
    ul.append(li);
    li.append("FizzBuzz");
    console.log(li);
    li.style.backgroundColor = "blue";
    // li.append("FizzBuzz");
    // ul.append(li);
  } else if (i % 3 == 0) {
    console.log("fizz");
    ul.insertAdjacentHTML("beforeend", `<li>Fizz</li>`);
  } else if (i % 5 == 0) {
    console.log("buzz");
    ul.insertAdjacentHTML("beforeend", `<li>Buzz</li>`);
  } else {
    console.log(i);
    ul.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
  }
}
