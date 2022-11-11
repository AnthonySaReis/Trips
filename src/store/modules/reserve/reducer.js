import produce from "immer";


export default function reserve(state = [], action) {
    switch (action.type) {
        case 'ADD_RESERVE_SUCCESS':
            return produce(state, draft => {
               
                //adicionando no array
                draft.push(action.trip);

            });

        case 'REMOVE_RESERVE':
            return produce(state, draft=>{
            
            //recebendo id da função handleRemove
            const tripIndex = draft.findIndex(trip => trip.id === action.id);
            
            if(tripIndex>=0){
                
                draft.splice(tripIndex, 1);
                
            }

            });
    

        case 'UPDATE_RESERVE_SUCCESS': {
            
            return produce(state, draft=>{
            //buscou o produto clickado
            const tripIndex = draft.findIndex(trip => trip.id === action.id);
            //localiza e troca pelo que está mandando, com +1 ou -1
            if(tripIndex>=0){
                draft[tripIndex].amount = Number(action.amount)
            }
        
            });
        }
        default:
            return state;
    }
}