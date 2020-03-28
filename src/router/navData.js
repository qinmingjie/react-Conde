import React from "react";
import { Redirect } from "react-router-dom";
import InnerPage from "../view/inner";
import Page404 from "../view/Page404"
let types = ["all","good","ask","share","job","dev"];

let  routeData= [
    {
        path:"/",
        exact:true,
        render:(location)=>{
            return <Redirect to="all/1" />
        }
    },{
        path:"/:type/:page",
        exact:true,
        render:(props)=>{
            //获取点击导航url中的参数
            // console.log(props)s
            let {type,page} = props.match.params;
            if(types.includes(type)){
                let newpage = parseFloat(page)
                // console.log(newpage)
                if(newpage>0){
                    return  <InnerPage/>
                }else{
                    return <Page404/>
                }
            }else{
                return <Page404/>
            }
            //<InnerPage {...location}/>多余的，因为在类组件中所有的参数都在this中
            //这个render方法是箭头函数所以this指向调用他的，也就是App中路由调用的
        }
    },{
        path:"/:type",
        exact:true,
        render:(props)=>{
            //获取点击导航url中的参数
            let {type,page} = props.match.params;
            console.log(type,page)

            //如果没有页码进行重定向
            if(types.includes(type)){
                return  <Redirect to={type+"/1"}/>
            }else{
                return <Page404/>
            }
        }
    },{
        path:"",
        exact:false,
        render:(location)=>{
            return <Page404/>
        }
    }
]

export {types,routeData};