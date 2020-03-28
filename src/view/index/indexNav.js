import React,{Fragment} from "react"
import {NavData,types} from "../../router/index"
import { NavLink,useLocation} from "react-router-dom"
import {Menu} from "antd"
import {withRouter} from "react-router-dom";
import qs from "qs";
function IndexNav(props){
    //判断当前路径来决定子导航选中那个
    let {search} = useLocation()
    let {tab,page} = qs.parse(search.slice(1))
    let activeIndex = tab===undefined?0:(types.indexOf(tab));
    return(
        <Fragment>
            <div>
                <Menu 
                    id="AllNavm"
                    mode="horizontal"
                    defaultSelectedKeys={activeIndex+""}
                    style={{marginTop:"20px",backgroundColor:"#f6f6f6"}}
                >
                    {NavData.map((item,index)=>{
                        return(
                            <Menu.Item key={index}>
                                <NavLink 
                                    to={item.path}
                                    key={index}
                                >{item.title}</NavLink>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </div>
        </Fragment>
    )
}

export default withRouter(IndexNav);