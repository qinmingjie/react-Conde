import React from "react";
import logo from "../static/img/cnodejs_light.svg"
import {Layout} from "antd"
function Footer(){
    return(
        <Layout.Footer className="setColor">
            <p className="wrap" id="footer">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        </Layout.Footer>
    )
}

export default Footer;