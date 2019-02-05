import React from 'react'
import Styles from "./Part.module.css"

function Part(props) {
    return (
        <div>
            <div className={Styles.part}>
            <img className={Styles.image} src={props.galleryURL ? props.galleryURL[0] : null} alt="Item" ></img>
            <div className={Styles.wrapper}>
            <h5 className={Styles.title}>{props.title[0]}</h5>
            <br></br>
            <p className={Styles.price}>Sold for: ${props.sellingStatus[0].currentPrice[0].__value__}</p>
            </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Part
