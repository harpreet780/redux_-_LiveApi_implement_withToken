export const SUBMIT_LOGIN_DATA = "SUBMIT_LOGIN_DATA";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const OUTLET_DETAIL = "OUTLET_DETAIL";
export const ADD_OUTLETS = "ADD_OUTLETS";
export const OUTLET_LIST = "OUTLET_LIST";
export const UPDATE_OUTLETS = "UPDATE_OUTLETS";

export const toExpress = (type, payload) => ({
    type,
    payload
  });

  export const submitData = (store)=> toExpress(SUBMIT_LOGIN_DATA, store);
  export const updateProfile = (user)=> toExpress(UPDATE_PROFILE, user);
  export const addOutlets = (add)=> toExpress(ADD_OUTLETS, add);
  export const showOutlet = (show)=> toExpress(OUTLET_LIST, show);
  export const outletDetail = (detail)=> toExpress(OUTLET_DETAIL, detail);
  export const updateOutlets = (update)=> toExpress(UPDATE_OUTLETS, update);