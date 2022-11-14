const studentInfo = {message: "Logged In",
user: {_id: "5", first_name: "Jackson", last_name: "Dansie", cohort: "3"},
users: [{_id: "1", first_name: "Aiden", last_name:"Smith"},
{_id: "2", first_name: "Amanda", last_name:"Smith"}, 
{_id: "3", first_name: "Brett", last_name:"Wheeler"},
{_id: "4", first_name: "Crystal", last_name:"Smith"},
{_id: "5", first_name: "Jackson", last_name:"Dansie"},
{_id: "6", first_name: "Tallon", last_name:"Wanlass"}
]
}

// const headers = {
//     method:"GET",
//     headers: {
//         "Content-Type":`application/json`,
//         body: JSON.stringify({
//             "email": "jackson@devpipeline.com",
//             "password": "ImprintStudios9!"
//           })
//     }
// }

// fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", headers)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))

let studentArray = []
const listOfStudents = document.getElementsByClassName("list-of-students");
const listOfStudentsDiv = listOfStudents.item(0)

const randomStudent = document.getElementsByClassName("choosen-student-text")
const randomStudentDiv = randomStudent.item(0)

const randomButton = document.getElementsByClassName("chooser-btn-div")
const randomButtonDiv = randomButton.item(0)


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
        studentArray.push(student.first_name)
        
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
}}


function createStudentPicker() {
    const h1 = document.createElement("h1")
    h1.setAttribute("id", "choosen-student")
    h1.innerText = ("Its your lucky day.")
    
    const chooserBtn = document.createElement("button")
    chooserBtn.setAttribute("id", "btn-activator")
    chooserBtn.innerText = ("Whos it gonna be?")
    chooserBtn.addEventListener("click", (e) => choosenStudent())
    
    randomStudentDiv.appendChild(h1)
    randomButtonDiv.appendChild(chooserBtn)
}

function addToCount(id) {
    const span = document.getElementById(id);
    const studentId = id.split("-");
    let studentName = ""
    const students = studentInfo.users
    span.innerText = +span.innerText + 1;

    students.forEach(user => {
        if (user._id == studentId[1]){
            studentName = user.first_name
        }})

    studentArray.push(studentName)
}

function minusFromCount(id) {
    const span = document.getElementById(id);
    const studentId = id.split("-");
    let studentName = ""
    const students = studentInfo.users

    if (span.innerText > 0){
    span.innerText = + span.innerText - 1;
    }

    students.forEach(user => {
        if (user._id == studentId[1]){
            studentName = user.first_name
        }})

    const index = studentArray.indexOf(studentName)
    if (index > -1) {
        studentArray.splice(index, 1);
    }
}

function choosenStudent() {
    
    if(studentArray.length == 0 ){
        for(student of studentInfo.users){
            let currentWeight = document.getElementById(`weight-${student._id}`)
            
            for(let i = 0; i < currentWeight.innerText; i++) {
                studentArray.push(student.first_name)
            }
        }}
        
        min = 0
        max = studentArray.length - 1
        const randomNum = Math.floor(Math.random() * (max - min +1) + min)
        const choosenStudent = studentArray.splice(randomNum , 1)
        
        const h1 = document.getElementById("choosen-student")
        h1.innerText = choosenStudent
        randomStudentDiv.appendChild(h1)
    }
    
    createStudentdivs()
    createStudentPicker()