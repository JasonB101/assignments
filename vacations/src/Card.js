import React from "react"

const Card = ({place, price, timeToGo, ...props}) => {
    return(
    <div className="box" style={{backgroundColor: checkSeason(timeToGo)}} {...props}>
        <h2>{place}</h2>
        <h3>{dollarConvert(price)}</h3>
        <p>Preferred Season: {timeToGo}</p>
    </div>
    )
}
function dollarConvert(price) {
    if (price <= 500) return "$"
      else if (price > 500 && price <= 1000) return "$$"
      return "$$$"
}
function checkSeason(season) {
    switch (season) {
    case "Summer": return "lightblue"
    case "Fall": return "orange"
    case "Spring": return "lightgreen"
    case "Winter": return "lightgray"
    default: return "white"
    }
}

export default Card
