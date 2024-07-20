const expenceform = document.querySelector("#form");
const expenceliSt = document.querySelector("#suggestion");

expenceform.addEventListener("submit", function (event) {
  event.preventDefault();

  const description = document.querySelector("#description").value;
  const category = document.querySelector("#Category").value;
  const amount = document.querySelector("#amount").value;

  if (description && category && !isNaN(amount)) {
    const rowdata = document.createElement("tr");

    rowdata.innerHTML = `
               <td>${description}</td>
               <td>${category}</td>
               <td>${amount}</td>

               `;
    expenceliSt.appendChild(rowdata);
    document.querySelector("#description").value = "";
    document.querySelector("#Category").value = "";
    document.querySelector("#amount").value = "";
  } else {
    alert("please fill the form with Vaild details");
  }
});
