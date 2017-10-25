// import axios from 'axios';
// import SERVER_ADDRESS from '../config'

export const enterTheChat = (logs) => {
  return {
    type:'ENTER_THE_CHAT',
    payload: logs
  }
}

export const createdTheLog = (log) => {
  console.log(log)
  return {
    type: 'CREATED_THE_LOG',
    payload: log
  }
}

export const resetTheReducerLogs = () => {
  console.log()
  return {
    type: 'RESET_THE_LOGS'
  }
}

export const enterTheNewUser = (user) => {
  return {
    type:'ENTER_THE_NEW_USER',
    payload: user
  }
}