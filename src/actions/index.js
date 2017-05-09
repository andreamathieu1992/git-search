import axios from 'axios';
const API_URL = 'https://api.github.com/users/';

export const take = (value) => {
    return (dispatch) => {
        let url = API_URL + value;
        axios.get(url)
            .then((result) => {
                const { name, avatar_url, public_repos } = result.data;
                let user = {
                    'Name ': name,
                    'Avatar ': avatar_url,
                    'Repos ': public_repos
                };
                dispatch(login(true));

                if (user.public_repos != 0) {
                    let url2 = API_URL + value + '/repos';
                    axios.get(url2)
                        .then((result) => {
                            let Repos = [];
                            for (let repo of result.data) {
                                Repos.push({
                                    'name': repo.name,
                                    'star': repo.stargazers_count
                                });
                            }
                            user.public_repos = Repos;
                            console.log(url2); //Controlla URL OK
                            dispatch(list(user));
                            console.log(user);
                            console.log(Repos);
                        })
                        .catch((errore) => {
                            dispatch(fail(true));
                        })
                        .catch((errore) => {
                            dispatch(fail(true));
                        });
                }
            });
    };
};




function login(isUserLoading) {
    return {
        type: 'GITHUB_IS_USER_LOADING',
        payload: {
            isUserLoading: isUserLoading
        }
    };
}

function list(userList) {
    return {
        type: 'GITHUB_TAKE_USER_REQUEST',
        payload: {
            userList: userList
        }
    };
}

function fail(error) {
    return {
        type: 'GITHUB_CALL_FAIL',
        payload: {
            error: error
        }
    };
}

