import React from 'react';
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptoQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components"
import Loader from "./Loader"

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptoQuery(10 );
    console.log(data)
    const globalstats = data?.data?.stats;

    if (isFetching) return <Loader />;

    return (
        <div>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalstats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalstats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalstats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24hr Volume" value={millify(globalstats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalstats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurriencies in the World</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className="home-heading-container">
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified/>

        </div>
    )
}

export default Homepage
