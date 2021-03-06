const INITIAL_DATA = {
  isLoading: false,
  isError: false,
  currentUsers: [{
    user_id: 0,
    nickname: 'loading....',
    profile_photo: ''
  }],
  // chattingLog: [
  //   {
  //     user_id: '',
  //     nickname: '',
  //     photo: '',
  //   }
  // ],
  chattingInfo: {
    id: 0,
    name: '',
    description: '',
    photo: '',
    start_at: '',
    city_id: 1,
    creator: 0
  },
  liked: false,
}

const getTheRoom = (state = INITIAL_DATA, action = null) => {
  if (action.type === 'GET_A_ROOM_REQUEST')  {
      
    return {
      ...state,
      isLoading: true,
    } 
  }

  if (action.type === 'GET_A_ROOM_SUCCESS')  {
     
    return {
      ...state,
      isLoading: false,
      currentUsers: action.payload.data[0],
      chattingInfo: {
        id: action.payload.data[1].id,
        name: action.payload.data[1].name,
        description: action.payload.data[1].description,
        photo: action.payload.data[1].photo,
        start_at: action.payload.data[1].start_at,
        city_id: action.payload.data[1].city_id,
        creator: action.payload.data[1].creator
      }
    } 
  }
  if (action.type === 'ENTER_THE_NEW_USER')  {
     
    return {
      ...state,
      isLoading: false,
      currentUsers: [...state.currentUsers, action.payload],
    } 
  }

  if (action.type === 'EXIT_THE_USER') {
    
    return {
      ...state,
      isLoading: false,
      currentUsers: action.payload
    } 
  }

  if (action.type === 'RESET_THE_ROOM') {
    
    return {
      ...state,
      isLoading: false,
      currentUsers: [{
        user_id: 0,
        nickname: 'loading....',
        profile_photo: ''
      }],
      chattingInfo: {
        id: 0,
        name: '',
        description: '',
        photo: '',
        start_at: '',
        city_id: 1,
        creator: 0
      }
    } 
  }

  if(action.type === 'LIKE_REQUEST'){
    return {
      ...state,
    }
  }

  if(action.type === 'LIKE_SUCCESS'){
    return {
      ...state,
      liked: !state.liked,
    }
  }

  return {
    ...state,
  }
}


export default getTheRoom;
