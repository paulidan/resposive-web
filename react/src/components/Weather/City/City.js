import CityStyle from 'CityStyle.module.css';


const DisplayCity = ({ city }) => {
    return (!!city) ?
        (<div className={CurrentStyle.location}>{city}</div>) :
        (<></>)
}