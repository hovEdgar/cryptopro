import millify from "millify";
import {Col, Row, Statistic, Typography} from "antd";
import {Link} from "react-router-dom";

import {useGetCryptosQuery} from "../services/cryptoApi";
import {Cryptocurrencies, Loader, News} from "./index";

const Homepage = () => {
	const {data, isFetching} = useGetCryptosQuery(10);
	const globalState = data?.data?.stats;

	if (isFetching) return <Loader/>;

	return (
		<>
			<Typography.Title level={2} className="heading">
				Global crypto stats
			</Typography.Title>
			<Row>
				<Col span={12}><Statistic title="Total Cryptocurrencies" value={globalState.total}/></Col>
				<Col span={12}><Statistic title="Total Market cap" value={millify(globalState.totalMarketCap)}/></Col>
				<Col span={12}><Statistic title="Total 24h volume" value={millify(globalState.total24hVolume)}/></Col>
				<Col span={12}><Statistic title="Total Markets" value={millify(globalState.totalMarkets)}/></Col>
			</Row>
			<div className="home-heading-container">
				<Typography.Title level={2} className="home-title">
					Top 10 Cryptocurrencies in the World
				</Typography.Title>
				<Typography.Title level={3} className="show-more">
					<Link to="/cryptocurrencies">Show more</Link>
				</Typography.Title>
			</div>
			<Cryptocurrencies simplified/>
			<div className="home-heading-container">
				<Typography.Title level={2} className="home-title">
					Latest Crypto news
				</Typography.Title>
				<Typography.Title level={3} className="show-more">
					<Link to="/news">Show more</Link>
				</Typography.Title>
			</div>
			<News simplified/>
		</>
	);
};

export default Homepage;