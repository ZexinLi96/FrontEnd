/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let table = document.getElementById("q1");
let headerTr = document.createElement("tr");
table.appendChild(headerTr);

for (let head of tableInfo.tableHeader) {
  let headEle = document.createElement("th");
  headEle.textContent = head;
  headerTr.appendChild(headEle);
}

for (let content of tableInfo.tableContent) {
  let tableTr = document.createElement("tr");
  table.appendChild(tableTr);
  let name = document.createElement("td");
  name.textContent = content["Student Name"];
  let age = document.createElement("td");
  age.textContent = content.Age;
  let phone = document.createElement("td");
  phone.textContent = content.Phone;
  let address = document.createElement("td");
  address.textContent = content.Address;
  tableTr.appendChild(name);
  tableTr.appendChild(age);
  tableTr.appendChild(phone);
  tableTr.appendChild(address);
}

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
let orderList = document.getElementById("q21");
let unorderList = document.getElementById("q22");
for (let ele of list) {
  let oele = document.createElement("li");
  oele.textContent = ele;
  let uele = document.createElement("li");
  uele.textContent = ele;
  orderList.appendChild(oele);
  unorderList.appendChild(uele);
}

/*
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let dropDownMenu = document.getElementById("q3");
for (let ele of dropDownList) {
  let option = document.createElement("option");
  option.textContent = ele.content;
  option.value = ele.value;
  dropDownMenu.appendChild(option);
}
