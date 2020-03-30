import React ,{Fragment} from "react"
import {List,Col,Avatar } from "antd"
import {UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Sort from "./sort"
import Time from "../component/time"
function InnerList(props){
    let {data,loading} = props  //请求到的数据data然后写入列表
    return(
        <Fragment>
            <div className="listName">
                <List className="List"
                    loading={false}
                    dataSource={data}
                    loading={{
                        spinning:loading,
                        wrapperClassName:"List",
                        size:"large"
                    }}
                    renderItem={(data)=>{
                        // console.log(data)
                        let {author,id,last_reply_at,tab,good,top} = data   //解构请求到的数据data中的数据传给子组件来判断是什么分类标签
                        console.log(last_reply_at)
                        // console.log(top?"top":(good?"good":((tab===undefined)?"other":tab)))
                        return <List.Item id={data.author_id} justify="space-between">
                            {/**设置头像链接 */}
                            <Col xs={2} md={2}>
                                <Link to={`/user/${data.author.loginname}`}>
                                    <Avatar src={data.author.avatar_url} shape="square" icon={<UserOutlined/>}>
                                    </Avatar>
                                </Link>
                            </Col>
                            <Col xs={20} md={18} id="text-wrap">
                                <Sort tab={top?"top":(good?"good":((tab===undefined)?"other":tab))}/>   
                                <Link to={`/topic/${data.id}`}> 
                                    {data.title}
                                </Link>
                            </Col>
                            <Col xs={0} md={4}>
                                <Link to={`/user/${data.author.loginname}`}>
                                    <Avatar src={data.author.avatar_url} size="small" shape="square">
                                    <UserOutlined/>
                                    </Avatar>
                                </Link>
                                <span style={{marginLeft:"15px",fontSize:"12px",color:"#778087"}}><Time time={last_reply_at}/></span>
                            </Col>
                        </List.Item>
                    }}
                />
            </div>
        </Fragment>
    )
}

export default InnerList;