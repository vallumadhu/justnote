let add = document.getElementById("add")
let container = document.getElementById("container")

/// getting data from local storage
container.innerHTML = localStorage.getItem("pageData")

// giving functionality to notes stored in local storage
let i = 0
while (i < container.children.length) {
    let note = container.children[i]
    let newTitle = container.children[i].children[0]
    let newPara = container.children[i].children[1]
    let dateSpan = container.children[i].children[2]
    let moreBtn = container.children[i].children[3]
    let optionBox = container.children[i].children[4]
    let editBtn = optionBox.children[0]
    let deleteBtn = optionBox.children[1]
    optionBox.style.display = "none"
    moreBtn.addEventListener("click", function () {
        if (optionBox.style.display == "flex") {
            optionBox.style.display = "none"
        } else {
            optionBox.style.display = "flex"
        }
    })
    editBtn.addEventListener("click", function () {
        let title = document.createElement("input")
        title.placeholder = "Title"
        let para = document.createElement("textarea")
        para.placeholder = "take a note..."
        para.style.minHeight = "130px"
        para.addEventListener("input", function () {
            para.style.height = para.scrollHeight + "px"
        })
        optionBox.remove()
        moreBtn.remove()
        title.value = newTitle.innerHTML
        para.value = newPara.innerHTML
        newTitle.remove()
        newPara.remove()
        dateSpan.remove()
        note.appendChild(title)
        note.appendChild(para)
        let saveBtn = document.createElement("button")
        saveBtn.innerHTML = "Save"
        saveBtn.classList.add("save")
        note.appendChild(saveBtn)
        saveBtn.addEventListener("click", function () {
            saveBtn.remove()
            newTitle.innerHTML = title.value
            newPara.innerHTML = para.value
            title.remove()
            para.remove()
            let now = new Date()
            let day = now.getDate()
            if (day < 10) {
                day = "0" + day
            }
            let month = now.getMonth() + 1
            if (month < 10) {
                month = "0" + month
            }
            let year = now.getFullYear()
            let date = day + "/" + month + "/" + year
            note.appendChild(newTitle)
            note.appendChild(newPara)
            note.appendChild(dateSpan)
            dateSpan.innerHTML = date
            note.appendChild(moreBtn)
            note.appendChild(optionBox)
            optionBox.style.display = "none"
            // local storage
            localStorage.clear()
            localStorage.setItem("pageData", container.innerHTML)

        })


    })
    deleteBtn.addEventListener("click", function () {
        note.remove()
        // local storage
        localStorage.clear()
        localStorage.setItem("pageData", container.innerHTML)
    })


    console.log(i)
    i++

}

// adding a note when add button is clicked

add.addEventListener("click", function () {
    /// removing all empty unsaved notes
    let i = 0
    while (i < container.children.length) {
        if (container.children[i].children[2].tagName == "BUTTON") {
            container.children[i].remove()
            alert("Save current note before creating new one")
        }
        i++
    }
    i = 0
    let newnote = document.createElement("div")
    newnote.classList.add("note")
    let title = document.createElement("input")
    title.placeholder = "Title"
    let para = document.createElement("textarea")
    para.placeholder = "take a note..."
    para.style.minHeight = "130px"
    para.addEventListener("input", function () {
        para.style.height = para.scrollHeight + "px"
    })

    /// making save btn functionable

    let saveBtn = document.createElement("button")
    saveBtn.innerHTML = "Save"
    saveBtn.classList.add("save")
    newnote.appendChild(title)
    newnote.appendChild(para)
    newnote.appendChild(saveBtn)
    container.insertBefore(newnote, container.children[0])
    saveBtn.addEventListener("click", function () {
        saveBtn.remove()
        let newTitle = document.createElement("h2")
        newTitle.innerHTML = title.value
        let newPara = document.createElement("p")
        newPara.innerHTML = para.value
        title.remove()
        para.remove()
        let now = new Date()
        let day = now.getDate()
        if (day < 10) {
            day = "0" + day
        }
        let month = now.getMonth() + 1
        if (month < 10) {
            month = "0" + month
        }
        let year = now.getFullYear()
        let date = day + "/" + month + "/" + year
        let dateSpan = document.createElement("span")
        dateSpan.innerHTML = date
        let moreBtn = document.createElement("button")
        moreBtn.classList.add("edit")
        moreBtn.addEventListener("click", function () {
            if (optionBox.style.display == "flex") {
                optionBox.style.display = "none"
            } else {
                optionBox.style.display = "flex"
            }
        })
        let optionBox = document.createElement("div")
        optionBox.classList.add("optionBox")
        let editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editBtn.classList.add("option")

        // making note editable when user clicks on edit button

        editBtn.addEventListener("click", function () {
            optionBox.remove()
            moreBtn.remove()
            title.value = newTitle.innerHTML
            para.value = newPara.innerHTML
            newTitle.remove()
            newPara.remove()
            dateSpan.remove()
            newnote.appendChild(title)
            newnote.appendChild(para)
            newnote.appendChild(saveBtn)
        })
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.classList.add("option")
        deleteBtn.addEventListener("click", function () {
            newnote.remove()
            // local storage
            localStorage.clear()
            localStorage.setItem("pageData", container.innerHTML)
        })
        optionBox.appendChild(editBtn)
        optionBox.appendChild(deleteBtn)
        newnote.appendChild(newTitle)
        newnote.appendChild(newPara)
        newnote.appendChild(dateSpan)
        newnote.appendChild(moreBtn)
        newnote.appendChild(optionBox)
        // local storage
        localStorage.clear()
        localStorage.setItem("pageData", container.innerHTML)
    })
})