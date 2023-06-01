const inp = document.querySelector(".section")
const enter = document.querySelector(".enter")
function f() {
    enter.textContent = ""
    if (isNaN(Number(inp.value)) || inp.value == "" ) {
        alert("Введите число!")
    } else if (Number(inp.value) <= 10 && Number(inp.value) > 0) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            let result = JSON.parse(xhr.response)
            let images = ``
            for (const resultKey in result) {
                images += `<img src=${result[resultKey].url} width="200px">`
            }
            enter.innerHTML = images
        };
        xhr.onerror = function() {
            console.log('Ошибка запроса', xhr.status);
        };
        xhr.open("get", `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${inp.value}`, true)
        xhr.send()
    } else {
        enter.innerHTML = "<p>Число вне диапазона от 1 до 10"
    }
}

const button = document.querySelector(".button")
button.addEventListener("click", f)