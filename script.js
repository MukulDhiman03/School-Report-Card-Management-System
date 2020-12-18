function getInputValue() {
    // Selecting the input element and get its value 

    var sem = document.querySelector('[id = "sem"]').value;
    sessionStorage.setItem('sem', sem)
    console.log(sem)
    var branch = document.querySelector('[id = "branch"]').value;
    console.log(branch)
    sessionStorage.setItem('branch', branch)
    var noofrecord = document.querySelector('[id = "noofrecord"]').value;

}

function grade(total) {
    if (total > 90 && total <= 100) {
        return 'A';
    } else if (total > 80 && total <= 90) {
        return 'B';
    } else if (total > 70 && total <= 80) {
        return 'C';
    } else if (total > 60 && total <= 70) {
        return 'D';
    } else if (total > 50 && total <= 60) {
        return 'E';
    } else {
        return 'F';
    }


}

function calculate() {
    var sem = sessionStorage.getItem('sem')
    var branch = sessionStorage.getItem('branch')

    let elem = document.createElement('div')
    elem.className = 'divclass';
    elem.innerText = `**The Details are of ${sem} sem students having branch ${branch}**`;

    let tab = document.getElementById('mytable');
    tab.append(elem)
        // console.log("Run")

    // Evaluation of marks for student1
    var sname1 = document.getElementById('s1').value;
    // console.log(typeof(sname1))
    var cs1 = parseInt(document.getElementById('s1CS').value);
    var em1 = parseInt(document.getElementById('s1EM').value);
    var ld1 = parseInt(document.getElementById('s1LD').value);
    var ds1 = parseInt(document.getElementById('s1DS').value);


    var totalMarks1 = cs1 + em1 + ld1 + ds1;
    var t1 = document.getElementById('s1Total').value = totalMarks1;

    var grd1 = grade(totalMarks1);
    var g1 = document.getElementById('s1Grade').value = grd1;

    // let arr1 = [sname1, cs1, em1, ld1, ds1]
    // sessionStorage.setItem('Student1', JSON.stringify(arr1))

    // Evaluation of marks for student1
    var sname2 = document.getElementById('s2').value;
    var cs2 = parseInt(document.getElementById('s2CS').value);
    var em2 = parseInt(document.getElementById('s2EM').value);
    var ld2 = parseInt(document.getElementById('s2LD').value);
    var ds2 = parseInt(document.getElementById('s2DS').value);


    var totalMarks2 = cs2 + em2 + ld2 + ds2;
    var t2 = document.getElementById('s2Total').value = totalMarks2;

    var grd2 = grade(totalMarks2);
    var g2 = document.getElementById('s2Grade').value = grd2;

    // Evaluation of marks for student3
    var sname3 = document.getElementById('s3').value;
    var cs3 = parseInt(document.getElementById('s3CS').value);
    var em3 = parseInt(document.getElementById('s3EM').value);
    var ld3 = parseInt(document.getElementById('s3LD').value);
    var ds3 = parseInt(document.getElementById('s3DS').value);


    var totalMarks3 = cs3 + em3 + ld3 + ds3;
    var t3 = document.getElementById('s3Total').value = totalMarks3;

    var grd3 = grade(totalMarks3);
    var g3 = document.getElementById('s3Grade').value = grd3;

    // Evaluation of marks for student4
    var sname4 = document.getElementById('s4').value;
    var cs4 = parseInt(document.getElementById('s4CS').value);
    var em4 = parseInt(document.getElementById('s4EM').value);
    var ld4 = parseInt(document.getElementById('s4LD').value);
    var ds4 = parseInt(document.getElementById('s4DS').value);


    var totalMarks4 = cs4 + em4 + ld4 + ds4;
    var t4 = document.getElementById('s4Total').value = totalMarks4;

    var grd4 = grade(totalMarks4);
    var g4 = document.getElementById('s4Grade').value = grd4;

    // Evaluation of marks for student5
    var sname5 = document.getElementById('s5').value;
    var cs5 = parseInt(document.getElementById('s5CS').value);
    var em5 = parseInt(document.getElementById('s5EM').value);
    var ld5 = parseInt(document.getElementById('s5LD').value);
    var ds5 = parseInt(document.getElementById('s5DS').value);


    var totalMarks5 = cs5 + em5 + ld5 + ds5;
    var t5 = document.getElementById('s5Total').value = totalMarks5;

    var grd5 = grade(totalMarks5);
    var g5 = document.getElementById('s5Grade').value = grd5;


    var mytbl = document.getElementById("mytable")
    mytbl.style.backgroundColor = "white";
    mytbl.style.border = "none"
        // console.log(mytbl)


}

function printResult() {
    window.print();
}

function deleteRecord() {
    confirm("YOU WANT TO DELETE THIS REPORT")
    var mytbl = document.getElementById("mytable").style.display = "none";
    var btn = document.getElementById("btn1")
    btn.innerText = " ";
    var a = document.createElement('a');
    a.href = "/createRecord.html"
    a.innerText = "Create New Record"
    btn.appendChild(a);
}