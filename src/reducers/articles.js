export default function(state = [], action) {
    switch(action.type) {
        case 'GET_LATEST':
            return {
                ...state,
                latest: action.news
            };
        default:
            return state;
    }
}