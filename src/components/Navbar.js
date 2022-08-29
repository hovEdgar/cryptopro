import {useEffect, useState} from "react";
import {Avatar, Button, Menu, Typography} from "antd";
import {Link} from "react-router-dom";
import {BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined} from "@ant-design/icons";
import icon from "./images/cryptocurrency.png";

// This uses for menu from+
const menuItems = [
	{
		key: 'home',
		icon: <HomeOutlined/>,
		label: (<Link to="/">Home</Link>),
	},
	{
		key: 'cryptocurrency',
		icon: <FundOutlined/>,
		label: (<Link to="/cryptocurrencies">Cryptocurrencies</Link>),
	},
	{
		key: 'news',
		icon: <BulbOutlined/>,
		label: (<Link to="/news">News</Link>),
	},
];

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const resizer = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", resizer);

		resizer();

		return () => window.removeEventListener("resize", resizer);
	}, []);

	useEffect(() => {
		if (screenSize < 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize])

	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large"/>
				<Typography.Title level={2} className="logo">
					<Link to="/">{"CryPto{pro}"}</Link>
				</Typography.Title>
				<Button
					className="menu-control-container"
					onClick={() => setActiveMenu(prevState => !prevState)}
				>
					<MenuOutlined/>
				</Button>
			</div>
			{activeMenu && (
				<Menu theme="dark" items={menuItems}>

				</Menu>
			)}
		</div>
	);
};

export default Navbar;