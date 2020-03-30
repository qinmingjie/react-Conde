import React, { useEffect, Fragment } from "react";
// import store from "../../store/index"
import {useSelector,useDispatch} from "react-redux"
import {useLocation,useParams,useHistory} from "react-router-dom"
import {useTopic} from "../../store/action/index"
import {Alert} from "antd"
import Details from "./details"
function ArticlePage(props){
    let {id} = useParams()
    let history = useHistory()
    useEffect(()=>{
        getData(id)
    },[id])
    let state = useSelector(state=>{
        return state
    }).topicReducer
    // console.log(state)
    //提取文章详情页要的数据：用户头像，文章标题，分类标签，文章内容
    let {loading,data,error_msg,isError} = state;
    let getData = useTopic()
    // console.log(isError)
    return (
    <div>{isError?<Alert 
        type="error"
        closable={true}
        message="请求出错"
        description={
            <Fragment>
                <p>{error_msg}</p>
                <p>关闭返回上一步</p>
            </Fragment>
        }
        afterClose={()=>{
            history.goBack()
        }}
    />:(
        <Fragment>
            <Details loading={loading} data={data}/>
        </Fragment>
    )}</div>
    )
}
export default ArticlePage;