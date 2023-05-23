const fruits = ["Banana", "Orange", "Apple", "Mango"];


function iterateArr() {
    let text = "<ul>";
    for (let i = 0; i < fruits.length; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    return text;
}

console.log(iterateArr()); 