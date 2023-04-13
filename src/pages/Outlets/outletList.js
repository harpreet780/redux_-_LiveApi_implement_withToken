import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fecthOutletList, updateOutletApi } from '../../api/allApi';
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { OUTLET_LIST } from '../../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';

const OutletList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showList = useSelector((state) => state.outletList)

    const getOutletList = () => {
        return fecthOutletList().then((res) => {
            dispatch({ type: OUTLET_LIST, payload: res.data.data })
        }).catch((error) => {
            console.log(error)
            alert("something went wrong")
        })
    }
    const deleteOutlet = (_id) => {
        return updateOutletApi({
            _id: _id,
            isDeleted: true
        }).then((res) => {
            let datalist = [res.data.data];
            datalist.filter((item) => item._id === _id).map((i) => {
                return i.isDeleted= true
            })
            console.log(datalist, "isDelete = true")
        }).catch((error) => {
            console.log(error)
            alert("something went wrong")
        })
    }

    useEffect(() => {
        getOutletList()
    }, [])


    return (
        <div>
            <div className='p-3'>
                <h2 className='text-center'>Outlets List</h2>
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
                        <th>Email</th>
                        <th>Description</th>
                        <th>address</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {showList?.map((obj) => {
                            return (
                                <tr>
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.address}</td>
                                    <td>
                                        <tr className="action-icons">
                                            <td className="activity">
                                                <button onClick={() => navigate("/outletsDetail",
                                                    {
                                                        state: obj
                                                    }
                                                )}>
                                                    <BsFillEyeFill />
                                                </button>
                                            </td>
                                            <td className="edit">
                                                <button onClick={() => navigate("/editOutlets",
                                                    {
                                                        state: obj
                                                    }
                                                )}>
                                                    <MdModeEditOutline />
                                                </button>
                                            </td>
                                            <td className="delete">
                                                <button onClick={() => {
                                                    deleteOutlet(obj._id)
                                                }}>
                                                    <RiDeleteBin5Line />
                                                </button>
                                            </td>
                                        </tr>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OutletList;