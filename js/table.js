/*//////////////////////////////////////////////////////////////////
[ TABLE TAG ]*/


<script type="text/javascript">

    function checkForm(form)
    {
      if(form.username.value === "") {
        alert("Error: Username Cannot Be Blank!");
        form.username.focus();
        return false;
      }

    if(form.first_name.value === "") {
        alert("Error: First Name Cannot Be Blank!");
        form.first_name.focus();
        return false;
      }
    
    if(form.last_name.value === "") {
        alert("Error: Last Name Cannot Be Blank!");
        form.last_name.focus();
        return false;
    }
    
    if(form.age1.value === "") {
        alert("Error: Age Cannot Be Blank!");
        form.age1.focus();
        return false;

   }

    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(form.pwd1.value.length < 6) {
        alert("Error: Password must be containing more than six characters!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd1.focus();
      return false;
   }

   alert("Well Done");
    return true;
  }
  
  {
  document.getElementById("hasil").innerHTML = form.name
}

</script>