const data_store = {
    income: 0,
    debt: 0,
    term: 0,
    repayments: 0,
    expenses_value: 0
}


document.addEventListener('input', update_calculations);


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
    ((element.parentElement).parentElement).removeChild(element.parentElement)
}

function getAllData() {
    data_store.income = document.getElementById("inputIncome").value;
    data_store.debt = document.getElementById("inputLoanPrincipal").value;
    data_store.term = document.getElementById("inputTermRange").value;
    data_store.repayments = document.getElementById("inputRepaymentRange").value;
    data_store.expenses_value = parseInt(0)

    // Iterate over the expenses div to find monthly expenses
    expenses = (document.getElementById("expenses").childNodes);

    for (var i = 1; i < expenses.length; ++i) {
        if (expenses[i].nodeName != "#text") {
            console.log(((expenses[i].childNodes[1]).firstElementChild).value);
            data_store.expenses_value += parseInt(((expenses[i].childNodes[3]).firstElementChild).value);            
        }
    }

    console.log(data_store.income)
    console.log(data_store.debt)
    console.log(data_store.term)
    console.log(data_store.repayments)
    console.log(data_store.expenses_value)

}

function update_view() {
    document.getElementById("staticRepayment").value = (parseInt(data_store.repayments) + 50) + "%"
}

function update_calculations(e) {
    getAllData()
    update_view()
    
}