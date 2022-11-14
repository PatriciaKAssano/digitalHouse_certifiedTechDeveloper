function Form(props) {

    function saveTest(event) {
        event.preventDefault()

        props.setTests([...props.tests, {
            testName: props.testName,
            testDate: props.testDate,
            doctorName: props.doctorName,
            medicalLicenseNumber: props.medicalLicenseNumber,
            testModality: props.testModality,
            accessionNumber: props.accessionNumber,
        }])


        // if (props.testName == "" || props.testDate == "" || props.doctorName == "" || props.medicalLicenseNumber == "" || props.testModality == "" || props.accessionNumber == "") {
        //     props.setFormError(true)
        //     return
        //     //alert("Por favor, preencha todos os campos para salvar o resultado do exame");
        // }
        if (props.testName.length < 3) {
            props.setFormError(true)
            return
        }


        props.setFormError(false)

        props.setTests([...tests, test])

        props.setTestName("")
        props.setTestDate("")
        props.setDoctorName("")
        props.setMedicalLicenseNumber("")
        props.setTestModality("")
        props.setAccessionNumber("")

    }


    return (
        <div className="App">
            <h2>Salvar novo resultado de exame</h2>
            <form className={props.formError ? "form-error" : ""} onSubmit={event => saveTest(event)}>
                <fieldset>
                    <label htmlFor="testName">Exame</label>
                    <input
                        type="text"
                        value={props.testName}
                        onChange={(event) => props.setTestName(event.target.value)}
                        placeholder="Digite o nome do exame"
                        required="required"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="testDate">Data do exame</label>
                    <input
                        type="date"
                        value={props.testDate}
                        onChange={(event) => props.setTestDate(event.target.value)}
                        placeholder="Digite a data do teste no formato dd/mm/aaaa"
                        required="required"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="DoctorName">Médico(a)</label>
                    <input
                        type="text"
                        value={props.doctorName}
                        onChange={(event) => props.setDoctorName(event.target.value)}
                        placeholder="Digite o nome completo do(a) doutor(a)"
                        required="required"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="medicalLicenseNumber">CRM</label>
                    <input
                        text="number"
                        value={props.medicalLicenseNumber}
                        onChange={(event) => props.setMedicalLicenseNumber(event.target.value)}
                        placeholder="Digite o CRM do(a) doutor(a)"
                        required="required"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="testModality">Modalidade</label>
                    <input
                        type="text"
                        value={props.testModality}
                        onChange={(event) => props.setTestModality(event.target.value)}
                        placeholder="Digite a modalidade do teste"
                        required="required"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="accessionNumber">Protocolo</label>
                <input
                    value={props.accessionNumber}
                    onChange={(event) => props.setAccessionNumber(event.target.value)}
                    placeholder="Digite o número do protocolo"
                    required="required"
                />
                </fieldset>

                <button type="submit">Salvar</button>

            </form>

            {
                props.formError ? (
                    <small><strong>Por favor, verifique os dados inseridos no formulário</strong></small>
                ) : null
            }

        </div>
    )
}


export default Form;