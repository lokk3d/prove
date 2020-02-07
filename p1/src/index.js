import "./main.css"
import {log, errorLog, warningLog, setDebugOutput, DEBUG_OUTPUT_OPTIONS} from "./logger.js"

setDebugOutput(DEBUG_OUTPUT_OPTIONS.screen)

log("Prova debug")
errorLog("Prova errore")
warningLog("Prova warning")

if(module && module.hot) module.hot.accept() //abilita l'hot module replacement sui diversi moduli