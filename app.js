import { clearQueue, createQueue, insertQueue, removeQueue, showQueue } from "./function.js";

const andorinha = createQueue(5)

for(let i = 0; i < andorinha.length; i++){
    insertQueue(andorinha, `teste + ${i}`)
}

