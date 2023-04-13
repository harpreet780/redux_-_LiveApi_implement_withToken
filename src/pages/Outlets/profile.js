import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Label } from 'reactstrap';
import { UPDATE_PROFILE } from '../../redux/actions/action';
import { updateProfileApi } from '../../api/allApi';

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const editProfile = useSelector((state) => state.loginState);

    const updateProfileData = (_id) => {
        updateProfileApi({
            name: editProfile?.name,
            accountName: editProfile?.accountName,
            lastLogin: "",
            _id: editProfile?._id,

        }).then((res) => {
            dispatch({type: UPDATE_PROFILE, payload: res.data})

        }).catch((error) => {
            console.log(error)
            alert("something went wrong")
        })
    }

    return (
        <div className='primary-bg'>
            <div className='d-flex justify-content-end'>
                <button className='submitBtn m-0' onClick={() => {
                    localStorage.clear();
                    navigate('/login')
                }}>
                    Logout
                </button>
            </div>
            <div className="pageWrapper">
                <div className="formWrap">
                    <h2 className='text-center'>Profile Update</h2>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        className="input"
                        value={editProfile?.name}
                        onChange={(e)=> dispatch({type: UPDATE_PROFILE, payload: {value: e.target.value , name: "name"}})}
                    />
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        className="input"
                        value={editProfile?.email}
                    />
                    <Label>Password:</Label>
                    <Input
                        type="password"
                        name="password"
                        className="input"
                        value={editProfile?.password}
                    />
                    <Label>Account Name:</Label>
                    <Input
                        type="text"
                        name="accountName"
                        className="input"
                        value={editProfile?.accountName}
                        onChange={(e)=> dispatch({type: UPDATE_PROFILE, payload: {value: e.target.value , name: "accountName"}})}
                    />
                    <Label>user Account Name:</Label>
                    <Input
                        type="text"
                        name="userAccountName"
                        className="input"
                        value={editProfile?.userAccountName}
                    />
                    <Label>user Id:</Label>
                    <Input
                        type="text"
                        name="userId"
                        className="input"
                        value={editProfile?.userId}
                    />
                    <Label>Id:</Label>
                    <Input
                        type="text"
                        name="id"
                        className="input"
                        value={editProfile?._id}
                    />
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='submitBtn profileBtn' onClick={(_id) => {
                            updateProfileData(_id)
                        }}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;