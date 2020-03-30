import React,{Fragment} from 'react';
import {useSelector} from "react-redux";
import {router} from "./router/index";
import {Route,Switch} from "react-router-dom";
import {Layout} from "antd"
import Header from "./component/header"
import Footer from "./component/footer"
import "./static/css/index.css"
import IndexPage from "./view/index/index";
function App() {
	return (
		<Fragment>
			<Layout className="setColor">
				<Header/>
				<Layout.Content>
					<div className="wrap getstart">
						<Switch> {/**循环路由信息  遇到的问题：不管进那个页面都会显示404，解决：没有用switch,switch匹配到一个后后面的就不会匹配了*/}
							{router.map((item,index)=>{  
								return <Route 
								key={index}
									path={item.path}
									exact={item.exact}
									render={(props)=>{
										return item.render(props);
									}}
								/>
							})}
						</Switch>
					</div>
				</Layout.Content>
				<Footer/>
			</Layout>
		</Fragment>
	);
}

export default App;
