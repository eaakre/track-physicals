const physicalList = document.getElementById('physical-list');
const rosterSwitch = document.getElementById('roster-switch');
const reportSwitch = document.getElementById('report-switch');

// let list = document.createElement('p');
let roster = [];
let report = [];


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
    console.log(roster)
});


const reportConfirm = document.getElementById("report-confirm").
    addEventListener('click', () => {
    report = [];
    Papa.parse(document.getElementById('upload-report').files[0],
    {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            for (let i=5; i<results.data.length; i++) {
                // report.push(results.data[i][""])
                report.push(results.data[i][""])
            }
        }
    });
    reportSwitch.innerHTML = 'File Uploaded!'
    console.log(report)
});

function getPhysical() {
    physicalList.innerHTML = "";
    roster.sort()
    for (let i=0; i<roster.length; i++) {
        let done = report.includes(roster[i]);
        if (done === false) {
            let athlete = document.createElement('li');
            athlete.innerHTML = roster[i];
            physicalList.appendChild(athlete)
        }
    }
}




