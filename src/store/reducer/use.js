function infoReducer(user={
    loading:true,
    data:{},
},action){
    switch(action.type){
        case "user_loading":
            return {
                loading:true,
                data:{}
            }
        case "user_data":
            return {
                loading:false,
                data:action.data
            }
        default:
            return user
    }
};

export default infoReducer;