function Form(props) {

    function saveTest() {
        if (props.testName == "" || props.testDate == "" || props.doctorName == "" || props.medicalLicenseNumber == "" || props.testModality == "" || props.accessionNumber == "") {
            alert("Por favor, preencha todos os campos para salvar o resultado do exame");
        } else {
            props.setTests([...props.tests, {
                testName: props.testName,
                testDate: props.testDate,
                doctorName: props.doctorName,
                medicalLicenseNumber: props.medicalLicenseNumber,
                testModality: props.testModality,
                accessionNumber: props.accessionNumber,
            }

            ])
        }
    }

    return (
        <form>
            <input
                value={props.testName}
                onChange={(event) => props.setTestName(event.target.value)}
                placeholder="Digite o nome do teste"
            />

            <input
                value={props.testDate}
                onChange={(event) => props.setTestDate(event.target.value)}
                placeholder="Digite a data do teste no formato dd/mm/aaaa"
            />

            <input
                value={props.doctorName}
                onChange={(event) => props.setDoctorName(event.target.value)}
                placeholder="Digite o nome completo do(a) doutor(a)"
            />

            <input
                value={props.medicalLicenseNumber}
                onChange={(event) => props.setMedicalLicenseNumber(event.target.value)}
                placeholder="Digite o CRM do(a) doutor(a)"
            />

            <input
                value={props.testModality}
                onChange={(event) => props.setTestModality(event.target.value)}
                placeholder="Digite a modalidade do teste"
            />

            <input
                value={props.accessionNumber}
                onChange={(event) => props.setAccessionNumber(event.target.value)}
                placeholder="Digite o número do protocolo"
            />

            <button type="button" onClick={saveTest}>Salvar</button>

        </form>
    )
}

export default Form;