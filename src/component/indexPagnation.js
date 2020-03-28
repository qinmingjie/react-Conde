import React from "react";
import {Pagination,Col} from "antd"
import { useLocation, Link } from "react-router-dom";

function IndexPagnation(){
    let {tab="all",page=1} = useLocation()
    // console.log("分页"+tab)
    //通过父组件的来设置分页，
    return(
        <div>
            <Pagination  className="IndexPagnation" defaultCurrent={1} total={500} defaultPageSize={20} itemRender={(page,type,)=>{
                switch(type){
                    case "page":
                        return (<Col><Link to={`/index/?tab=${tab}&page=${page}`}>{page}</Link></Col>)
                    case "next":
                        return(<Col><Link to={`/index/?tab=${tab}&page=${page}`}>{">>"}</Link></Col>)
                    case "prev":
                        return (<Col><Link to={`/index/?tab=${tab}&page=${page}`}>{"<<"}</Link></Col>)
                    default:
                        return (<Col><Link to={`/index/?tab=${tab}&page=${page}`}>{"..."}</Link></Col>)
                }
            }}/>
        </div>
    )
}

export default IndexPagnation;