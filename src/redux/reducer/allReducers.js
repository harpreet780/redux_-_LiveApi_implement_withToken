import {
    SUBMIT_LOGIN_DATA,
    UPDATE_PROFILE,
    ADD_OUTLETS,
    OUTLET_LIST,
    OUTLET_DETAIL,
    UPDATE_OUTLETS,
    OUTLET_LOGIN,
    ADD_RESOURCES,
    RESOURCE_LIST,
} from '../actions/action';

let initialState = {
    loginState: null,
    updateProfile: [],
    addOutletsValue: {
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        description: "",
        address: ""
    },
    outletList: null,
    singleDetailOutlet: null,
    updateOutlet: null,
    //resources
    outletLoginDetail: null,
    addResources: null,
    resourcesList: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // outlets
        case SUBMIT_LOGIN_DATA:
            let setData = action.payload
            return { ...state, loginState: setData }

        case UPDATE_PROFILE:
            let dd = { ...state.loginState }
            dd[action.payload.name] = action.payload.value

            return {
                ...state,
                loginState: dd, updateProfile: dd
            };

        case ADD_OUTLETS:
            let currentData = { ...state.addOutletsValue };
            currentData[action.payload.name] = action.payload.value
            return {
                ...state, addOutletsValue: currentData,
            };

        case OUTLET_LIST:
            let list = action.payload
            return { ...state, outletList: list }

        case OUTLET_DETAIL:
            return { ...state, singleDetailOutlet: action.payload }

        case UPDATE_OUTLETS:
            let out = { ...state.singleDetailOutlet }
            out[action.payload.name] = action.payload.value

            return {
                ...state, updateOutlet: out, singleDetailOutlet: out
            };

        // resources
        case OUTLET_LOGIN:
            let logDetail = action.payload
            return { ...state, loginState: logDetail }

        case ADD_RESOURCES:
            let resourceData = action.payload;
            return { ...state, addResources: resourceData }

      
        case RESOURCE_LIST:
            let resourcesList = action.payload
            return { ...state, resourcesList: resourcesList }



        default:
            return state;
    }
}