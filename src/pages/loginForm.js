import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Label } from 'reactstrap'
import { SUBMIT_LOGIN_DATA } from '../redux/actions/action'
import { loginApi } from '../api/allApi'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const handleLoginDetails = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleOutput = () => {
    loginApi(loginData).then((res) => {
      if (res.status === 200 || res.status === 201) {
        dispatch({ type: SUBMIT_LOGIN_DATA, payload: res.data })
        localStorage.setItem('accessToken', res.data.accessToken)
        localStorage.setItem('userId', res.data._id)
        navigate('/dashboard')
      }
    }
    ).catch((error) => {
      console.log(error)
      alert("something went wrong")
    })
  }

  return (
    <div className='primary-bg'>
      <div className="pageWrapper">
        <div className="formWrap">
          <h2 className='text-center'>Login Registeration</h2>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            className="input"
            value={loginData.email}
            onChange={(e) => handleLoginDetails(e)}
          />
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            className="input"
            value={loginData.password}
            onChange={(e) => handleLoginDetails(e)}
          />
          <div className='d-flex justify-content-center align-items-center'>
            <button className='submitBtn profileBtn'
              onClick={(e) => handleOutput(e)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm