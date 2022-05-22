function validateForm() {
  var returnval = true;

  var name = document.forms["myForm"]["name"].value;
  if (name.length < 5) {
    alert("Error: Length Of Name Is Too Short");
    returnval = false;
  }
  var email = document.forms["myForm"]["email"].value;
  if (email.length > 41) {
    alert("Error: Email Is Too Long");
    returnval = false;
  }
  var mob = document.forms["myForm"]["mob"].value;
  if (email.length > 10) {
    alert("Error: Mobile Number Should Not Be More Than 10-Digit");
    returnval = false;
  }

  return returnval;
}
