import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "antd/dist/antd.css";
import "./App.css";

import {
	Navbar,
	Homepage,
	Exchanges,
	Cryptocurrencies,
	Cryptodetails,
	News,
} from "./components";


function App() {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Switch>
							<Route exact path="/">
								<Homepage />
							</Route>

							<Route exact path="/exchanges">
								<Exchanges />
							</Route>

							<Route exact path="/cryptocurrencies">
								<Cryptocurrencies />
							</Route>

							<Route exact path="/crypto/:coinId">
								<Cryptodetails />
							</Route>

							<Route exact path="/news">
								<News />
							</Route>
						</Switch>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title
						level={5}
						style={{ color: "white", textAlign: "center" }}
					>
						CryptoWorld
						<br />
						All rights are reserved
						<br />
						<Space>
							<Link to="/">Home</Link>
						</Space>
					</Typography.Title>
				</div>
			</div>
		</div>
	);
}

export default App;
