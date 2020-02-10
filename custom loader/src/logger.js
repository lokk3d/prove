let DEBUG = true
let DEBUG_OUTPUT = "console"

export const DEBUG_OUTPUT_OPTIONS = {
    console: "console",
    screen: "screen",
}

export function setDebugOutput(option){
    if(option === DEBUG_OUTPUT_OPTIONS.console || 
        option === DEBUG_OUTPUT_OPTIONS.screen ){
            DEBUG_OUTPUT = option
        }
}

export function log(logString){
    let string = "Log - D: "+ logString
    logger(string)    
}

export function errorLog(logString){
    let string = "Log - E: "+ logString
    logger(string)    
}

export function warningLog(logString){
    let string = "Log - W: "+ logString
    logger(string)    
}


function logger(string){
    if(DEBUG){
        if(DEBUG_OUTPUT === "console"){
            console.log(string);
        }else if(DEBUG_OUTPUT === "screen"){
            document.write(string+"<br/>")
        }
    }
}