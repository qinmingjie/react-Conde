import React from "react";
import {Result,Button} from "antd"
import {Link} from "react-router-dom"
function Page404(){
    return (
        <Result
            status="404"
            title="404"
            subTitle="不好意思，页面飞走了，拜拜！"
            extra={<Button type="primary"><Link to="/"> 返回首页</Link></Button>}
        />

    )
}
export default Page404;