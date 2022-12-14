import {useEffect, useState} from "react";
import {Card, Col, Input, Row} from "antd";
import {useGetCryptosQuery} from "../services/cryptoApi";
import {Link} from "react-router-dom";
import {millify} from "millify";
import {Loader} from "./index";


const Cryptocurrencies = ({simplified}) => {
	const count = simplified ? 10 : 100;

	const {data: cryptoList, isFetching} = useGetCryptosQuery(count);

	const [cryptos, setCryptos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

		setCryptos(filteredData);

	}, [cryptoList, searchTerm]);

	if (isFetching) {
		return <Loader/>;
	}

	return (
		<>
			{!simplified && (
				<div className="search-crypto">
					<Input placholder="search cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)}/>
				</div>
			)}
			<Row gutter={[32, 32]} className="crypto-card-container">
				{cryptos?.map((coin) => (
					<Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.uuid}>
						<Link to={`/crypto/${coin.uuid}`}>
							<Card
								title={`${coin.rank}. ${coin.name}`}
								extra={<img className="crypto-image" src={coin.iconUrl} alt={coin.name}/>}
								hoverable
							>
								<p>Price: {millify(coin.price)}</p>
								<p>Market cap: {millify(coin.marketCap)}</p>
								<p>Daily change: {millify(coin.change)}%</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
};

export default Cryptocurrencies;