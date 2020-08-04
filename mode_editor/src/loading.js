
function read_file(file) {
    let freader = new FileReader();
    return new Promise(function (resolve, reject) {
        freader.onerror = function (err) {
            reject(err);
        };
        freader.onabort = function (err) {
            reject(err);
        };
        freader.onload = function () {
            resolve(freader.result);
        };
        freader.readAsText(file);
    });
}
export function parse_files(fls) {
    return import('@iarna/toml')
        .then(function(TOML) {
            let promises = [...fls].map((fl) => read_file(fl).then(TOML.parse));
            return Promise.all(promises)
                .then(function (alldata) {
                    var rootmode = {
                        name: '',
                        command: [],
                    };
                    var modes = [];
                    for (var idx = 0; idx < alldata.length; idx++) {
                        let cur = alldata[idx];
                        let commands = cur['command'] || [];
                        let curmodes = cur['mode'] || [];
                        for (var jdx = 0; jdx < commands.length; jdx++) {
                            rootmode.command.push(commands[jdx]);
                        }
                        for (jdx = 0; jdx < curmodes.length; jdx++) {
                            modes.push(curmodes[jdx]);
                        }
                    }
                    modes.push(rootmode);
                    return modes;
                });
        });
}