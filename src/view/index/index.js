import React,{Fragment,useEffect}from "react";
import IndexNav from "./indexNav";
import {withRouter,useLocation} from "react-router-dom";
import InnerList from "../../component/list";
import {useSelector,useDispatch,useStore} from "react-redux";
import {useToplist} from "../../store/action/index";
import qs from "qs"
function IndexPage(props){
    let {tab,page} = qs.parse(useLocation().search.slice(1)) //获取url参数
    let getData = useToplist();  //请求函数
    let dispatch = useDispatch;  //修改状态函数
    useSelector(state=>{
        console.log(state)
    })
    let {data,loading} = useSelector((state)=>state.topicsReducer) //获取状态信息

    // 检测状态变化
    useEffect(()=>{
        // console.log(tab)
        getData(tab,page)
    },[tab,page])
    return (
        <Fragment>    
            <IndexNav/>
            <InnerList data={data} loading={loading} {...props}/>
        </Fragment>
    )
}
export default withRouter(IndexPage);