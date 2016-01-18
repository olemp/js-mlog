/// <reference path="model/ILogOptions" />
/// <reference path="model/ILogObject" />
var MLog = (function () {
    function MLog(logOptions) {
        this.array = [];
        this.logOptions = logOptions;
    }
    MLog.prototype.consoleAvailable = function () {
        return (console && console.log);
    };
    MLog.prototype.Log = function (object) {
        if (!this.logOptions)
            return;
        var logMsg = new Date() + " || " + object.Type + " || " + object.Module + " || " + object.Message;
        if (this.consoleAvailable && this.logOptions.On) {
            console.log(logMsg);
        }
        this.array.push(logMsg);
    };
    MLog.prototype.getOutput = function () {
        return this.array.join("\n");
    };
    return MLog;
})();
