import React from "react"
import {Tag} from "antd"

function setSort(tab){  //判断父组件传过来的分类标签然后返回给定的dom节点
    switch(tab){
        case "good":
            return <Tag color="#f50" style={{textalign:"center"}}>精华</Tag>
        case "top":
            return <Tag color="#80bd01" style={{textalign:"center"}}>置顶</Tag>
        case "share":
            return <Tag color="#e5e5e5" style={{textalign:"center"}}>分享</Tag>
        case "ask":
            return <Tag color="#e5e5e5" style={{textalign:"center"}}>问答</Tag>
        case "job":
            return <Tag color="#e5e5e5" style={{textalign:"center"}}>招聘</Tag>
        case "dev":
            return <Tag color="#e5e5e5" style={{textalign:"center"}}>测试</Tag>
        case "other":
            return (<div></div>)
    }
    
}

function Sort(props){
    // console.log(props)   //接受父组件的分类标签
    let {tab} = props;
    // console.log("子导航"+tab) 
    return setSort(tab)
}

export default Sort;