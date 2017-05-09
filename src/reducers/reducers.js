const InitialState = {
    ui: {
        text: ''
    },
    data: {
        userList: null,
        isUserLoading: false,
        error: false,
        showRepos: null
    }
};

export default function takeApp(state = InitialState, action) {
    switch (action.type) {
        case 'GITHUB_TAKE_USER_REQUEST':
            return {
                ...state,
                data: {
                    ...state.data,
                    userList: action.payload.userList
                }
            };
        case 'GITHUB_IS_USER_LOADING':
            return {
                ...state,
                data: {
                    ...state.data,
                    isUserLoading: action.payload.isUserLoading
                }
            };
        case 'GITHUB_CALL_FAIL':
            return {
                ...state,
                data: {
                    ...state.data,
                    error: action.payload.error
                }
            };
            case 'SHOW_REPOS_NAME':
            return {
                ...state,
                data: {
                    ...state.data,
                    showRepos: action.payload.showRepos
                }
            };
        default:
            return state;
    }
}


/*
function initialState() {
    return {
        user: "",
        repos: [],
        isLoader: false,
        error: false
    };
}

export default function takeApp(state, action) {
    const previousState = (state ? state : initialState());
    switch (action.type) {
        case 'GITHUB_TAKE_USER_REQUEST':
            return takeUser(previousState, action);

        case 'GITHUB_USER_CHANGED':
            return userChanged(previousState, action);

        case 'GITHUB_IS_LOADING':
            return isLoading(previousState, action);

        default:
            return previousState;
    }
}
*/