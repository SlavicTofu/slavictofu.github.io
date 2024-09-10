function submitFunction() {

    let searchText = document.getElementById("form-search").value.trim();
    let form = document.getElementById('portal-form');
  
    if(searchText.length > 0) {
      document.getElementById("s").value = searchText;
      switch(searchText) {
        case "liam":
          form.action = "/people/liam/index.html";
        case "alex":
          form.action = "/people/alex/index.html";
      }
      form.submit();
    } else {
      return false;
    }
  }