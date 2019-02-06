import React from 'react'
import Styles from "./Part.module.css"
import {Switch, Route} from "react-router-dom"

function Part(props) {
    return (
        <div className={Styles.partWrapper}>
            <div className={Styles.part}>
            <img className={Styles.image} src={props.imgurl ? props.imgurl : null} alt="Item" ></img>
            <div className={Styles.wrapper}>
            <h5 className={Styles.title}>{props.title}</h5>
            <br></br>
            <Switch>
                <Route path="/research" render={() => <span onClick={() => props.savePart(props.partID)} className={Styles.heart}>❤️</span>}/>
            </Switch>
            
            <p className={Styles.price}>Sold for: ${props.price}</p>
            </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Part

///////After save, the heart disappears so you cannot save again