const physicalList = document.getElementById('physical-list');
const rosterSwitch = document.getElementById('roster-switch');
const reportSwitch = document.getElementById('report-switch');

let roster = [];
let report = [];
let needsPhysical = [];

const uploadConfirm = document.getElementById("upload-confirm").
    addEventListener('click', () => {
    roster = [];
    Papa.parse(document.getElementById('upload-file').files[0],
    {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            for (let i=0; i<results.data.length; i++) {
                let name = results.data[i]["Last Name"].trim() + ", " + results.data[i]["First Name"].trim();
                roster.push(name)
            }
        }
    });
    rosterSwitch.innerHTML = 'File Uploaded!'
    rosterSwitch.style.background = 'rgb(37 159 67)'
    console.log(roster)
});


const reportConfirm = document.getElementById("report-confirm").
    addEventListener('click', () => {
    report = [];
    Papa.parse(document.getElementById('upload-report').files[0],
    {
        download: true,
        header: false,
        skipEmptyLines: true,
        complete: function(results){
            for (let i=7; i < results.data.length; i++) {
                let heading = {
                    Season1: results.data[i][0],
                    Grade1: results.data[i][1],
                    Activity: results.data[i][2],
                    Name: results.data[i][3],
                };
                report.push(heading['Name']);
            }
        }
    });
    reportSwitch.innerHTML = 'File Uploaded!'
    reportSwitch.style.background = 'rgb(37 159 67)'
    console.log(report)
});

function getPhysical() {
    physicalList.innerHTML = "";
    roster.sort()
    for (let i=0; i<roster.length; i++) {
        let done = report.includes(roster[i]);
        if (done === false) {
            needsPhysical.push(roster[i])
            let athlete = document.createElement('li');
            athlete.innerHTML = roster[i];
            physicalList.appendChild(athlete)
        }
    }
}

document.getElementById('word').onclick = function() {
    const rows = [...needsPhysical];
    let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");
    console.log(rows)
};






document.getElementById('word').onclick = function() {
    const rows = [...needsPhysical];
    let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");
    console.log(rows)
};




