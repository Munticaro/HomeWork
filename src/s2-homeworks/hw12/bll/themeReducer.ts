const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: SetThemeIdAction): typeof initState=> { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdAction => ({ type: 'SET_THEME_ID', id }) // fix any

type SetThemeIdAction = {
    type: 'SET_THEME_ID'
    id: number
};