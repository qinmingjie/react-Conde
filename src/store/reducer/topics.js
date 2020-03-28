function topicsReducer(topics={
    loading:true,
    data:[],
},action){
    switch(action.type){
        case "edit_loading":
            return {
                loading:true,
                data:[]
            }
        case "edit_data":
            return {
                loading:false,
                data:action.data
            }
        default:
            return topics
    }
};

export default topicsReducer;