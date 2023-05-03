const PlaceOrder = document.getElementById("paypal-btn");
// const storedData = sessionStorage();
console.log(PlaceOrder);

PlaceOrder.addEventListener("click", async (e) => {
  e.preventDefault();
  var name = sessionStorage.getItem("billing-name");
  var email = sessionStorage.getItem("billing-email");
  var city = sessionStorage.getItem("billing-city");
  var address = sessionStorage.getItem("billing-address");
  var zip = sessionStorage.getItem("billing-zip");
  var country = sessionStorage.getItem("billing-country");

  var sName = sessionStorage.getItem("shipping-name");
  var sEmail = sessionStorage.getItem("shipping-email");
  var sCity = sessionStorage.getItem("shipping-city");
  var sAddress = sessionStorage.getItem("shipping-address");
  var sZip = sessionStorage.getItem("shipping-zip");
  var sCountry = sessionStorage.getItem("shipping-country");

  
  

  
  var totalAmount=sessionStorage.getItem("Furniture-total")
  const response = await fetch("http://localhost:8080/PlaceOrder", {
    method: "POST",
    body: JSON.stringify({
      userEmail: email,
      Billingname: name,
      Billingemail: email,
      Billingcity: city,
      Billingaddress: address,
      BillingZIP_Code: zip,
      Billingcountry: country,
      Shippingname: sName?sName:name,
      Shippingemail: sEmail?sEmail:email,
      Shippingcity: sCity?sCity:city,
      Shippingaddress: sAddress?sAddress:address,
      ShippingZIP_Code: sZip?sZip:zip,
      Shippingcountry: sCountry?sCountry:country,
      totalAmount:totalAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  console.log(data.data);
  window.location.replace("./orderPlaced.html")
});
