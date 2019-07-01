function preventRefreshOnSubmit(){
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
  })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return $("input").val();
}

function addNewElementAsLi() {
  const newLi = document.createElement('li');
  newLi.innerHTML = retrieveEmployeeInformation();
  $("ul.employee-list").append(newLi);
}

function addNewLiOnClick() {
  addNewElementAsLi();
  $("input").val("");
}

function clearEmployeeListOnLinkClick() {
  $("ul.employee-list").empty();
}

// addNewLiOnClick(): This adds the employee name as an li element on click and clears the input value.
// clearEmployeeListOnLinkClick(): This empties out the employee list when "Clear employee list" button clicked.
