$(document).ready(function() {
    // Getting references to our form and input Unsure about first one.  
    var signUpButton = $(".signup");
    var usernameInput = $("input#username-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the signup button is clicked, we validate the username, email and password are not blank
    signUpButton.on("click", function(event) {
      event.preventDefault();
      var userData = {
        username: usernameInput.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.username ||!userData.email || !userData.password) {
        return;
      }

      // If we have a username, email and password, run the signUpUser function
      signUpUser(userData.username, userData.email, userData.password);
      usernameInput.val("");
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(username, email, password) {
      $.post("/users/signup", {
        username: username,
        email: email,
        password: password
      }).then(function(data) {
        if(data.duplicateUser) {
          alert("Sorry, that username has been taken")
        } else {
          window.location = data.redirect; 
        }
      }).catch(function(err) {
        console.log(err);
      });
    }
  });
  

  