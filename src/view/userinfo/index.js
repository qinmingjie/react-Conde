import React, { useEffect } from "react";
import {Card,Avatar,Breadcrumb} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useParams,Link} from "react-router-dom"
import { useSelector } from "react-redux";
import useLogin from "../../store/action/index"
import InnerList from "../../component/list"
import Time from "../../component/time"
function UserInfo(){
    //获取地址参数，请求书据
    let {loginname} = useParams()
    let getData = useLogin()
    let state = useSelector(state=>{
        return state;
    })
    useEffect(()=>{
        getData(loginname);
    },[loginname]);
    //解构出需要的数据
    let {data,loading} = state.infoReducer
    let {recent_replies=[],recent_topics=[],avatar_url,create_at,score,githubUsername} = data;

    return (
        <div id="usePage">
            <Card
                loading={loading}
                className="useIcon"
                title={
                    <div className="useheader">
                       <Breadcrumb>
                            <Breadcrumb.Item ><Link to="/">首页</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>关于</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                }
            >
                <Avatar  src={avatar_url} size={80} icon={<UserOutlined/>}></Avatar>
                    <p>
                    用户名：<span style={{marginRight:"10px",fontSize:"12px"}}>{loginname}</span>
                    注册时间：<span style={{marginRight:"10px",fontSize:"12px"}}>{<Time time={create_at}/>}</span>
                    积分：<span style={{marginRight:"10px",fontSize:"12px"}}>{score}</span>
                    </p>
                    <p>github:<a href={`http://www.github.com/${githubUsername}`}>http://www.github.com/{githubUsername}</a></p>
            </Card>
            <Card
                loading={loading}
                title={"最近创建的话题"}
                type={"inner"}
            >
               <InnerList loading={loading} data={recent_replies}/> 
            </Card>
            <Card
                loading={loading}
                title={"最近参加的话题"}
                type={"inner"}
            >
                <InnerList loading={loading} data={recent_topics}/> 
            </Card>
        </div>
    )
}
export default UserInfo;