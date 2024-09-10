function submitFunction() {

    let searchText = document.getElementById("name").value.trim();
    let form = document.getElementById('portal-form');
  
    if(searchText.length > 0) {
      document.getElementById("s").value = searchText;
      form.action = "/search.html";
      form.submit();
    } else {
      return false;
    }
  }