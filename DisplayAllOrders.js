// const bookingDetails= [
//     {
//         "_id": "6452786351f00369a9d8f399",
//         "userEmail": "guru22ca@gmail.com",
//         "name": "Guru",
//         "email": "guru22ca@gmail.com",
//         "city": "from social media",
//         "ZIP_Code": "577601",
//         "country": "India",
//         "__v": 0
//     }
// ]

var billingData = [];
var shippingDetails = [];
const billingtable = document.getElementById("orderTable");
const shippingTabel = document.getElementById("shippingTable");

const fetchData = async () => {
  const response = await fetch("http://localhost:8080/getAllOrdersPlaced");
  const data = await response.json();
  billingData = data.data.billingData;
  shippingDetails = data.data.ShippingData;
  console.log(billingData);
  for (let i = 0; i < billingData.length; i++) {
    const row = billingtable.insertRow(1);
    const orderID = row.insertCell(0);
    const namecell = row.insertCell(1);
    const emailcell = row.insertCell(2);
    const totalAmount = row.insertCell(3);
    const addresscell = row.insertCell(4);
    const citycell = row.insertCell(5);
    const ZIPCODEcell = row.insertCell(6);
    const countrycell = row.insertCell(7);

    orderID.innerHTML = i;
    namecell.innerHTML = billingData[i].name;
    emailcell.innerHTML = billingData[i].email;
    citycell.innerHTML = billingData[i].city;
    ZIPCODEcell.innerHTML = billingData[i].ZIP_Code;
    countrycell.innerHTML = billingData[i].country;
    addresscell.innerHTML = billingData[i].address;
    totalAmount.innerHTML=billingData[i].Amount
  }
  for (let i = 0; i < shippingDetails.length; i++) {
    const row = shippingTabel.insertRow(1);
    const orderID = row.insertCell(0);
    const namecell = row.insertCell(1);
    const emailcell = row.insertCell(2);
    const totalAmount = row.insertCell(3);
    const addresscell = row.insertCell(4);
    const citycell = row.insertCell(5);
    const ZIPCODEcell = row.insertCell(6);
    const countrycell = row.insertCell(7);

    orderID.innerHTML = i;
    namecell.innerHTML = billingData[i].name;
    emailcell.innerHTML = billingData[i].email;
    citycell.innerHTML = billingData[i].city;
    ZIPCODEcell.innerHTML = billingData[i].ZIP_Code;
    countrycell.innerHTML = billingData[i].country;
    addresscell.innerHTML = billingData[i].address;
    totalAmount.innerHTML=billingData[i].Amount

  }
};

fetchData();

// const row=table.insertRow(1);

// const namecell=row.insertCell(0);
// const emailcell=row.insertCell(1);
// const citycell=row.insertCell(2);
// const ZIPCODEcell=row.insertCell(3);
// const countrycell=row.insertCell(4);

// namecell.innerHTML="guru"
// emailcell.innerHTML="guru22ca@gmail.com"
// citycell.innerHTML="bangalore"
