import React from 'react'
import {Select, Typography , Row , Col , Avatar , Card} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import Loader from './Loader'

const {Text ,Title } = Typography;
const {Option} = Select;

const News = ({simplified}) => {

     const { data } = useGetCryptoNewsQuery({ newsCategory : 'Cryptocurrency', count: simplified ? 6 : 12 });

    if(!data?.value)return <Loader />;

    return (
        <Row gutter={[24,24]}>
            {data.value.map((news , i)=>(
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card className= "news-card" hoverable>
                        <a href={news.url} target="_blank" rel = "noreferrer">
                            <div className='news-image-container'>
                                <Title className="news-title" level={5}>
                                      <p>{news.description.length > 50 ? `${news.name.substring(0, 50)}...` : news.name}</p>
                                </Title>
                                <img style={{maxWidth : "200px" , maxHeight : "100px "}} src={news?.image?.thumbnail?.contentUrl} alt="news"/>
                            </div>

                            <p>
                                {/* {news.description > 20
                                    ? `${news.description.substring(0,20)}...`
                                    :  news.description
                                } */}
                                  <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                            </p>

                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} alt="" />
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News
