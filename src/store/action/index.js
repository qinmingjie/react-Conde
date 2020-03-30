import axios from "axios";
import {useDispatch} from "react-redux"
const http = axios.create({
    baseURL:"https://cnodejs.org/api/v1"
})

//获取主题列表数据
function useToplist(){
    let dispatch = useDispatch()
    return function (tab="all",page=1,limit=20){
        dispatch({
            type:"edit_loading",
            loading:false
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender="true"`).then((res)=>{
            dispatch({
                type:"edit_data",
                data:res.data.data
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
}

//获取文章详情
function useTopic(){
    let dispatch = useDispatch();
    return function(id){
        dispatch({
            type:"pic_loading",
            loading:false
        })
        http.get(`/topic/${id}`).then((res)=>{
            dispatch({
                type:"pic_data",
                isError:false,
                data:res.data.data
            })
        }).catch((err)=>{   //判断文章id是否错误有数据
            let {error_msg} = err.response.data;
            dispatch({
                type:"pic_error",
                error_msg:error_msg,
                isError:true,
                data:{}
            })
        })
    }
}

//获取用户详情
export default function useLogin(){
    let dispatch = useDispatch();
    return function(loginname){
        dispatch({
            type:"user_loading",
            loading:false
        })
        http.get(`/user/${loginname}`).then((res)=>{
            dispatch({
                type:"user_data",
                data:res.data.data
            })
        })
    }
}
export {useToplist,useTopic};