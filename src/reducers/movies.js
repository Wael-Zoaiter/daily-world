export default function(state = [], action) {    
    switch(action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.movies
            };
        default:
            return state;
    }
}