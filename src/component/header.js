import React from "react";
import logo from "../static/img/cnodejs_light.svg"
import {Affix,Layout,Row,Col,Menu} from "antd"
import {NavLink,Link} from "react-router-dom"
function Header(){
    return(
        <Affix
            offsetTop={0}
        >
            <Layout.Header id="header">
                <div className="wrap">
                    <Row justify="space-between">
                        <Col >
                            <div className="logo">
                                <Link to="/index"><img src={logo} alt=""/></Link>
                            </div>
                        </Col>
                        <Col className="headerNav">
                            <NavLink to="/index" activeClassName="active">首页</NavLink>
                            <NavLink to="/getstart" activeClassName="active">新手入门</NavLink>
                            <NavLink to="/about" activeClassName="active">关于</NavLink>
                        </Col>
                    </Row>
                </div>
            </Layout.Header>
        </Affix>
    )
}

export default Header;