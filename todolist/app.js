let taskDOM = document.querySelector("#task")
let todoList = document.querySelector("#list")
taskDOM.addEventListener("keypress", function (event) {
    event.key == "Enter" ? newElement() : null
})
// let yeni=[];
// yeni.includes(localStorage.getItem("todolist")) ? null : yeni = localStorage.getItem("todolist")
//  yeni = localStorage.getItem("todolist")

let listeElemani = document.querySelectorAll("#list li")
localStorage.getItem("todolist") != null ? listeElemani = localStorage.getItem("todolist").split(",") : null
// console.log(listeElemani)
listeElemani.forEach((e) => {
    todoList.innerHTML += e
})

document.querySelectorAll("#list li").forEach((item) => {
    item.addEventListener("click", () => {
        checker(item);
    });

});

document.querySelectorAll("#list span").forEach((item) => {
    item.addEventListener("click", () => {
        let li = item.parentNode
        remover(li);

    });
});


// todoList.appendChild(listeElemani)
function newElement() {
    if (taskDOM.value.trim() != "") {

        let eleman = document.createElement("li")
        eleman.addEventListener("click", () => {
            checker(eleman)
        })

        let newButton = document.createElement("span")
        newButton.classList.add("close")
        newButton.innerHTML = "X"
        newButton.addEventListener("click", () => {
            remover(eleman)
        })

        eleman.innerHTML = taskDOM.value
        eleman.appendChild(newButton)
        todoList.appendChild(eleman)

        taskDOM.value = ""

    }
    else null
    update()

}

function checker(element) {
    if (element.classList.contains("checked")) {
        element.classList.remove("checked")
    }
    else element.classList.add("checked")

    update()
}

function remover(element) {
    element.remove()
    update()
}

function update() {
    let liler = document.querySelectorAll("#list li")
    let yeni = [];

    liler.forEach((e) => {
        yeni.push(e.outerHTML)
    }
    )
    console.log(yeni)
    window.localStorage.setItem("todolist", yeni)



}

