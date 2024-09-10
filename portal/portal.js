function submitFunction() {

    let searchText = document.getElementById("form-search").value.trim();
    let form = document.getElementById('portal-form');
  
    if(searchText.length > 0) {
      document.getElementById("s").value = searchText;
      switch(searchText) {
        case "liam":
          console.log("Going to Liam's Page!");
        case "Liam":
          console.log("Going to Liam's Page!");
      }
      form.submit();
    } else {
      return false;
    }
  }