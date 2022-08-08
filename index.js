let btn = document.querySelector("#btn");
let rez = document.querySelector("#rez");

btn.addEventListener("click", (event) => {
  const result =
    vardas(event.target.innerHTML) +
    pavarde(event.target.innerHTML) +
    pastas(event.target.innerHTML) +
    numeris(event.target.innerHTML) +
    darbas(event.target.innerHTML);
  printOutput(result);
});

function vardas() {
  let name = document.querySelector("#name").value;
  localStorage.setItem("name", name);
  document.querySelector("#rez").innerHTML = name;
  return name;
}

function pavarde() {
  let lastname = document.querySelector("#lastname").value;
  localStorage.setItem("lastname", lastname);
  document.querySelector("#rez").innerHTML = lastname;
  return lastname;
}

function pastas() {
  let email = document.querySelector("#email").value;
  localStorage.setItem("email", email);
  document.querySelector("#rez").innerHTML = email;
  return email;
}

function numeris() {
  let number = document.querySelector("#number").value;
  localStorage.setItem("number", number);
  document.querySelector("#rez").innerHTML = number;
  return number;
}

function darbas() {
  let job = document.querySelector("#job").value;
  localStorage.setItem("job", job);
  document.querySelector("#rez").innerHTML = job;
  return job;
}

function printOutput(content) {
  document.querySelector("#rez").innerHTML = content;
}

function uzkrauti() {
  var name = localStorage.getItem("name");
  var lastname = localStorage.getItem("lastname");
  var email = localStorage.getItem("email");
  var number = localStorage.getItem("number");
  var job = localStorage.getItem("job");
  if (name) {
    document.getElementById("name").value = name;
  }

  if (lastname) {
    document.getElementById("lastname").value = lastname;
  }

  if (email) {
    document.getElementById("email").value = email;
  }

  if (number) {
    document.getElementById("number").value = number;
  }
  if (job) {
    document.getElementById("job").value = job;
  }
}

function sukurti() {
  let div = document.createElement("div");
  let p = document.createElement("p");
  div.append();
}
