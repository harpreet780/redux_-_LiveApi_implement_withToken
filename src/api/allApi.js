import axios from "axios";

export const loginApi = (data) => {
    return axios.post('http://182.77.63.150:5200/user/login', {
        email: data.email,
        password: data.password
    })
}

export const addOutlets = (outlet) => {
    const accessLocalToken = localStorage.getItem("accessToken");
    const localUserId = localStorage.getItem("userId");
    return axios.post('http://182.77.63.150:5200/outlets', {
        name: outlet.name,
        email: outlet.email,
        password: outlet.password,
        phoneNumber: outlet.phoneNumber,
        description: outlet.description,
        address: outlet.address,
        userId: localUserId,
    }, {
        headers: {
            'authorization': `Bearer ${accessLocalToken}`
        },
    })
}

export const updateProfileApi = (update, _id) => {
    const accessLocalToken = localStorage.getItem("accessToken");
    return axios.patch(`http://182.77.63.150:5200/user/${update._id}`, {
        name: update.name,
        accountName: update.accountName,
        lastLogin: ""
    },
        {
            headers: {
                'authorization': `Bearer ${accessLocalToken}`
            },
        }
    )
}

export const fecthOutletList = () => {
    const userId = localStorage.getItem("userId");
    const accessLocalToken = localStorage.getItem("accessToken");
    return axios.get(`http://182.77.63.150:5200/outlets?userId=${userId}`, 
     {
        headers: {
            'authorization': `Bearer ${accessLocalToken}`
        },
    })
}

export const updateOutletApi = (update, _id) => {
    const accessLocalToken = localStorage.getItem("accessToken");
    return axios.patch(`http://182.77.63.150:5200/outlets/${update._id}`, {
        name: update.name,
        accountName: update.accountName,
        phoneNumber: update.phoneNumber,
        description: update.description,
        address: update.address,
        isDeleted: update.isDeleted,
        lastLogin: ""
    },
        {
            headers: {
                'authorization': `Bearer ${accessLocalToken}`
            },
        }
    )
}
