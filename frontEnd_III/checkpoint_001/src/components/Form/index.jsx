//import {useState} from 'react';
import styles from './styles.css';

function Form(props) {

    function saveTest(event) {
        event.preventDefault()

        let test = {
            testName: props.testName,
            testDate: props.testDate,
            doctorName: props.doctorName,
            medicalLicenseNumber: props.medicalLicenseNumber,
            testModality: props.testModality,
            accessionIdentification: props.accessionIdentification,
        }


        // if (props.testName == "" || props.testDate == "" || props.doctorName == "" || props.medicalLicenseNumber == "" || props.testModality == "" || props.accessionIdentification == "") {
        //     props.setFormError(true)
        //     return
        //     //alert("Por favor, preencha todos os campos para salvar o resultado do exame");
        // }
        if (props.testName.length < 3) {
            props.setFormError(true)
            alert("Por favor, insira um nome de exame com no mínimo, 3 caracteres!")
            return
        }

        if (props.testName[0] == " ") {
            props.setFormError(true)
            alert("Por favor, o nome não pode conter espaços em branco no início!")
            return
        }


        props.setFormError(false)

        //props.setTests([...tests, test])

        props.setTests([...props.tests, {
            testName: props.testName,
            testDate: props.testDate,
            doctorName: props.doctorName,
            medicalLicenseNumber: props.medicalLicenseNumber,
            testModality: props.testModality,
            accessionIdentification: props.accessionIdentification,
        }])

        props.setTestName("")
        props.setTestDate("")
        props.setDoctorName("")
        props.setMedicalLicenseNumber("")
        props.setTestModality("")
        props.setAccessionIdentification("")

    }


    return (
        <div className="App">
            <fieldset>
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
                        pattern="^[^\x00-\x1f\x21-\x26\x28-\x2d\x2f-\x40\x5b-\x60\x7b-\xff]+$"
                        title="O nome não pode conter números ou caracteres especiais."
                        required="required"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="medicalLicenseNumber">CRM</label>
                    <input
                        type="number"
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
                        pattern="^[^\x00-\x1f\x21-\x26\x28-\x2d\x2f-\x40\x5b-\x60\x7b-\xff]+$"
                        title="A modalidade não pode conter números ou caracteres especiais."
                        required="required"
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="accessionIdentification">Protocolo</label>
                    <input
                        type="text"
                        value={props.accessionIdentification}
                        onChange={(event) => props.setAccessionIdentification(event.target.value)}
                        placeholder="Digite o número do protocolo"
                        pattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$"
                        title="O protocolo deve conter deve conter pelo menos uma letra, um número e seis caracteres."
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
</fieldset>
        </div>
    )
}


export default Form;