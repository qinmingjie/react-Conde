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
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}`).then((res)=>{
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
            console.log(res)
            dispatch({
                type:"pic_data",
                data:res.data.data
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export {useToplist,useTopic};