import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OUTLET_DETAIL } from '../../redux/actions/action';

const OutletDetailPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.singleDetailOutlet)
    let location = useLocation();
    let detailOutlet = []
    detailOutlet.push(detail)

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
            <h2 className='text-center'>Outlets Detail</h2>
            {detailOutlet?.map((show) => {
                return (
                    <div className='printBox m-auto'>
                        <div className='mb-2 d-flex justify-content-between'>
                           <p> <b>Id: </b></p>
                            <p>{show?._id}</p>
                        </div>
                        <div className='mb-2 d-flex justify-content-between'>
                           <p> <b>Name: </b></p>
                            <p>{show?.name}</p>
                        </div>
                        <div className='mb-2 d-flex justify-content-between'>
                           <p> <b>Email: </b></p>
                            <p>{show?.email}</p>
                        </div>
                        <div className='mb-2 d-flex justify-content-between'>
                           <p> <b>Address: </b></p>
                            <p>{show?.address}</p>
                        </div>
                        <div className='mb-2 d-flex justify-content-between'>
                           <p> <b>Description:</b></p>
                            <p>{show?.description}</p>
                        </div>
                        <div className='mb-2 d-flex justify-content-between'>
                           <p> <b>Email: </b></p>
                            <p>{show?.email}</p>
                        </div>
                        <div className='mb-2 d-flex justify-content-between'>
                           <p> <b>Phone Number: </b></p>
                            <p>{show?.phoneNumber}</p>
                        </div>
                        <div className='mb-2 d-flex justify-content-between'>
                           <p> <b>Random Number: </b></p>
                            <p>{show?.randomNumber}</p>
                        </div>
                        <div className='mb-2 d-flex justify-content-between'>
                           <p> <b>Outlet Number: </b></p>
                            <p>{show?.outletNumber}</p>
                        </div>
                    </div>
                )
            }
            )}

        </div>
    )
}

export default OutletDetailPage;