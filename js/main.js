// Get elements by className
const items = document.querySelectorAll('.item');
const entry = document.querySelector('.entry');

// Select items and write down they in the entry(input = value)
items.forEach((el) => {
    el.addEventListener('click', selectedItem)})

function selectedItem () {
    let getItem = this.innerHTML
    entry.value += getItem
}

// Clear entry(input = '')
const clear_btn = document.querySelector('.button-clear').addEventListener('click', clearEntry)

function clearEntry () {
    entry.value = ''
}

// Get result
const result = document.querySelector('.button-result').addEventListener('click', getResult);

function getResult () {    
    try{
        let value = entry.value

        if (!value){
            console.error('Please, fill in to the end.')
            alert('Please, fill in to the end.')
        }
        else{
            let res = eval(value)
            entry.value = res
        }
    } catch(error){
        alert('Invalid or unexpected token.')
    }
}