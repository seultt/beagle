import axios from 'axios';
import SERVER_ADDRESS from '../config'

export const getChatList = (per_page) => {
  return (dispatch) => {
    // getChatList 데이터 요청-로딩부분
    dispatch({
      type: 'GET_CHAT_LIST_REQUEST',
    })
    
    // 데이터 가져오는 부분
    axios.get(`${SERVER_ADDRESS}/api/chat-list?${per_page}`, {
      // CORS 문제 해결하려면 아래 header를 넣어줘야한다.
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(
        (res) => {
          console.log('무한스크롤 데이터 들어왔나');
          dispatch({
            type: 'GET_CHAT_LIST_SUCCESS',
            payload: res.data,
          })
        }
      )
      .then(
        (res) => {
          dispatch({
            type: 'GET_FILTERING_CHAT_LIST',
            payload: res,
          })
        }
      )
      .catch(
        (error) => {
          dispatch({
            type: 'GET_CHAT_LIST_FAILED',
            payload: console.log(error),
          }) 
        }
      )
  }
}