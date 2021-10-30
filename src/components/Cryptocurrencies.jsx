import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'
import { Card , Row , Col , Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'



const Cryptocurrencies = ({simplified}) => {

    const count= simplified?10 : 100;

    const {data , isFetching} = useGetCryptosQuery(count);
    const [cryptos , setCryptos] = useState([]);
    const [searchTerm , setSearchTerm] = useState('');
    console.log(cryptos);

    useEffect(() => {
    setCryptos(data?.data?.coins);

    const filteredData = data?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [data, searchTerm]);


    if(isFetching) return <Loader />;

    return (
        <>
            {!simplified &&(
                <div className="search-crypto">
                    <Input  onChange= {(e)=>setSearchTerm(e.target.value)} placeholder="Search Cryptocurrency Here" />
                </div>
            )}
            
            <Row gutter={[32,32]} className="crypto-card-container">
                {cryptos?.map((currency)=>(
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card title={`${currency.rank}. ${currency.name}`}
                                extra={<img  className='crypto-image' src={currency.iconUrl}/>}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}$</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies
