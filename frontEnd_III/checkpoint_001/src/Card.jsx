function Card(props) {
    return (
        <div>
            <h1>{props.test.testName}</h1>
            <p>{props.test.testDate}</p>
            <p>{props.test.doctorName}</p>
            <p>{props.test.medicalLicenseNumber}</p>
            <p>{props.test.testModality}</p>
            <p>{props.test.accessionNumber}</p>
        </div>
    )
}

export default Card;