import axios from 'axios';
import SERVER_ADDRESS from '../config'

export const postCreateToDB = (create, callback) => {
  return (dispatch) => {
    const token = localStorage.getItem('jwtToken')

    dispatch({
      type: 'GET_A_ROOM_REQUEST',
    })
    axios.post(`${SERVER_ADDRESS}/api/chat-rooms`, create, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      console.log(res.data)

      axios.get(`${SERVER_ADDRESS}/api/chat-rooms/${res.data.id}/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        // console.log(res)
  
         dispatch({
          type: 'GET_A_ROOM_SUCCESS',
          payload: res
        })
      })
      .catch(e => console.log(e.message))

      callback(res.data.id)
    })
  }
}

export const getChatRoomFromDB = ({id, user_id}) => {
  return (dispatch) => {
    const token = localStorage.getItem('jwtToken')

    dispatch({
      type: 'GET_A_ROOM_REQUEST',
    })

    axios.get(`${SERVER_ADDRESS}/api/chat-rooms/${id}/?user_id=${user_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => {
      // console.log(res)

       dispatch({
        type: 'GET_A_ROOM_SUCCESS',
        payload: res
      })
    })
    .catch(e => console.log(e.message))
  }
}

export const enterTheNewUser = (user) => {
  return {
    type:'ENTER_THE_NEW_USER',
    payload: user
  }
}

export const resetTheReducerRoom = () => {
  // console.log('reset the logs!!')
  return {
    type: 'RESET_THE_ROOM'
  }
}

export const userLikeTheCreator = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem('jwtToken')
    
    dispatch({
      type: 'LIKE_REQUEST'
    })
    axios.patch(`${SERVER_ADDRESS}/api/chat-rooms/${id}/like`)
    .then(res => {
      dispatch({
        type: 'LIKE_SUCCESS',
        payload: res.ok
      })
    })
    .catch(e => console.log('like Failed', e.message))    
  }
}
// export const userLikeTheCreator = (id) => {
//   return {
//     type: 'LIKE_SUCCESS'
//   }
// }