import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Image } from 'antd';

const WeatherStatusIcon = ({ imgCode }) => {
    const [weatherImg, setWeatherImg] = useState('https://openweathermap.org/img/wn/01d@2x.png')
    useEffect(() => {
        if (imgCode) {
            setWeatherImg(`https://openweathermap.org/img/wn/${imgCode}@2x.png`)
        }
    }, [imgCode])
    return (
        <div>
            <Image src={weatherImg} preview={false} width='50px' height='50px' />
        </div>
    )
}
const mapStateToProps = (state) => ({
    imgCode: state.weatherData
        && state.weatherData.weather
        && state.weatherData.weather[0]
        && state.weatherData.weather[0].icon ?
        state.weatherData.weather[0].icon
        : ''
})

export default connect(mapStateToProps, null)(WeatherStatusIcon)