import React from 'react'

const RegisterContext = React.createContext({
  nameInput: '',
  activeTopic: '',
  isRegisterBtn: false,
  onChangeName: () => {},
  onSelectTopic: () => {},
  onRegisterNow: () => {},
  RegisterNowBtn: false,
  showErrorMsg: false,
  onShowErrorMsg: () => {},
})

export default RegisterContext
