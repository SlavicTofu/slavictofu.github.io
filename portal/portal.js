function submitFunction() {

    let searchText = document.getElementById("form-search").value.trim();
    let form = document.getElementById('portal-form');
  
    if(searchText.length > 0) {
      document.getElementById("s").value = searchText;
      form.action = "/" + searchText + "/index.html";
      form.submit();
    } else {
      return false;
    }
  }