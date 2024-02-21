const ul = document.getElementById("list");

// Loop
for (let i = 1; i <= 100; i++) {
  let li = document.createElement("li");
  if (i % 3 == 0 && i % 5 == 0) {
    // console.log("fizzbuzz");
    // ul.innerHTML += `<li>FizzBuzz</li>`;
    ul.append(li);
    li.append("FizzBuzz");
    li.style.backgroundColor = "red";
    // li.append("FizzBuzz");
    // ul.append(li);
  } else if (i % 3 == 0) {
    // console.log("fizz");
    //ul.insertAdjacentHTML("beforeend", `<li>Fizz</li>`);

    ul.append(li);
    li.append("Fizz");
    li.style.backgroundColor = "green";
  } else if (i % 5 == 0) {
    // console.log("buzz");
    // ul.insertAdjacentHTML("beforeend", `<li>Buzz</li>`);
    ul.append(li);
    li.append("Buzz");
    li.style.backgroundColor = "yellowgreen";
  } else {
    // console.log(i);
    //ul.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
    ul.append(li);
    li.append(i);
    li.style.backgroundColor = "steelblue";
  }
}
