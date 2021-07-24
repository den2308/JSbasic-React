import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Card, Row, Col } from 'antd';
import WeatherSattusIcon from './WeatherSattusIcon'
import { getWeatherDataThunk } from '../store/thunk/weatherThunk'

import './weatherPageStyle.css'

const WeatherPage = ({ authToken, cityName }) => {
    let history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!authToken || authToken === '') {
            history.replace('/')
        }
    }, [authToken, history])

    useEffect(() => {
        dispatch(getWeatherDataThunk())
    }, [dispatch])
    return (
        <Row align='middle' justify="center">
            <Col xs={10} md={10}>
                <Card
                    title={
                        <div className="weather-card-title">
                            <p>{cityName}</p>
                            <WeatherSattusIcon />
                        </div>
                    }
                    bordered={true}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => ({
    authToken: state.user.authToken,
    cityName: state.weatherData.name
})

export default connect(mapStateToProps, null)(WeatherPage)
