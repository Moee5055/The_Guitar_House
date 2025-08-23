/* Retrieve all the fields required to validate
 */
let form = document.user_form,
  fname = form.fullname,
  email = form.email,
  pwd = form.password,
  cpwd = form.cpassword;

/* Add next element after input field */
let emptySpan = [fname, email, pwd, cpwd];
emptySpan.forEach((item) => {
  if (item != undefined) {
    let span = document.createElement("span");
    span.classList.add("error");
    item.parentNode.append(span);
  }
});
/* Form submit event */
form.addEventListener("submit", function (e) {
  if (fname != undefined) {
    if (fname.value.length == 0) {
      e.preventDefault();
      fname.nextElementSibling.innerText = "Fullname is required!";
    } else {
      fname.nextElementSibling.innerText = "";
    }
  }
  if (email != undefined) {
    if (email.value.length == 0) {
      e.preventDefault();
      email.nextElementSibling.innerText = "E-Mail is required!";
    } else {
      email.nextElementSibling.innerText = "";
    }
  }
  if (pwd != undefined) {
    if (pwd.value.length == 0) {
      e.preventDefault();
      pwd.nextElementSibling.innerText = "Password is required!";
    } else {
      pwd.nextElementSibling.innerText = "";
    }
  }
  if (cpwd != undefined) {
    if (cpwd.value.length == 0) {
      e.preventDefault();
      cpwd.nextElementSibling.innerText = "Password is required!";
    } else {
      cpwd.nextElementSibling.innerText = "";
    }
  }
});

if (email != undefined) {
  email.addEventListener("keyup", function () {
    console.log(this.value);
    let regStr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g;
    //regStr.test(email.value)
    if (this.value.match(regStr) == null) {
      this.nextElementSibling.innerText = "E-Mail is invalid!";
    } else {
      this.nextElementSibling.innerText = "";
    }
  });
}
if (cpwd != undefined) {
  cpwd.addEventListener("keyup", function () {
    if (this.value != pwd.value) {
      this.nextElementSibling.innerText = "Password is not matched!";
    } else {
      this.nextElementSibling.innerText = "";
    }
  });
}
