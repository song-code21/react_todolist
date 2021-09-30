export const Add_To_List = 'Add_To_List';
export const Remove_From_List = 'Remove_From_List';

export const addToList = (text, id) => {
    return {
        type: Add_To_List,
        item: {
            id: id,
            checked : false, 
            text
        }
    }
}

export const removeFromList = (id) => {
    return {
        type: Remove_From_List,
        payload: {
            id
        }
    }
}