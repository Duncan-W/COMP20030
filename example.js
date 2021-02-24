let xhr = new XMLHttpRequest();
// 2. GET the JSON file (must be specified)
xhr.open('GET', THE-JSON-FILE);
// 3. Send the request over the network
xhr.send();
// 4. This will be called after the response is received
xhr.onload = function() {
 if (xhr.status != 200) { // analyze HTTP status of the response
 alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
 } else { // show the result
 let parsedObj = JSON.parse(xhr.responseText);
 // This function is defined below and deals with the JSON data parsed from the file.
 put_your_code_in_this_function(parsedObj);
 }
};
function put_your_code_in_this_function(parsedObj){
 // parsedObj.name-within-JSON-for-values-you-want-to-access
 console.log("This doesn't do anything yet");
}