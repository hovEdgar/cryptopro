import {Cryptocurrencies, CryptoDetails, Homepage, Navbar, News} from "./components";

import {Link, Route, Routes} from "react-router-dom";
import {Layout, Space, Typography} from "antd";

import "./App.css";

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar/>
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route exact element={<Homepage/>} path="/"/>
							<Route element={<Cryptocurrencies/>} path="/cryptocurrencies"/>
							<Route element={<CryptoDetails/>} path="/crypto/:coinId"/>
							<Route element={<News/>} path="/news"/>
						</Routes>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
						{"CryPto{Pro}"} <br/>
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to="/">Home</Link>
						<Link to="/exchanges">Exchanges</Link>
						<Link to="/news">News</Link>

					</Space>
					<br/>
					<a
						href="https://www.linkedin.com/in/edgar-hovsepyan-9ba0b3233/"
						target="_blank"
						rel="noreferrer"
					>
						{"♦ CryPto{Pro} by Edgar Hovsepyan © 2022 ♦"}
					</a>
				</div>
			</div>
		</div>
	);
};

export default App;
