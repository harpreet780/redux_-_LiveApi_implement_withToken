import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Label } from 'reactstrap';
import { ADD_OUTLETS } from '../../redux/actions/action';
import { addOutlets } from '../../api/allApi';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const outlets = useSelector((state) => state.addOutletsValue);

    const handleOutletsData = () => {
        addOutlets({
            name: outlets.name,
            email: outlets.email,
            password: outlets.password,
            phoneNumber: outlets.phoneNumber,
            description: outlets.description,
            address: outlets.address,
        }).then((res) => {
            console.log(res.data)
            navigate('/outlets')
        }).catch((error) => {
            console.log(error)
            alert("something went wrong")
        })
    }

    return (
        <div className='p-3'>
            <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='submitBtn '
                            onClick={() => navigate('/outletLogin')}
                        >
                            Outlet Login
                        </button>
                    </div>
                <div className='d-flex justify-content-center'>
                <button className='submitBtn m-0' onClick={() => navigate('/profile')}>Profile</button>
                <button className='submitBtn m-0' onClick={() => {
                    localStorage.clear();
                    navigate('/login')
                }}>
                    Logout
                </button>
                </div>
            </div>
            <div className="pageWrapper">
                <div className="formWrap">
                    <h2 className='text-center'>Add Outlets</h2>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        className="input"
                        value={outlets.name}
                        onChange={(e) => dispatch({ type: ADD_OUTLETS, payload: { value: e.target.value, name: "name" } })}
                    />
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        className="input"
                        value={outlets.email}
                        onChange={(e) => dispatch({ type: ADD_OUTLETS, payload: { value: e.target.value, name: "email" } })}
                    />
                    <Label>Password:</Label>
                    <Input
                        type="password"
                        name="password"
                        className="input"
                        value={outlets.password}
                        onChange={(e) => dispatch({ type: ADD_OUTLETS, payload: { value: e.target.value, name: "password" } })}
                    />
                    <Label>Phone:</Label>
                    <Input
                        type="number"
                        name="phoneNumber"
                        className="input"
                        value={outlets.phoneNumber}
                        onChange={(e) => dispatch({ type: ADD_OUTLETS, payload: { value: e.target.value, name: "phoneNumber" } })}
                    />
                    <Label>Description:</Label>
                    <Input
                        type="textarea"
                        name="description"
                        className="input"
                        value={outlets.description}
                        onChange={(e) => dispatch({ type: ADD_OUTLETS, payload: { value: e.target.value, name: "description" } })}
                    />
                    <Label>Address:</Label>
                    <Input
                        type="textarea"
                        name="address"
                        className="input"
                        value={outlets.address}
                        onChange={(e) => dispatch({ type: ADD_OUTLETS, payload: { value: e.target.value, name: "address" } })}
                    />
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='submitBtn profileBtn'
                            onClick={(e) => {
                                handleOutletsData(e)
                            }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;