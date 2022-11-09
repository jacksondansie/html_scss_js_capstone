function addToCount(id) {
    const span = document.getElementById(id)
    console.log(id)
    span.innerText = +span.innerText + 1;
}

function minusFromCount(id) {
    const span = document.getElementById(id)
    console.log(span)
    span.innerText = +span.innerText - 1;
}

const listOfStudents = document.getElementsByClassName("list-of-students");
const listOfStudentsDiv = listOfStudents.item(0)


// function downloadStudents() {
//     fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {credentials: 'include'})
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(err => console.error("Failure:",err))s
// }

// downloadStudents()

const studentInfo = {message: "Logged In",
user: {_id: "5", first_name: "Jackson", last_name: "Dansie", cohort: "3"},
users: [{_id: "1", first_name: "Aiden", last_name:"Smith"},
        {_id: "2", first_name: "Amanda", last_name:"Smith"}, 
        {_id: "3", first_name: "Brett", last_name:"Wheeler"},
        {_id: "4", first_name: "Crystal", last_name:"Smith"},
        {_id: "5", first_name: "Jackson", last_name:"Dansie"},
        {_id: "6", first_name: "Jack", last_name:"Danger"}
    ]
}

function createStudentdivs() {
for(student of studentInfo.users){
    const containerDiv = document.createElement("div")

    const id = student._id

    const weightSpan = document.createElement("span")
    weightSpan.setAttribute("id", "weight-" + id)
    weightSpan.innerText = "1"
    
    const studentName = document.createElement("h4")
    studentName.setAttribute("id", "student-" + id)
    studentName.append(student.first_name + ": ")
    studentName.appendChild(weightSpan)
    
    const buttonContainerDiv = document.createElement("div")
    buttonContainerDiv.classList.add("buttons")

    const redAddBtn = document.createElement("button")
    redAddBtn.classList.add('red-add-btn')
    redAddBtn.setAttribute("id", "rbtn-" + id)
    redAddBtn.innerText = "+"
    redAddBtn.addEventListener("click",  (e) => addToCount(`weight-${id}`, e))

    const greenMinusBtn = document.createElement("button")
    greenMinusBtn.classList.add('green-minus-btn')
    greenMinusBtn.setAttribute("id", "gbtn-" + id)
    greenMinusBtn.innerText = "-"
    greenMinusBtn.addEventListener("click",  (e) => minusFromCount(`weight-${id}`, e))

    buttonContainerDiv.appendChild(redAddBtn)
    buttonContainerDiv.appendChild(greenMinusBtn)
    containerDiv.appendChild(studentName)
    containerDiv.appendChild(buttonContainerDiv)
    listOfStudentsDiv.appendChild(containerDiv)
}
}

createStudentdivs()

const studentArray = []
