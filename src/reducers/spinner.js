export default function(state = {spinner: false}, action) {
    switch(action.type) {
        case 'START_SPINNER':
            return {
                spinner: action.spinner,
            };
        case 'STOP_SPINNER':
            return {
                spinner: action.spinner,
            };
        default:
            return state;
    }
}