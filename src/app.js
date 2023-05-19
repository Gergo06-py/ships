/*
 * File: app.js
 * Author: Borbély Gergő Árpád
 * Copyright: 2023, Borbély Gergő Árpád
 * Date: 2023-05-19
 * Web: https://github.com/Gergo06-py/ships
 * Licenc: MIT
 */

const doc = {
  tbody: document.getElementById("tbody"),
};
const state = {
  baseUrl: "http://localhost:8000/",
  ships: [],
};

window.addEventListener("load", () => {
  init();
});

function init() {
  getShips();
}

function getShips() {
  let url = state.baseUrl + "ships";
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      state.ships = result;
      render();
    });
}

function render() {
  state.ships.forEach(ship => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${ship.name}</td>
      <td>${ship.length}</td>
      <td>${ship.price}</td>
      <td>${ship.person}</td>
      <td>${ship.trailer}</td>
    `
    doc.tbody.append(row);
  });
}
