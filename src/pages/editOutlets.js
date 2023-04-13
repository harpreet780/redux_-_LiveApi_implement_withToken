import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {  OUTLET_DETAIL, UPDATE_OUTLETS } from '../redux/actions/action';
import { Input, Label } from 'reactstrap';
import { updateOutletApi } from '../api/allApi';

const EditOutlets = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.singleDetailOutlet)
  console.log(edit, "singleDetailOutlet")
  let location = useLocation();
  

  const updateOutletData = (_id) => {
    updateOutletApi({
      name: edit.name,
      accountName: edit.accountName,
      phoneNumber: edit.phoneNumber,
      description: edit.description,
      address: edit.address,
      _id: edit?._id,

    }).then((res) => {
      dispatch({ type: UPDATE_OUTLETS, payload: res.data })
      navigate('/outlets')

    }).catch((error) => {
      console.log(error)
      alert("something went wrong")
    })
  }


  useEffect(() => {
    dispatch({ type: OUTLET_DETAIL, payload: location?.state })
  }, [])

  return (
    <div className='m-5'>
      <div className='d-flex justify-content-end'>
        <button className='submitBtn m-0' onClick={() => {
          navigate('/outlets')
        }}>
          Back
        </button>
        <button className='submitBtn m-0' onClick={() => {
          localStorage.clear();
          navigate('/login')
        }}>
          Logout
        </button>
      </div>
      <div className="formWrap">
        <h2 className='text-center'>Edit Outlets</h2>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          className="input"
          value={edit?.name}
          onChange={(e) => dispatch({ type: UPDATE_OUTLETS, payload: { value: e.target.value, name: "name" } })}
        />
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          className="input"
          value={edit?.email}
          onChange={(e) => dispatch({ type: UPDATE_OUTLETS, payload: { value: e.target.value, name: "email" } })}
        />
        <Label>Password:</Label>
        <Input
          type="password"
          name="password"
          className="input"
          value=""
          onChange={(e) => dispatch({ type: UPDATE_OUTLETS, payload: { value: e.target.value, name: "password" } })}
        />
        <Label>Phone:</Label>
        <Input
          type="number"
          name="phoneNumber"
          className="input"
          value={edit?.phoneNumber}
          onChange={(e) => dispatch({ type: UPDATE_OUTLETS, payload: { value: e.target.value, name: "phoneNumber" } })}
        />
        <Label>Description:</Label>
        <Input
          type="textarea"
          name="description"
          className="input"
          value={edit?.description}
          onChange={(e) => dispatch({ type: UPDATE_OUTLETS, payload: { value: e.target.value, name: "description" } })}
        />
        <Label>Address:</Label>
        <Input
          type="textarea"
          name="address"
          className="input"
          value={edit?.address}
          onChange={(e) => dispatch({ type: UPDATE_OUTLETS, payload: { value: e.target.value, name: "address" } })}
        />
        <div className='d-flex justify-content-center align-items-center'>
          <button className='submitBtn profileBtn'
            onClick={(_id) => {
              updateOutletData( _id)
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditOutlets