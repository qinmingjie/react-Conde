import React, { Fragment } from "react";
import {Card} from "antd"
import {Link} from "react-router-dom"
import Sort from "../../component/sort"
import CommentList from "./comment"
function Details(props){
    let {loading,data} = props;
    let {author,content,create_at,good,tab,top,title,visit_count} = data
    // console.log(loading,data)
    return(
        <Card
            title={
                <Fragment>
                    <h1><Sort tab={top?"top":(good?"good":(tab===undefined?"other":tab))}/>{title}</h1>
            <p>作者:<Link to={`/user/${author.loginname}`}>{author.loginname}</Link> -创建时间： -浏览人数{visit_count}</p>
                </Fragment>
            }
            loading={loading}
            type="inner"
        >
            <div dangerouslySetInnerHTML={{
                __html:content
            }}></div>
            <CommentList loading={loading} data={data.replies}/>
        </Card>
    )
}

export default Details;