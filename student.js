function generateResult() {

    

    let name = document.getElementById("studentName").value.trim();
    let registerNumber =
        document.getElementById("registerNumber").value.trim();

    let studentClass =
        document.getElementById("studentClass").value.trim();

    let department =
        document.getElementById("department").value.trim();


    

    let html = Number(document.getElementById("html").value);
    let css = Number(document.getElementById("css").value);
    let javascript = Number(document.getElementById("javascript").value);
    let database = Number(document.getElementById("database").value);
    let computer = Number(document.getElementById("computer").value);


    

    if (
        name === "" ||
        registerNumber === "" ||
        studentClass === "" ||
        department === ""
    ) {
        alert("Please enter all student details.");
        return;
    }


    let marks = [html, css, javascript, database, computer];

    if (marks.some(mark => mark < 0 || mark > 100)) {
        alert("Marks must be between 0 and 100.");
        return;
    }




    let total = html + css + javascript + database + computer;

    let percentage = total / 5;


    // Grade

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }




    let passed = marks.every(mark => mark >= 35);

    let result = passed ? "PASS" : "FAIL";


    

    document.getElementById("resultName").textContent = name;

    document.getElementById("resultRegister").textContent =
        registerNumber;

    document.getElementById("resultClass").textContent =
        studentClass;

    document.getElementById("resultDepartment").textContent =
        department;


    

    document.getElementById("resultHTML").textContent = html;
    document.getElementById("resultCSS").textContent = css;
    document.getElementById("resultJS").textContent = javascript;
    document.getElementById("resultDB").textContent = database;
    document.getElementById("resultComputer").textContent = computer;


    

    document.getElementById("statusHTML").textContent =
        html >= 35 ? "PASS" : "FAIL";

    document.getElementById("statusCSS").textContent =
        css >= 35 ? "PASS" : "FAIL";

    document.getElementById("statusJS").textContent =
        javascript >= 35 ? "PASS" : "FAIL";

    document.getElementById("statusDB").textContent =
        database >= 35 ? "PASS" : "FAIL";

    document.getElementById("statusComputer").textContent =
        computer >= 35 ? "PASS" : "FAIL";




    document.getElementById("totalMarks").textContent =
        `${total} / 500`;

    document.getElementById("percentage").textContent =
        `${percentage.toFixed(2)}%`;

    document.getElementById("grade").textContent =
        grade;

    document.getElementById("finalResult").textContent =
        result;


    

    document.getElementById("resultSection").style.display = "block";


    
    document.getElementById("resultSection").scrollIntoView({
        behavior: "smooth"
    });
}