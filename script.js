"use strict";
let index = 1;
const data = [];

document.querySelector("#btn").addEventListener("click", function () {
  const obj = {
    id: index++,
    book_name: document.querySelector(".bookName").value,
    issued_to: document.querySelector(".issuerName").value,
    issued_time: new Date(),
    status: "Not Returned",
  };
  data.push(obj);

  //now map the array inside the table
  //we can use one built in tr too
  let lastColumn = document.createElement("input");
  if (index == 2) {
    for (const { id, book_name, issued_to, issued_time, status } of data) {
      console.log(id, book_name, issued_to, issued_time, status);
      document.querySelector(".table-data1").innerText = id;
      document.querySelector(".table-data2").innerText = book_name;
      document.querySelector(".table-data3").innerText = issued_to;
      document.querySelector(".table-data4").innerText = issued_time;

      let sts = document.querySelector(".table-data5");
      let editImg = document.createElement("img");
      editImg.setAttribute("src", "./edit.png");
      sts.innerText = status;
      sts.style.color = "red";
      sts.setAttribute("class", "last");
      sts.appendChild(editImg);
    }
  } else {
    //if new data is entered
    const tableBody = document.querySelector("tbody");
    const tableRow = document.createElement("tr");
    let tdata1 = document.createElement("td");
    let tdata2 = document.createElement("td");
    let tdata3 = document.createElement("td");
    let tdata4 = document.createElement("td");
    let tdata5 = document.createElement("td");

    for (const { id, book_name, issued_to, issued_time, status } of data) {
      tdata1.innerText = id;
      tdata2.innerText = book_name;
      tdata3.innerText = issued_to;
      tdata4.innerText = issued_time;
      tdata5.innerText = status;
      tdata5.style.color = "red";
      tdata5.setAttribute("class", "last");
      let editImg = document.createElement("img");
      editImg.setAttribute("src", "./edit.png");
      tdata5.appendChild(editImg);
      tableRow.appendChild(tdata1);
      tableRow.appendChild(tdata2);
      tableRow.appendChild(tdata3);
      tableRow.appendChild(tdata4);
      tableRow.appendChild(tdata5);
    }

    tableBody.appendChild(tableRow);
  }

  //function for changing the status color
  document.querySelector(".last").addEventListener("click", function () {
    console.log("super");
    let changeStatus = document.querySelector(".last");
    if (changeStatus.textContent == "Not Returned") {
      changeStatus.textContent = "Returned";
      changeStatus.style.color = "green";
      changeStatus.setAttribute("class", "changed");
      let editImg = document.createElement("img");
      editImg.setAttribute("src", "./edit.png");
      changeStatus.appendChild(editImg);
    }
  });

  document.querySelector(".bookName").value = "";
  document.querySelector(".issuerName").value = "";
});
