import React from 'react'
import Styles from "./Part.module.css"
import { Switch } from "react-router-dom"
import {withContext} from "../DataHandler"

class Part extends React.Component {
    
    render() {
        const saved = this.props.savedParts.find(x => x.partID === this.props.partID);
        return (
            <div className={Styles.partWrapper}>
                <div className={Styles.part}>
                    <img className={Styles.image} src={this.props.imgurl ? this.props.imgurl : null} alt="Item" ></img>
                    <div className={Styles.wrapper}>
                        <h5 className={Styles.title}>{this.props.title}</h5>
                        <br></br>
                        <Switch>
                            <span onClick={() => {
                                if (!saved) {
                                    this.props.savePart(this.props.partID)
                                } else {
                                    this.props.delPart(this.props.partID)
                                }
                            }}
                                className={Styles.heart} > {saved ? "✭" : "✩" }</span>
                        </Switch>

                        <p className={Styles.price}>Sold for: ${this.props.price}</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default withContext(Part)

///////After save, the heart disappears so you cannot save again ✭ ✭ ✭ ✭ ✭ ✭ ✭ 