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
  const newLi = Document.createElement('li');
  newLi.innerHTML = retrieveEmployeeInformation();
  $("employee-list").append(newLi);
}
// addNewElementAsLi(): This function takes the value retrieved from the previous retrieveEmployeeInformation function and adds that string to a new list element which is appended to the ul with class "employee-list".
// addNewLiOnClick(): This adds the employee name as an li element on click and clears the input value.
// clearEmployeeListOnLinkClick(): This empties out the employee list when "Clear employee list" button clicked.
