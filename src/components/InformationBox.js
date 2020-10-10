import React from 'react'
import styles from './InformationBox.module.css'

export default function InformationBox(props) {
    return (
        <div className={ styles.boxBackground }>
            <div className={ styles.container }>
                <span className={ styles.header }>{ props.topic }:&nbsp;</span> { props.body }
            </div>
        </div>
    )
}
