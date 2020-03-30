import React, { Fragment } from "react"
import {Card,List,Comment,Avatar} from "antd"
import { UserOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"
export default function CommentList(props){
    let {data,loading} = props
    // console.log(data)
    return (
        <Card
            title="评论列表"
            loading={loading}
            type="inner"
        >
            <List
                id = "replicesName"
                type="inner"
                dataSource={data}
                renderItem={(item)=>{
                    return (
                        <li>
                            <Comment
                                author={item.author.loginname}
                                avatar={
                                    <Link to={`/user/${item.author.loginname}`}>
                                        <Avatar src={item.author.avatar_url} icon={<UserOutlined/>}/>
                                    </Link>
                                }
                                content={
                                    <div dangerouslySetInnerHTML={{
                                        __html:item.content
                                    }}></div>
                                }
                            />
                        </li>
                    ) 
                }}
                />
        </Card>
    )
}