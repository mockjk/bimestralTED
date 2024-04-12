export function createQueue(size = 10){
    return [...new Array(size)]
}

export function insertQueue(queue, data){
    if(queue.includes(undefined)){
        
        const index = queue.findIndex(element => element === undefined)
        queue[index] = data
        console.log(`"[${data}]" Foi inserido na fila, na posição -> "[${index}]"`)
        console.log(queue)
        return
    }

    console.error("Não foi possível adicionar item a fila, ela está cheia!")
    return
}

export function removeQueue(queue){
    if(queue[0] !== undefined){
        
        let removedData = queue[0]

        for(let i = 1; i < queue.length; i++){
            queue[i-1] = queue[i]
        }

        queue[queue.length - 1] = undefined

        console.log(`Item removido da fila ${removedData}`)
        return
    }

    console.error("A fila está vazia")
    return
}

export function clearQueue(queue){
    if(queue !== undefined){

        for(let i = 1; i < queue.length; i++){
            queue[i] = undefined
        }
    
        console.log(`A fila está limpa e o unico dado que temos(Primeira posição) é \n ${queue[0]}`)
        return
    }

    console.error("A fila ja está vazia") 
    return
}

export function showQueue(queue){
    
    let emptySpaces = 0
    let subQueue = []
   
    
    for(let i = 0; i < queue.length; i++){
        if(queue[i] === undefined){
            emptySpaces += 1
        }
        if(queue[i] !== undefined){
            subQueue.push(queue[i])
        }
    }

    let sizeQueue = queue.length
    let usedSpaces = sizeQueue - emptySpaces

    return{
        queue: queue,
        emptySpaces: emptySpaces,
        usedSpaces: usedSpaces,
        size: sizeQueue,
        subQueue: subQueue
    }
}