function Card(props) {
    return (
        <div>
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