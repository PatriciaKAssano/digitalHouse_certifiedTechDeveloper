//import {useState} from 'react';
import styles from './styles.css';

function Card(props) {
    return (
        <div id="card">
            <h3>{props.test.testName}</h3>
            <p>{props.test.testDate}</p>
            <p>{props.test.doctorName}</p>
            <p>{props.test.medicalLicenseNumber}</p>
            <p>{props.test.testModality}</p>
            <p>{props.test.accessionIdentification}</p>
        </div>
    )
}

export default Card;