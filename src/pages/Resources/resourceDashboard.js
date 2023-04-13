import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Label } from 'reactstrap';
import { ADD_RESOURCES } from '../../redux/actions/action';
import { addResourcesApi } from '../../api/allApi';

const ResourceDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [addResources, setAddResources] = useState({
        name: "",
        description: "",
        phoneNumber: "",
        phoneCode: ""
    })

    const handleResources = (e) => {
        setAddResources({ ...addResources, [e.target.name]: e.target.value })
    }

    const handleResourcesData = () => {
        setAddResources({
            name: "",
            description: "",
            phoneNumber: "",
            phoneCode: ""
        })

        return addResourcesApi(addResources).then((res) => {
            dispatch({ type: ADD_RESOURCES, payload: res.data })
        }).catch((error) => {
            console.log(error)
            alert("something went wrong!")
        })
    }

    return (
        <div className='p-3'>
            <div className='d-flex justify-content-between'>
            <div>
               <button className='submitBtn m-0' onClick={() => {
                    navigate('/resourcesList')
                }}>
                    All Resources 
                </button>
               </div>
               <div>
               <button className='submitBtn m-0' onClick={() => {
                    localStorage.clear();
                    navigate('/outletLogin')
                }}>
                    Logout
                </button>
               </div>
            </div>
            <div className="pageWrapper">
                <div className="formWrap">
                    <h2 className='text-center'>Add Resources</h2>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        className="input"
                        value={addResources.name}
                        onChange={(e) => handleResources(e)}
                    />

                    <Label>Description:</Label>
                    <Input
                        type="textarea"
                        name="description"
                        className="input"
                        value={addResources.description}
                        onChange={(e) => handleResources(e)}
                    />
                    <Label>Phone:</Label>
                    <Input
                        type="number"
                        name="phoneNumber"
                        className="input"
                        value={addResources.phoneNumber}
                        onChange={(e) => handleResources(e)}
                    />
                    <Label>Phone Code:</Label>
                    <Input
                        type="text"
                        name="phoneCode"
                        className="input"
                        value={addResources.phoneCode}
                        onChange={(e) => handleResources(e)}
                    />
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className='submitBtn profileBtn'
                            onClick={(e) => {
                                handleResourcesData(e)
                            }}
                        >
                            Add Resources
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceDashboard;