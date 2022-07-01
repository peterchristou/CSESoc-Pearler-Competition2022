function addExpense() {
    event.preventDefault();
    document.getElementById("expenses").innerHTML += `
    <div class="form-group row">
        <div class="col-sm-9">
            <input type="text" class="form-control" placeholder="Expense">
        </div>
        <div class="col-sm-2" style="padding-left:0px">
            <input type="text" class="form-control" placeholder="Value">
        </div>
        <button class="btn btn-danger" onclick="removeExpense(this)">-</button>
    </div>
    `;
}

function removeExpense(element) {
    event.preventDefault();
    console.log(((element.parentElement).parentElement).removeChild(element.parentElement))
}