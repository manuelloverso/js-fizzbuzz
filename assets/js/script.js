const ul = document.getElementById("list");

// Loop
for (let i = 1; i <= 100; i++) {
  let li = document.createElement("li");
  if (i % 3 == 0 && i % 5 == 0) {
    // console.log("fizzbuzz");
    // ul.innerHTML += `<li>FizzBuzz</li>`;
    li.innerText = "FizzBuzz";
    li.className = "bg-red";
  } else if (i % 3 == 0) {
    // console.log("fizz");
    //ul.insertAdjacentHTML("beforeend", `<li>Fizz</li>`);

    li.innerText = "Fizz";
    li.style.backgroundColor = "green";
  } else if (i % 5 == 0) {
    // console.log("buzz");
    // ul.insertAdjacentHTML("beforeend", `<li>Buzz</li>`);
    li.innerText = "Buzz";
    li.style.backgroundColor = "yellowgreen";
  } else {
    // console.log(i);
    //ul.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
    li.innerText = i;
    li.style.backgroundColor = "steelblue";
  }
  ul.append(li);
}
