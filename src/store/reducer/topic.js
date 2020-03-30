import React from "react"
function topicReducer(topic={
    laoading:true,
    data:{author:{}},
    isError:false,
    error_msg:""
},action){
    // console.log(action.type)
    switch(action.type){
        case "pic_loading":
            return {
                loading:true,
                data:{
                    author:{}
                }
            }
        case "pic_data":
            return {
                loading:false,
                isError:false,
                data:action.data
            }
        case "pic_error":
            return{
                loading:false,
                isError:true,
                error_msg:action.error_msg,
                data:{
                    author:{}
                }
            }
        default:
            return topic
    }
}

export default topicReducer