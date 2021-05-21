export const initstate=[
    
]

export const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:Math.random(),title:action.payload.title,content:action.payload.content}]
        case "REMOVE":
            return state.filter((note)=>action.payload !== note.id)
        case "UPDATE":
            return state.map((record)=>{
                if(action.payload.id==record.id){
                    return action.payload
                }
                else{
                    return record
                }
            })
        default:
            return state
    }    
}