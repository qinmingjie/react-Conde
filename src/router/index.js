import React from "react";
import {Redirect} from "react-router-dom"
import IndexPage from "../view/index/index"
import AboutPage from "../view/about/index"
import ArticlePage from "../view/article/index"
import GetStartPage  from "../view/getstart/index"
import UserInfo from "../view/userinfo/index"
import Page404 from "../view/Page404"
import qs from "qs"
let types = ["all","good","ask","share","job","dev"];
let router = [
    {
        path:"/",
        exact:true,
        render(props){
            let {search} = props.location
            let {tab,page} = qs.parse(search.slice(1))
            return <Redirect to="/index"/>
        }
    },
    {
        path:"/index",
        exact:true,
        render(props){
            let {search} = props.location
            let {tab,page} = qs.parse(search.slice(1));
            if((tab===undefined&&page===undefined)||types.includes(tab)&&(page===undefined||page>0)){  //判断首页子页面导航
                return <IndexPage {...props}/>
            }else{
                return <Page404 {...props}/>
            }
        }
    },
    {
        path:"/getstart",
        exact:true,
        render(props){
            let {search} = props.location
            let {tab,page} = qs.parse(search.slice(1))
            if(types.includes(tab)){
                let newpage = {page};
            }
            return <GetStartPage/>
        }
    },
    {
        path:"/about",
        exact:true,
        render(props){
            let {search} = props.location
            let {tab,page} = qs.parse(search.slice(1))
            if(types.includes(tab)){
                let newpage = {page};
            }
            return <AboutPage/>
        }
    },
    {
        path:"/user/:username",
        exact:true,
        render(props){
            let {search} = props.location
            let {tab,page} = qs.parse(search.slice(1))
            if(types.includes(tab)){
                let newpage = {page};
            }
            return <UserInfo/>
        }
    },
    {
        path:"/topic/:id",
        exact:true,
        render(props){
            let {search} = props.location
            let {tab,page} = qs.parse(search.slice(1))
            if(types.includes(tab)){
                let newpage = {page};
            }
            return <ArticlePage/>
        }
    },
    {
        path:"",
        exact:false,
        render(props){
            let {search} = props.location
            let {tab,page} = qs.parse(search.slice(1))
            if(types.includes(tab)){
                let newpage = {page};
            }
            return <Page404 {...props}/>
        }
    }
]

let NavData = [
    {
        path:"/index/?tab=all&page=1",
        title:"全部",
        exact:true,
        active:"active"
    },{
        path:"/index/?tab=good&page=1",
        title:"精华",
        exact:true,
        active:"active"
    },{
        path:"/index/?tab=share&page=1",
        title:"分享",
        exact:true,
        active:"active"
    },{
        path:"/index/?tab=ask&page=1",
        title:"问答",
        exact:true,
        active:"active"
    },{
        path:"/index/?tab=job&page=1",
        title:"招聘",
        exact:true,
        active:"active"
    },{
        path:"/index/?tab=dev&page=1",
        title:"客户端测试",
        exact:true,
        active:"active"
    }
]

export {router,NavData,types};