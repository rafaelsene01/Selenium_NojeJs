const fs = require('fs');

module.exports = {
    takeEvidence: async function (driver, data, name, index) {

        await driver.takeScreenshot().then(file => {
            fs.writeFileSync(index + '_' + name + '.png', file, "base64");
        })
        var oldPath = index + '_' + name + '.png';
        var newPath = 'E:/Automação-Selenium-NodeJs/google/output/' + data;

        moveFile(oldPath, newPath);
    },
    getDateAndTime: function () {
        const data = new Date();
        return data.getDate() + "" + ((data.getMonth() + 1) < 10 ? ("0" + (data.getMonth() + 1)) : (data.getMonth() + 1)) + data.getFullYear() + "-" +
            (data.getHours() < 10 ? ("0" + (data.getHours())) : data.getHours()) + (data.getMinutes() < 10 ? ("0" + (data.getMinutes())) : data.getMinutes());
    }
}

//moves the $file to $dir2
async function moveFile(file, dir2) {
    //include the fs, path modules
    //var fs = require('fs');
    var path = require('path');

    //create dir if not exist
    if (!fs.existsSync("E:/Automação-Selenium-NodeJs/google/output/"))
        fs.mkdirSync("E:/Automação-Selenium-NodeJs/google/output/");
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