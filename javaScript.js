let history = document.getElementById('history');
let field = document.getElementById('display')

const update = () => {
    let expression = field.value;
    let result = eval(field.value);
    field.value = result;
    let historyupdate = `<div>${expression} <div class='result'> = ${result}</div> </div><hr>`;
    history.innerHTML += historyupdate;
}