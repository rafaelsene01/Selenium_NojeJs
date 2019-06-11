const fs = require('fs');

let index = 0;
const dateAndTime = getDateAndTime();

var Evidence = function () {

    this.takeEvidence = async function (webdriver, name) {
        index++;
        webdriver.takeScreenshot().then(file => {
            fs.writeFileSync(index + '_' + name + '.png', file, "base64");
        }).then(() => {
            var oldPath = index + '_' + name + '.png';
            var newPath = '../output/' + dateAndTime;

            moveFile(oldPath, newPath);
        })
    }
}

function getDateAndTime() {
    const data = new Date();
    return data.getDate() + "" + ((data.getMonth() + 1) < 10 ? ("0" + (data.getMonth() + 1)) : (data.getMonth() + 1)) + data.getFullYear() + "-" +
        (data.getHours() < 10 ? ("0" + (data.getHours())) : data.getHours()) + (data.getMinutes() < 10 ? ("0" + (data.getMinutes())) : data.getMinutes());
}

//moves the $file to $dir2
function moveFile(file, dir2) {
    //include the fs, path modules
    //var fs = require('fs');
    var path = require('path');

    //create dir if not exist
    if (!fs.existsSync("../output/"))
        fs.mkdirSync("../output/");
    if (!fs.existsSync(dir2))
        fs.mkdirSync(dir2);

    //gets file name and adds it to dir2
    var f = path.basename(file);
    var dest = path.resolve(dir2, f);

    fs.rename(file, dest, (err) => {
        if (err) throw err;
        else console.log('Successfully moved');
    });
};

module.exports = Evidence;