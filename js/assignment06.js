function MenuSelection() {
	if (document.getElementById("menu").value == "Please Select an Option") {
		document.getElementById("allCustomersTable").style.display = 'none';
		document.getElementById("customerOrderHistory").style.display = 'none';
		document.getElementById("ordersForCustomers").style.display = 'none';
	} 
	else if (document.getElementById("menu").value == "All Customers Information") {
		document.getElementById("allCustomersTable").style.display = "inline";
		document.getElementById("customerOrderHistory").style.display = 'none';
		document.getElementById("ordersForCustomers").style.display = 'none';
	}
	else if(document.getElementById("menu").value == "Customer Order History") {
		document.getElementById("allCustomersTable").style.display = 'none';
		document.getElementById("customerOrderHistory").style.display = "inline";
		document.getElementById("ordersForCustomers").style.display = 'none';
	} 
	else if(document.getElementById("menu").value == "Orders for Customer") {
		document.getElementById("allCustomersTable").style.display = 'none';
		document.getElementById("customerOrderHistory").style.display = 'none';
		document.getElementById("ordersForCustomers").style.display = 'inline';
	}
	else {
		document.getElementById("allCustomersTable").style.display = 'none';
		document.getElementById("customerOrderHistory").style.display = 'none';
		document.getElementById("ordersForCustomers").style.display = 'none';
	}

}

function getAllCustomers() {
	// Starts the variable required for AJAX
	var objRequest = new XMLHttpRequest();

	// Creates URL and query string
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";

	// Checks if the object objRequest has new values
	objRequest.onreadystatechange = function() {
		if(objRequest.readyState == 4 && objRequest.status == 200) {
			var output = JSON.parse(objRequest.responseText);
			generateOutputForGetAllCustomers(output);
		}
	}

	// Initiates the server request
	objRequest.open("GET", url, true);
	objRequest.send();
}

function generateOutputForGetAllCustomers(result) {
	var resultTable = "<h1>All Customers Informations</h1><br><table border=1><tr><th>Customer ID</th><th>Customer Name</th><th>Customer City</th></tr>"
	var count = 0;
	// Loop for extracting data from response object
	for (count = 1; count < result.GetAllCustomersResult.length; count++) {
		resultTable += "<tr><td>" + result.GetAllCustomersResult[count].CustomerID + "</td><td>" + result.GetAllCustomersResult[count].CompanyName + "</td><td>" + result.GetAllCustomersResult[count].City + "</td></tr>";
	}

	resultTable += "</table>";

	document.getElementById("outputForSection1").innerHTML = resultTable;
}

function getCustomerOrderHistory() {
	// Starts the variable required for AJAX
	var objRequest = new XMLHttpRequest();

	// Creates URL and query string
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
	var customerID = document.getElementById("customerID").value;
	url += document.getElementById("customerID").value;

	// Checks if the object objRequest has new values
	objRequest.onreadystatechange = function() {
		if(objRequest.readyState == 4 && objRequest.status == 200) {
			var output = JSON.parse(objRequest.responseText);
			generateOutputForGetCustomerOrderHistory(output, customerID);
		}
	}

	// Initiates the server request
	objRequest.open("GET", url, true);
	objRequest.send();
}

function generateOutputForGetCustomerOrderHistory(result, customerID) {
	var resultTable = "<h1>Customer's Order History</h1><br><table border=1><tr><th>Customer ID</th><th>Product Name</th><th>Quantities Ordered</th></tr>"
	var count = 0;
	// Loop for extracting data from response object
	for (count = 0; count < result.length; count++) {
		resultTable += "<tr><td>" + customerID + "</td><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
	}

	resultTable += "</table>";

	document.getElementById("outputForSection2").innerHTML = resultTable;
}

function getOrdersForCustomer() {
	// Starts the variable required for AJAX
	var objRequest = new XMLHttpRequest();

	// Creates URL and query string
	var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
	var customerID = document.getElementById("customerID2").value;
	url += document.getElementById("customerID2").value;

	// Checks if the object objRequest has new values
	objRequest.onreadystatechange = function() {
		if(objRequest.readyState == 4 && objRequest.status == 200) {
			var output = JSON.parse(objRequest.responseText);
			generateOutputForGetOrdersForCustomer(output, customerID);
		}
	}

	// Initiates the server request
	objRequest.open("GET", url, true);
	objRequest.send();
}

function generateOutputForGetOrdersForCustomer(result, customerID) {
	var resultTable = "<h1>Customer's Order History</h1><br><table border=1><tr><th>Customer ID</th><th>Order Date</th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Ship Post Code</th><th>Shipped Date</th></tr>"
	var count = 0;
	// Loop for extracting data from response object
	for (count = 0; count < result.GetOrdersForCustomerResult.length; count++) {
		resultTable += "<tr><td>" + customerID + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td><td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>";
	}

	resultTable += "</table>";

	document.getElementById("outputForSection3").innerHTML = resultTable;
}