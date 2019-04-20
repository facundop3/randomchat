import React from 'react'
import Swal from 'sweetalert2'
import API from '../API'

const Login = props => {


  const sweetForm = Swal.fire({
    title: 'Input username',
    input: 'text',
    inputPlaceholder: 'Enter your username'
  }).then(({value:username})=> {
    API.registerUser(username)
    props.setHideLogin(Boolean(username))
  })
  return <sweetForm />
}

export default Login