const moneyBtn = document.getElementById("money");
const moreMoneyBtn = document.getElementById("moreMoney");
const resultDiv = document.getElementById("result");
const table = document.getElementById("resultTable");
const tableBody = document.querySelector("tbody");
const form = document.querySelector("form");

function getData() {
  fetch("/api/coolpeeps")
    .then((res) => res.json())
    .then((res) => {
      tableBody.innerHTML = "";
      moreMoneyBtn.classList = "btn waves-effect purple darken-4";
      res.forEach((row) => {
        const tr = document.createElement("tr");
        const tdID = document.createElement("td");
        const tdName = document.createElement("td");
        const tdCoolness = document.createElement("td");
        tdID.textContent = row.id;
        tdName.textContent = row.name;
        tdCoolness.textContent = row.coolness;
        tr.appendChild(tdID);
        tr.appendChild(tdName);
        tr.appendChild(tdCoolness);
        tableBody.appendChild(tr);
      });
      table.style.display = "block";
    })
    .catch((err) => {
      console.log(err);
      resultDiv.textContent = "Error: " + err.message + "😅";
    });
}

moneyBtn.onclick = function (event) {
  fetch("/api", { method: "get", mode: "cors" })
    .then((res) => res.json())
    .then((res) => {
      resultDiv.textContent = JSON.stringify(res) + " 🥳";
      moneyBtn.style.display = "none";
      moreMoneyBtn.style.display = "block";
    })
    .catch((err) => {
      console.log(err);
      resultDiv.textContent = "Error: " + err.message + "😅";
    });
};

moreMoneyBtn.onclick = function () {
  moreMoneyBtn.style.display = "none";
  getData();
  form.style.display = "block";
};

form.onsubmit = function (e) {
  e.preventDefault();
  const nameField = document.getElementById("coolName");
  const coolnessField = document.getElementById("coolLevel");
  const name = nameField.value;
  const coolness = coolnessField.value;
  nameField.value = "";
  coolnessField.value = "";
  // console.log({name, coolness});
  fetch("/api/coolpeeps", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, coolness }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      getData();
    })
    .catch((err) => {
      console.log(err);
      resultDiv.textContent = "Error: " + err.message + "😅";
    });
};
