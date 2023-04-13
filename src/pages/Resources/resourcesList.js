import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RESOURCE_LIST } from '../../redux/actions/action';
import { MdModeEditOutline } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsFillEyeFill } from 'react-icons/bs';
import { resourcesListApi } from '../../api/allApi';

const ResourcesList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const resources = useSelector((state) => state.resourcesList)
    console.log(resources,"reeee")

    const getResourceList = () => {
        return resourcesListApi().then((res) => {
            dispatch({ type: RESOURCE_LIST, payload: res.data.data })
        }).catch((error) => {
            console.log(error)
            alert("something went wrong")
        })
    }  

    useEffect(() => {
        getResourceList()
    }, [])

  return (
    <div>
            <div className='p-3'>
                <h2 className='text-center'>Resources List</h2>
                <div className='d-flex justify-content-between'>
                   <div>
                    <button className='submitBtn m-0' onClick={() => {
                       navigate('/outletLogin')
                    }}>
                        Login Outlets 
                    </button>
                    </div> 
                    <div>
                    <button className='submitBtn m-0' onClick={() => {
                        localStorage.clear();
                        navigate('/login')
                    }}>
                        Logout
                    </button>
                    </div> 
                </div>
                <table className='table mt-5'>
                    <thead>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Phone Number</th>
                    </thead>
                    <tbody>
                        {resources?.map((obj) => {
                            return (
                                <tr>
                                    <td>{obj.name}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.phoneNumber}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default ResourcesList