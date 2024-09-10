function submitFunction() {

    let searchText = document.getElementById("form-search").value.trim();
    let form = document.getElementById('portal-form');
  
    if(searchText.length > 0) {
      document.getElementById("s").value = searchText;
      switch(searchText.toLowerCase()) {
        case "liam":
          form.action = "/people/liam/index.html";
          break;
        case "alex":
          form.action = "/people/alex/index.html";
          break;
        default:
            form.action = "/void.html";
      }
      form.submit();
    } else {
      return false;
    }
  }