import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import Form from './components/Form';

function App() {

  const [testName, setTestName] = useState("")
  const [testDate, setTestDate] = useState("")
  const [doctorName, setDoctorName] = useState("")
  const [medicalLicenseNumber, setMedicalLicenseNumber] = useState("")
  const [testModality, setTestModality] = useState("")
  const [accessionIdentification, setAccessionIdentification] = useState("")
  const [formError, setFormError] = useState(false)

  const [tests, setTests] = useState([]);

  // test={
  //   testName: 'Hemograma completo',
  //   testDate: '28/10/2022',
  //   doctorName: 'Noah Caleb Mateus da Cruz',
  //   medicalLicenseNumber: '184173',
  //   testModality: 'Análises clínicas',
  //   accessionIdentification: '131240988'
  // }


  return (

    <div>
      <h1>Resultados de Exames</h1>

      <Form
        testName={testName}
        testDate={testDate}
        doctorName={doctorName}
        medicalLicenseNumber={medicalLicenseNumber}
        testModality={testModality}
        accessionIdentification={accessionIdentification}
        tests={tests}
        formError={formError}
        setTestName={setTestName}
        setTestDate={setTestDate}
        setDoctorName={setDoctorName}
        setMedicalLicenseNumber={setMedicalLicenseNumber}
        setTestModality={setTestModality}
        setAccessionIdentification={setAccessionIdentification}
        setTests={setTests}
        setFormError={setFormError}

      />

      {/* <div>{JSON.stringify(tests)}</div> */}

      {/* {
        tests.map((test) => {
          return (
            <Card test={test} />
          )
        })
      } */}

<section>
            <h2>Exames</h2>
            <div className="test-cards">
                {
                    tests.map((test, index) => {
                        return (
                            <Card key={index} test={test} />
                        )
                    })
                }
            </div>
        </section>
    </div>
  )

}

export default App
