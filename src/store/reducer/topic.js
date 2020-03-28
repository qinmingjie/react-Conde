import React from "react"
function topicReducer(topic={
    laoading:true,
    data:{}
},action){
    console.log(action.type)
    switch(action.type){
        case "pic_loading":
            return {
                loading:true,
                data:{}
            }
        case "pic_data":
            return {
                loading:false,
                data:action.data
            }
        default:
            return topic
    }
}

export default topicReducer