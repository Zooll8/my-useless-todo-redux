export default function(state=[],action) {
    switch(action.type){
        case 'ADD_TODO':
            return [...state,action.payload]
        case 'DELETE_TODO':
            return state.filter(item => {
                if (item.id!==action.payload) {
                    return item
            }});
        case 'TOGGLE_TODO':
            return state.map(item=>{
                if (item.id===action.payload) {
                    let small=item
                    small.completed=!item.completed
                    return small
                } else {
                    return item
                }
            })
        default:
            return state;
    }
    
}