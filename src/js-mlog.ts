/// <reference path="model/ILogOptions" />
/// <reference path="model/ILogObject" />
class MLog  {
    array: Array<string>;
    logOptions: Model.ILogOptions;
    
    constructor(logOptions : Model.ILogOptions) {
        this.array = [];
        this.logOptions = logOptions;
    }
    
    consoleAvailable() {
        return (console && console.log);
    }
    
    Log(object : Model.ILogObject) {
        if(!this.logOptions) return;
        var logMsg = `${new Date()} || ${object.Type} || ${object.Module} || ${object.Message}`;
        if(this.consoleAvailable && this.logOptions.On) {
            console.log(logMsg);
        }
        this.array.push(logMsg);
    }
    
    getOutput() {
        return this.array.join("\n");
    }
} 