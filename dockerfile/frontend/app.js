const moneyBtn = document.getElementById('$$$');
const resultDiv = document.getElementById('result');

moneyBtn.onclick = function(event) {
    fetch('http://localhost:3000/', {method: 'get', mode: "cors"})
    .then(res => res.json())
    .then(res => {
        resultDiv.textContent = JSON.stringify(res) + " 🥳";
    })
    .catch(err => {
        console.log(err)
        resultDiv.textContent = "Error: " + err.message + "😅";
    });
}