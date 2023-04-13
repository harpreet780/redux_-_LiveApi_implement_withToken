import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Label } from 'reactstrap';
import { OUTLET_LOGIN } from '../../redux/actions/action';
import { outletLoginApi } from '../../api/allApi';

const OutletLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
    const [outletLogin, setOutletLogin] = useState({
        email: "",
        password: ""
      })

  const handleLoginDetails = (e) => {
    setOutletLogin({ ...outletLogin, [e.target.name]: e.target.value })
  }

  const handleOutletSubmision=()=>{
    return outletLoginApi(outletLogin).then((res) => {
       dispatch({type: OUTLET_LOGIN, payload: res.data})
       localStorage.setItem('outletToken', res.data.accessToken);
       localStorage.setItem('outletId', res.data._id);
       localStorage.setItem("outletUserId", res.data.userId)
       navigate('/addResources')
    }).catch((error) => {
        console.log(error)
        alert("fill the correct values!!")
    })
  }

  return (
    <div className='primary-bg'>
      <div className="pageWrapper">
        <div className="formWrap">
          <h2 className='text-center'>Outlet Login Screen</h2>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            className="input"
            value={outletLogin.email}
            onChange={(e) => handleLoginDetails(e)}
          />
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            className="input"
            value={outletLogin.password}
            onChange={(e) => handleLoginDetails(e)}
          />
          <div className='d-flex justify-content-center align-items-center'>
            <button className='submitBtn profileBtn'
              onClick={(e) => handleOutletSubmision(e)}
            >
              Login Outlet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutletLogin;