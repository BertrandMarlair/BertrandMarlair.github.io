const initalState = {
    open: false
}

export default function menuConfig(state = initalState, action) {
    switch (action.type) {
        case 'TOOGLE_MENU':
            return {
                ...state,
                open: action.payload
            }
        default:
            return state
    }
}