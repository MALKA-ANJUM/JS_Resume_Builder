
console.log("hello");

const inputfields = document.querySelector(".input-fields")
const output = document.querySelector(".output")

let inputShow = true

async function TextEditor(element) {
    const newEditor = await ClassicEditor
        .create(element, {
            toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote']
        });
    return newEditor;
    // .then(nEditor => {
    //     workExpdetails = nEditor
    // })
    // .catch( error => {
    //     console.error( error );
    // } );
}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor => {
    workExpdetails = nEditor
})
let Academic
TextEditor(inputfields["academics"]).then(nEditor => {
    Academic = nEditor
})

let Projects
TextEditor(inputfields["projects"]).then(nEditor => {
    Projects = nEditor
})




function toggle() {
    if(inputShow){
        inputfields.style.display = "none"
        inputShow = false
        output.innerHTML = `<div class="hero">
                                <h1>${inputfields["name"].value}</h1>
                                <h3>${inputfields["title"].value}</h3>
                            </div>
                            <div class="main" stl>
                                <div>
                                    <div class="topic">
                                        <h2>Objective:</h2>
                                        <p>${inputfields["objective"].value}</p>
                                    </div>
                                    <div class="topic">
                                        <h2>Skills:</h2>
                                        <p>${inputfields["skills"].value}</p>
                                    </div>
                                    <div class="topic">
                                        <h2>Achievements:</h2>
                                        <p>${inputfields["achievements"].value}</p>
                                    </div>
                                    <div class="topic">
                                        <h2>Contact:</h2>
                                        <p>${inputfields["contact"].value}</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="topic">
                                        <h2>Work Experience:</h2>
                                        ${workExpdetails.getData()}
                                    </div>
                                    <div class="topic">
                                        <h2>Academics:</h2>
                                        ${Academic.getData()}
                                    </div>
                                    <div class="topic">
                                        <h2>Projects:</h2>
                                        ${Projects.getData()}
                                    </div>
                                </div>
                            </div>
                            <div class="btn">
                                <button onclick="print()" class="noprint">Print Resume</button>
                            </div>`
    }else{
        inputfields.style.display = "block"
        inputShow = true
        output.innerHTML = ""
    }
}

console.log("hello");

const inputfields = document.querySelector(".input-fields")
const output = document.querySelector(".output")

let inputShow = true

async function TextEditor(element) {
    const newEditor = await ClassicEditor
        .create(element, {
            toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote']
        });
    return newEditor;
    // .then(nEditor => {
    //     workExpdetails = nEditor
    // })
    // .catch( error => {
    //     console.error( error );
    // } );
}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor => {
    workExpdetails = nEditor
})
let Academic
TextEditor(inputfields["academics"]).then(nEditor => {
    Academic = nEditor
})

let Projects
TextEditor(inputfields["projects"]).then(nEditor => {
    Projects = nEditor
})




function toggle() {
    if(inputShow){
        inputfields.style.display = "none"
        inputShow = false
        output.innerHTML = `<div class="hero">
                                <h1>${inputfields["name"].value}</h1>
                                <h3>${inputfields["title"].value}</h3>
                            </div>
                            <div class="main" stl>
                                <div>
                                    <div class="topic">
                                        <h2>Objective:</h2>
                                        <p>${inputfields["objective"].value}</p>
                                    </div>
                                    <div class="topic">
                                        <h2>Skills:</h2>
                                        <p>${inputfields["skills"].value}</p>
                                    </div>
                                    <div class="topic">
                                        <h2>Achievements:</h2>
                                        <p>${inputfields["achievements"].value}</p>
                                    </div>
                                    <div class="topic">
                                        <h2>Contact:</h2>
                                        <p>${inputfields["contact"].value}</p>
                                    </div>
                                </div>
                                <div>
                                    <div class="topic">
                                        <h2>Work Experience:</h2>
                                        ${workExpdetails.getData()}
                                    </div>
                                    <div class="topic">
                                        <h2>Academics:</h2>
                                        ${Academic.getData()}
                                    </div>
                                    <div class="topic">
                                        <h2>Projects:</h2>
                                        ${Projects.getData()}
                                    </div>
                                </div>
                            </div>
                            <div class="btn">
                                <button onclick="print()" class="noprint">Print Resume</button>
                            </div>`
    }else{
        inputfields.style.display = "block"
        inputShow = true
        output.innerHTML = ""
    }
}

