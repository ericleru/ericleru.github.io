const NBYEAR = 3;
const NBTRIYEAR = 2;
const NBTRI = NBTRIYEAR * NBYEAR;

const sTriYnYp = ['Y1T1', 'Y1T2', 'Y2T1', 'Y2T2', 'Y3T1', 'Y3T2'];

const startingSubjects = ['PHYS', 'CHEM', 'MATH'];

//var allSubjects = []; // now defined in data file
var allCourses = []; // This the array of course objects for the current subject

var currentSubject;
var currentSubjectCode = "PHYS"; // will be overwritten
var currentFaculty = 6; // SCIENCE

function Main() {
    initBoard();
}

Main();

function Test() {
    console.log("Testing");
}

function condEval(cond, sCourses) {
    // Evaluates a condition, return rescond with "Bool": true, false or null if error, and "Text:" first failed conditions
    var rescond = { "Bool": null, "Grade": false, "Text": null };
    var text = null;
    var res = null;
    switch (cond.Type.toLowerCase()) {
        case "cond":
            // standard boolean condition in "Bool" ("and" or "or") with a "List" of 2 or more conditions
            switch (cond.Bool.toLowerCase()) {
                case "and":
                    res = true;
                    for (var nc = 0; nc < cond.List.length; nc++) {
                        var rescond2 = condEval(cond.List[nc], sCourses);
                        if (!(rescond2.Bool)) {
                            res = false;
                            text = rescond2.Text;
                            break;
                        } else {
                            rescond.Grade = rescond2.Grade | rescond.Grade;
                        }
                    }
                    break;
                case "or":
                    res = false;
                    for (var nc = 0; nc < cond.List.length; nc++) {
                        var rescond2 = condEval(cond.List[nc], sCourses);
                        if (rescond2.Bool) {
                            rescond.Grade = rescond2.Grade | rescond.Grade;
                            res = true;
                            break;
                        }
                    }
                    console.log(res)
                    if (!res) {
                        text = cond.Text;
                    }
                    break;
            }
            break;
        case "all":
            // must have all courses in "List"
            res = true;
            for (var nc = 0; nc < cond.List.length; nc++) {
                if (!(condCourseIncluded(cond.List[nc], sCourses))) {
                    res = false;
                    text = cond.List[nc] + " is a required course";
                    break;
                }
            }
            break;
        case "some":
            // must have some courses in "List" as specified by field "Howmany" 
            count = 0;
            res = false;
            for (var nc = 0; nc < cond.List.length; nc++) {
                countadd = condCourseIncluded(cond.List[nc], sCourses);
                if (countadd > 0) {
                    count = count + countadd;
                    if (count >= cond.Howmany) {
                        res = true;
                        break;
                    }
                }
            }
            if (!(res)) {
                text = cond.Text;
                if (text == null) {
                    text = "At least " + cond.Howmany + " courses from " + cond.List;
                    text.replaceAll(",", ", ");
                }
            }
            break;
        case "pts":
            // must have xx pts from courses in "List" as specified by field "Howmany" 
            count = 0;
            res = false;
            for (var nc = 0; nc < cond.List.length; nc++) {
                countadd = condCourseIncludedPts(cond.List[nc], sCourses);
                if (countadd > 0) {
                    count = count + countadd;
                    if (count >= cond.Howmany) {
                        res = true;
                        break;
                    }
                }
            }
            if (!(res)) {
                text = cond.Text;
                if (text == null) {
                    text = "At least " + cond.Howmany + " pts from courses from " + cond.List;
                    text.replaceAll(",", ", ");
                }
            }
            break;
        case "grade":
            // must have all courses in "List" (in principle with minimum grade)
            res = true;
            for (var nc = 0; nc < cond.List.length; nc++) {
                if (!(condCourseIncluded(cond.List[nc], sCourses))) {
                    res = false;
                    text = cond.List[nc] + " is a required course (with minimum grade)";
                    break;
                }
            }
            rescond.Grade = true;
            break;
    }
    rescond.Bool = res;
    if (text !== null) {
        rescond.Text = text;
    } else {
        rescond.Text = cond.Text;
    }
    return rescond;
}

function condCourseIncluded(sCourse, sCourseList) {
    var res = false;
    if (!(sCourseList.includes(sCourse))) {
        // Check regular expressions with ?, ??, or ???
        res = 0;
        if (sCourse.substring(4, 7) === '???') {
            for (var nc = 0; nc < sCourseList.length; nc++) {
                if (sCourse.substring(0, 4) === sCourseList[nc].substring(0, 4)) {
                    res = res + 1;
                }
            }
        } else {
            if (sCourse.substring(5, 7) === '??') {
                for (var nc = 0; nc < sCourseList.length; nc++) {
                    if (sCourse.substring(0, 5) === sCourseList[nc].substring(0, 5)) {
                        res = res + 1;
                    }
                }
            } else {
                if (sCourse.substring(6, 7) === '?') {
                    for (var nc = 0; nc < sCourseList.length; nc++) {
                        if (sCourse.substring(0, 6) === sCourseList[nc].substring(0, 6)) {
                            res = res + 1;
                        }
                    }
                }
            }
        }
    } else {
        res = true; // also counts as one
    }

    return res;
}

function condCourseIncludedPts(sCourse, sCourseList) {
    var res = 0;
    if (!(sCourseList.includes(sCourse))) {
        // Check regular expressions with ?, ??, or ???
        if (sCourse.substring(4, 7) === '???') {
            for (var nc = 0; nc < sCourseList.length; nc++) {
                if (sCourse.substring(0, 4) === sCourseList[nc].substring(0, 4)) {
                    res = res + getCourse(sCourseList[nc], '').Pts;
                }
            }
        } else {
            if (sCourse.substring(5, 7) === '??') {
                for (var nc = 0; nc < sCourseList.length; nc++) {
                    if (sCourse.substring(0, 5) === sCourseList[nc].substring(0, 5)) {
                        res = res + getCourse(sCourseList[nc], '').Pts;
                    }
                }
            } else {
                if (sCourse.substring(6, 7) === '?') {
                    for (var nc = 0; nc < sCourseList.length; nc++) {
                        if (sCourse.substring(0, 6) === sCourseList[nc].substring(0, 6)) {
                            res = res + getCourse(sCourseList[nc], '').Pts;
                        }
                    }
                }
            }
        }
    } else {
        res = getCourse(sCourse, '').Pts;
    }

    return res;
}



function btnChangeFaculty() {
    currentFaculty = document.getElementById("dd-faculties").selectedIndex;
    updateSubjectsDropdown();
    //    var selectd = document.getElementById("dd-subjects");
}

function btnAddSubject() {
    // Add selected subject to first subject button (shift the others right)
    // And update all the unused courses to this subject
    sSubj = document.getElementById("dd-subjects").value;
    existingSubj = [document.getElementById("subject1").innerText, document.getElementById("subject2").innerText, document.getElementById("subject3").innerText];
    if (!existingSubj.includes(sSubj)) { // not there, add it
        changetSubjectButton(3, existingSubj[1]);
        changetSubjectButton(2, existingSubj[0]);
        changetSubjectButton(1, sSubj);
    }
    initSubject(getSubjectIndex(sSubj));
}

function btnChangeSubject(sCode) {
    // Update all unused courses to the newly selected subject
    currentSubject = getSubjectIndex(sCode);
    initSubject(currentSubject);

}

function btnChooseProgramme() {
    var val = (document.getElementById("dd-progs").value);
    if (val) { // something selected
        fillProgramme(getProgIndex(val));
    }
}

function btnCheckMajor(nBut) {
    var indMajor = document.getElementById('dd-major' + nBut).selectedIndex;
    sCourses = readChosenCourseCodes();
    rescond = condEval(allMajors[indMajor].Reqs, sCourses);
    var el = document.getElementById('major-reqs-text');
    if (rescond.Bool) {
        el.classList.add('ctr-major-text-ok');
        el.classList.remove('ctr-major-text');
        if (rescond.Grade) {
            el.innerText = allMajors[indMajor].Name + ' major: OK*';
        } else {
            el.innerText = allMajors[indMajor].Name + ' major: OK';
        }
    } else {
        el.classList.add('ctr-major-text');
        el.classList.remove('ctr-major-text-ok');
        el.innerText = allMajors[indMajor].Name + ': ' + rescond.Text;
    }
}



function fillProgramme(indprog) {
    // Fill up chosen courses with those from given programme
    for (var nt = 0; nt < NBTRI; nt++) {
        var idStack = "tri" + nt;
        emptyStack(idStack);
        YT = allProgs[indprog][sTriYnYp[nt]]; // array of course strings
        if (YT.length > 0) {
            // Create sCourseArr to populate
            sCourseArr = [];
            var course;
            for (var nc = 0; nc < YT.length; nc++) {
                course = getCourse(YT[nc], sTriYnYp[nt]);
                if (course !== null) {
                    sCourseArr.push(course);
                }
            }
            populateStack(idStack, sCourseArr);
        }

    }
    // re-initialize unused
    initSubject(currentSubject)
}

function readChosenCourseCodes() {
    // Create a list of string with all chosen courses
    var sCourseArr = [];
    for (var nt = 0; nt < NBTRI; nt++) {
        var idStack = "tri" + nt;
        var elstack = document.getElementById(idStack);
        var ccall = elstack.children;
        for (var nc = 0; nc < ccall.length; nc++) {
            sCourseArr.push(ccall[nc].id);
        }
    }
    return sCourseArr;
}

function readChosenCourses() {
    // Create a list of course objects
    var courseArr = [];
    for (var nt = 0; nt < NBTRI; nt++) {
        var idStack = "tri" + nt;
        var elstack = document.getElementById(idStack);
        var ccall = elstack.children;
        for (var nc = 0; nc < ccall.length; nc++) {
            courseArr.push(getCourse(ccall[nc].id, sTriYnYp[nt]));
        }
    }
    return courseArr;
}

function btnClearAll() {
    if (confirm('Are you sure you want to clear all selected courses?')) {
        for (var nt = 0; nt < NBTRI; nt++) {
            var idStack = "tri" + nt;
            emptyStack(idStack);
            initSubject(currentSubject);
        }
    }
}



function btnTallyPoints() {
    var courseArr = readChosenCourses();
    var ptsY = new Array(NBYEAR);
    for (var ny = 0; ny < NBYEAR; ny++) {
        ptsY[ny] = 0;
    }
    for (var nc = 0; nc < courseArr.length; nc++) {
        var Y = courseArr[nc].Code.substring(4, 5);
        ptsY[Y - 1] = ptsY[Y - 1] + courseArr[nc].Pts;
    }
    ptsTOT = 0;
    for (var ny = 0; ny < NBYEAR; ny++) {
        ptsTOT = ptsTOT + ptsY[ny];
        var el = document.getElementById("pts-Y" + (ny + 1));
        el.innerHTML = ptsY[ny];
    }
    document.getElementById("pts-TOT").innerHTML = ptsTOT;
}



function changetSubjectButton(nNb, sSubj) {
    var el = document.getElementById("subject" + nNb);
    el.innerText = sSubj;
    el.style = "background-color: " + allSubjects[getSubjectIndex(sSubj)].Color + ";";
}


function changeCurrentSubject(newcg) {
    currentSubject = newcg;
    currentSubjectCode = allSubjects[newcg].Code;
}


function initSubject(indSubject) {
    changeCurrentSubject(indSubject);
    allCourses = [];
    for (var nt = 0; nt < NBTRI; nt++) {
        courseArr = allSubjects[indSubject][sTriYnYp[nt]];
        var YT = [];
        for (var nc = 0; nc < courseArr.length; nc++) {
            YT[nc] = {
                "Code": courseArr[nc].Code,
                "Description": courseArr[nc].Description,
                "Pts": courseArr[nc].Pts,
                "Preqs": courseArr[nc].Preqs
            };
        }
        allCourses[nt] = YT;
    }

    // Add all courses of current subject to unused (except those already chosen)
    populateAllCourses();

    // Change class of subject-buttons to highlight selected
    for (var ns = 1; ns < 4; ns++) {
        var el = document.getElementById("subject" + ns);
        if (el.innerText === allSubjects[indSubject].Code) {
            el.classList.add("btn-subject-selected");
        } else {
            el.classList.remove("btn-subject-selected");
        }
    }


}

function sortableOnAdd(evt) {
    if (evt.clone.id.substring(0, 4) !== currentSubjectCode) {
        // Remove element
        var obj2 = document.getElementById(evt.clone.id);
        obj2.remove();
    }

}

function updateSubjectsDropdown() {
    var selectf = document.getElementById('dd-faculties');
    selectf.options[currentFaculty].selected = true;

    var selectd = document.getElementById('dd-subjects');
    // Empty subject dropdown first
    while (selectd.length > 0) {
        selectd.remove(selectd.length - 1);
    }

    // fill up dropdown for subjects
    for (var i = 0; i < allSubjects.length; i++) {
        if (allSubjects[i].Faculty === allFacs[currentFaculty]) {
            var opt = allSubjects[i].Code;
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selectd.appendChild(el);
        }
    }

    // Add unselectabe blank
    selectd.selectedIndex = -1;


}





function initBoard() {
    // Create sortable/draggable subjects
    for (var nt = 0; nt < NBTRI; nt++) {
        sTri = 'tri' + nt;
        new Sortable(document.getElementById(sTri + 'unused'), {
            group: sTri, // set both lists to same group
            animation: 150,
            onAdd: sortableOnAdd
        });

        new Sortable(document.getElementById(sTri), {
            group: sTri,
            animation: 150,
        });
    }

    // prepare dropdown for faculties
    var select = document.getElementById('dd-faculties');

    for (var i = 0; i < allFacs.length; i++) {
        var opt = allFacs[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    updateSubjectsDropdown();
    // Select starting subject
    var selectd = document.getElementById('dd-subjects');
    for (var i = 0; i < selectd.length; i++) {
        if (selectd[i].value == currentSubjectCode) {
            selectd[i].selected = true;
        }
    }

    // Add first three subject buttons
    for (i = 0; i < 3; i++) {
        var el = document.getElementById("subject" + (i + 1));
        el.innerText = startingSubjects[i];
        el.style = "background-color:" + allSubjects[getSubjectIndex(startingSubjects[i])].Color + ";";
    }

    initSubject(getSubjectIndex(startingSubjects[0])); // 0 = PHYS 

    // prepare dropdown for programmes
    var select = document.getElementById('dd-progs');

    for (var i = 0; i < allProgs.length; i++) {
        var opt = allProgs[i].Name;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
    select.options[0].selected = true;

    // prepare dropdown for majors
    var select1 = document.getElementById('dd-major1');
    var select2 = document.getElementById('dd-major2');

    for (var i = 0; i < allMajors.length; i++) {
        var opt = allMajors[i].Name;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select1.appendChild(el);
        el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select2.appendChild(el);
    }
    select1.options[0].selected = true;
    select2.options[1].selected = true;



}

function populateAllCourses() {
    // Add all courses of current subject to unused (except those already chosen)
    for (var nt = 0; nt < NBTRI; nt++) {
        // Check which courses are already selected and create array of courses to add
        idStackUnused = "tri" + nt + "unused";
        if (allCourses[nt].length > 0) {
            var stack = document.getElementById("tri" + nt);
            const ccall = stack.children;
            sCourseHere = [];
            for (const el of ccall) {
                sCourseHere.push(el.innerText);
            }

            if (sCourseHere.length > 0) {
                sCourseArr = [];
                for (var nc = 0; nc < allCourses[nt].length; nc++) {
                    if (!sCourseHere.includes(allCourses[nt][nc].Code)) { // not already there, add it
                        sCourseArr.push(allCourses[nt][nc]);
                    }
                }
                if (sCourseArr.length > 0) {
                    populateStack(idStackUnused, sCourseArr);
                } else {
                    emptyStack(idStackUnused);
                }
            } else {
                populateStack(idStackUnused, allCourses[nt]);
            }

        } else { // only remove courses
            emptyStack(idStackUnused);
        }

    }
}


function emptyStack(idStack) {
    const stack = document.getElementById(idStack);
    // Remove all existing courses starting from end (to avoid problems in loop)
    const ccall = stack.children
    for (var n = ccall.length - 1; n >= 0; n--) {
        ccall[n].remove();
    }

}


function populateStack(idStack, sCourseArray) {
    // sCourseArray  contains an array of courses
    emptyStack(idStack);
    const stack = document.getElementById(idStack);
    // Now add all new courses in array
    for (const course of sCourseArray) {
        var node = document.createElement("div");
        node.innerText = course.Code;
        node.setAttribute('data-html', "true");
        node.setAttribute('data-toggle', "tooltip");
        var preqs = '';
        if (course.Preqs !== '') {
            preqs = '\n Preqs: ' + course.Preqs;
        }
        node.title = course.Description + ' (' + course.Pts + 'pts)' + preqs;
        node.classList.add("course");
        col = allSubjects[getSubjectIndex(course.Code.substring(0, 4))].Color;
        node.style = "background-color:" + col + ";";
        if (course.Pts >= 20) {
            node.classList.add("c20pts");
        } else {
            node.classList.add("c15pts");
        }
        node.id = course.Code;
        stack.appendChild(node);
    }

}


//function createArrays() {
//}

function getSubjectIndex(sSubj) {
    var ind = null;
    for (var n = 0; n < allSubjects.length; n++) {
        if (allSubjects[n].Code === sSubj) {
            ind = n;
        }
    }
    return ind;
}

function getProgIndex(sSubj) {
    var ind = null;
    for (var n = 0; n < allProgs.length; n++) {
        if (allProgs[n].Name === sSubj) {
            ind = n;
        }
    }
    return ind;
}

function getCourse(sCourse, sYT) {
    var course = null;
    var ns = getSubjectIndex(sCourse.substring(0, 4));
    if (ns !== null) {
        if (sYT === '') { // Trimester not specified, need to try both
            sYT = 'Y' + sCourse.substring(4, 5) + 'T1';
            course = getCourse(sCourse, sYT);
            if (course === null) {
                sYT = 'Y' + sCourse.substring(4, 5) + 'T2';
                course = getCourse(sCourse, sYT);
            }
        } else {
            var YT = allSubjects[ns][sYT];
            var indc = null;
            for (var nc = 0; nc < YT.length; nc++) {
                if (YT[nc].Code === sCourse) {
                    indc = nc;
                }
            }
            if (indc !== null) {
                course = YT[indc];
            }
        }

    }
    return course;
}
