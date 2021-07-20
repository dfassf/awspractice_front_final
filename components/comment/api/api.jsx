/*
    비동기통신에 대한 내용을 넣는공간
*/

export const getComment = async (dispatch) => {
    dispatch({type:'GET_COMMENT'})
    try{
        const response = await fetch('http://13.209.80.59/api')
        const data = await response.json()
        
        dispatch({type:'GET_COMMENT_SUCCESS',payload:data})
    } catch (e) {
        dispatch({ type:'GET_COMMENT_ERROR',payload:e })
    }
}