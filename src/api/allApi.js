import axios from "axios";

export const loginApi = (data) => {
    return axios.post('http://182.77.63.150:5200/user/login', {
        email: data.email,
        password: data.password
    })
}

export const outletLoginApi = (logValue) => {
    return axios.post('http://182.77.63.150:5200/outlets/login', {
        email: logValue.email,
        password: logValue.password
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

//Resources
export const addResourcesApi = (resource) => {
    const accessResourceToken = localStorage.getItem("outletToken");
    const localUserId = localStorage.getItem("outletUserId");
    const localId = localStorage.getItem("outletId");
    return axios.post('http://182.77.63.150:5200/resource', {
        name: resource.name,
        description: resource.description,
        outlet: localId,
        phoneNumber: resource.phoneNumber,
        phoneCode: resource.phoneCode,
        resourceImage:"",
        userId: localUserId
    }, {
        headers: {
            'authorization': `Bearer ${accessResourceToken}`
        },
    })
}

export const resourcesListApi = () => {
    const accessResourceToken = localStorage.getItem("outletToken");
    const localUserId = localStorage.getItem("outletUserId");
    const localId = localStorage.getItem("outletId");
    return axios.get(`http://182.77.63.150:5200/resource?userId=${localUserId}&id=${localId}`, 
     {
        headers: {
            'authorization': `Bearer ${accessResourceToken}`
        },
    })
}