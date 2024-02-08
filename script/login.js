function saveFormData() {
    // Get the form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Create an object to store the data
    var formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    // Save the data to local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Alert the user that the data has been saved
    alert("Your message has been sent!");
  }