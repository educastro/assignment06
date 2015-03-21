function GetOrders()
{
 var objRequest = new XMLHttpRequest(); //Create AJAX request object

 //Create URL and Query string
 var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
 url += document.getElementById("custid").value;

 //Checks that the object has returned data
 objRequest.onreadystatechange = function()
 {
 if (objRequest.readyState == 4 && objRequest.status == 200)
 {
 var output = JSON.parse(objRequest.responseText);
 GenerateOutput(output);
 }
 }

 //Initiate the server request
 objRequest.open("GET", url, true);
 objRequest.send();
}
function GenerateOutput(result)
{
 var count = 0;
 var displaytext = "";

 //Loop to extract data from the response object
 for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
 {
displaytext += result.GetOrdersForCustomerResult[count].OrderDate + ", " +
result.GetOrdersForCustomerResult[count].OrderID + "<br>";

 }

 document.getElementById("orderdisplay").innerHTML = displaytext;
}