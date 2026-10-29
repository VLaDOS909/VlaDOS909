function onClick(event) {
    "use strict";
    let f1 = document.getElementsByName("field1");
    let s = document.getElementsByName("select1");
    let r = document.getElementById("result");
    let str = f1[0].value;
    let m = str.match(/^\d+$/);
    let price = parseInt(s[0].value, 10);
    let count = parseInt(str, 10);
    event.preventDefault();
    if (m !== null) {
        r.innerHTML = "Стоимость заказа: " + (price * count) + " тыс. руб.";
    } else {
        r.innerHTML = "Ошибка: введите корректное количество";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let b = document.getElementById("my-button");
    b.addEventListener("click", onClick);
});
