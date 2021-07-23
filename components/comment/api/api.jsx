/*
    비동기통신에 대한 내용을 넣는공간
*/

export const getComment = async (dispatch) => {
    dispatch({type:'GET_COMMENT'})
    try{
        const response = await fetch('http://api.shinswrld.com/api/comment')
        const data = await response.json()
        
        dispatch({type:'GET_COMMENT_SUCCESS',payload:data})
    } catch (e) {
        dispatch({ type:'GET_COMMENT_ERROR',payload:e })
    }
}

export const postComment = async (dispatch, body) => {
    dispatch({type:'POST_COMMENT'})
    try{
        console.log('포스트코멘트')
        const options = {
            method: 'POST',
            headers:{
                'Content-type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(body)
        }
        console.log('바디',body)
        const response = await fetch('http://api.shinswrld.com/api/comment',options)
        const data = await response.json()
        const result = {...data,date:data.updatedAt.substr(0,10)}
        console.log('리스폰스',response)
        console.log('데이터',data)
        console.log('리설트',result)
        dispatch({type:'POST_COMMENT_SUCCESS',payload:result})
    } catch (e) {
        dispatch({type:'POST_COMMENT_ERROR'})
    }
}
export const patchComment = async (dispatch) => {}
export const deleteComment = async (dispatch) => {}