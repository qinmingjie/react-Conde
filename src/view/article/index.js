import React, { useEffect } from "react";
// import store from "../../store/index"
import {useSelector,useDispatch} from "react-redux"
import {useLocation,useParams} from "react-router-dom"
import {useTopic} from "../../store/action/index"
function ArticlePage(props){
    let {id} = useParams()
    useSelector(state=>{
        console.log(state.topicReducer)
        return state
    })
    let getData = useTopic()
    useEffect(()=>{
        getData(id)
    },[id])
    return (
        <div>文章详情页</div>
    )
}
export default ArticlePage;