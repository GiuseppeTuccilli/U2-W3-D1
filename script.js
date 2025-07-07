class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  confront = function (user2) {
    if (user2.age > this.age) {
      return `${user2.firstName} è più vecchio di ${this.firstName}`;
    } else if (user2.age < this.age) {
      return `${this.firstName} è più vecchio di ${user2.firstName} `;
    } else {
      return `hanno la stessa età`;
    }
  };
}

const gino = new User("Gino", "Paoli", 20, "Cassino");
const pippo = new User("Pippo", "Franco", 30, "Pontecorvo");

console.log(gino);
console.log(pippo);

let s = gino.confront(pippo);

console.log(s);

class Pets {
  constructor(_nome, _padrone, _specie, _razza) {
    this.nome = _nome;
    this.padrone = _padrone;
    this.specie = _specie;
    this.razza = _razza;
  }
}

let n = 0;

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nomeInput");
  let padrone = document.getElementById("padroneInput");
  let specie = document.getElementById("specieInput");
  let razza = document.getElementById("razzaInput");
  let table = document.querySelector("tbody");
  n++;
  const pet = new Pets(nome.value, padrone.value, specie.value, razza.value);
  console.log(pet);
  table.innerHTML += `<tr>
                  <th scope="row">${n.toString()}</th>
                  <td>${pet.nome}</td>
                  <td>${pet.padrone}</td>
                  <td>${pet.specie}</td>
                  <td>${pet.razza}</td>
                </tr>`;
});
