import {getPosts, getUser} from "../requests/JSONPlaceholder";
import _ from "lodash";

const fetchPosts =  () => async dispatch => {
        const posts = await getPosts();

        dispatch({
            type: 'FETCH_POSTS',
            payload: posts.data
        })
}


const fetchUser =  (id) => async dispatch => {
    const user = await getUser(id);

    dispatch({
        type: 'FETCH_USERS',
        payload: user.data
    })
}

const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const uniqueIds = _.uniq(_.map(getState().posts, 'userId'));
    uniqueIds.forEach(id => {
        dispatch(fetchUser(id))
    })

    /*_.chain(getState().posts)
        .map( 'userId')
        .uniq()
        .forEach(id => {
            dispatch(fetchUser(id))
        })
        .value();*/
}


export {fetchPosts, fetchUser, fetchPostsAndUsers}


/*const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch)
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const user = await getUser(id);

    dispatch({
            type: 'FETCH_USERS',
            payload: user.data
        }
    )
});*/