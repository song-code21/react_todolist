export const ADD_TO_LIST = 'ADD_TO_LIST';
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const CHECK_DONE = 'CHECK_DONE'

export const addToList = (text, id) => {
    // let nextId = 1;
    return {
        type: ADD_TO_LIST,
        todo: {
            id: id,
            text,
            done: false
        }
    }
}

export const removeFromList = (id) => {
    return {
        type: REMOVE_FROM_LIST,
        todo: {
            id
        }
    }
}

export const checkDone = (id, done) => {
    return {
        type: CHECK_DONE,
        todo: {
            id: id,
            done: done
        }
    }
}