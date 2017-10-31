import axios from 'axios'
import SERVER_ADDRESS from '../config'

const token = localStorage.getItem('jwtToken')

export const getMyRooms = (user_id) => {
  return (dispatch) => {

    dispatch({
      type: 'PROFILE_ROOMS_REQUEST'
    })

    axios.get(`${SERVER_ADDRESS}/api/profile?id=${user_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      console.log('요청왔어여', res.data[1])

      dispatch({
        type: 'PROFILE_ROOMS_SUCCESS',
        payload: res.data[1]
      })
    })
    .catch(e => console.log('failed!!!!', e.message))
  }
}
// delete루트가 생길 경우 사용할 액션 크리에이터 
export const deleteTheRoom = (room_id) => {
  return (dispatch, getState) => {

    return axios.delete(`${SERVER_ADDRESS}/api/profile/delete/${room_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(roomId => {
      console.log(roomId)

      const roomList = getState().myRooms
      const newRoomList = roomList.map(rooms => {
        return rooms.filter(room => {
          return room.id !== roomId.data.id
        })
      })

      dispatch({
        type: 'PROFILE_ROOM_DELETE',
        payload: newRoomList
      })
    })
    .catch(e => console.log(e.message))
  }
}

export const exitTheRoom = (room_id) => {
  return (dispatch, getState) => {
    
    return axios.delete(`${SERVER_ADDRESS}/api/profile/delete/${room_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      // res에는 룸 넘버
      console.log('방나오기 성공', res)

      const roomList = getState().myRooms
      console.log('겟스테이트', roomList)
      // const newRoomList = roomList.map(rooms => {
      //   // room의 id와 res의 id가 다른 값만 반환 
      //   return rooms.filter(room => {
      //     return room.id !== parseInt(res.data.id)
      //   })
      // })
      const newRoomList = roomList.filter(room => {
        return room[1].id !== parseInt(res.data.id)
      })
      console.log('뉴룸리스트', newRoomList)
    
      dispatch({
        type: 'PROFILE_ROOM_DELETE',
        payload: newRoomList
      })

    })
    .catch(e => {
      console.log(e.message)
    })
  }
}

// 임시 액션 크리에이터, 원 루트가 완성되면 삭제 
// 유저아이디를 가지고 소속되어있는 모든 방의 아이디를 가져옴 
export const getRooms = () => {
  return (dispatch) => {
    return axios.get(`${SERVER_ADDRESS}/api/profile/rooms`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(rooms =>{
      // roomIds는 배열로 들어온다.
      console.log('rooms', rooms)
      dispatch({
        type: 'PROFILE_ROOMS',
        payload: rooms.data
      })
    })
    .catch(e => console.log('roomsFailed', e.message))
  }
}