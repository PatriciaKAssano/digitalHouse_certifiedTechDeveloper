import { useState } from 'react'
import './App.css'
import Card from './Card';
import Form from './Form';

function App() {

  const [testName, setTestName] = useState("")
  const [testDate, setTestDate] = useState("")
  const [doctorName, setDoctorName] = useState("")
  const [medicalLicenseNumber, setMedicalLicenseNumber] = useState("")
  const [testModality, setTestModality] = useState("")
  const [accessionNumber, setAccessionNumber] = useState("")

  const [tests, setTests] = useState([]);

  // test={
  //   testName: 'Hemograma completo',
  //   testDate: '28/10/2022',
  //   doctorName: 'Noah Caleb Mateus da Cruz',
  //   medicalLicenseNumber: '184173',
  //   testModality: 'Análises clínicas',
  //   accessionNumber: '131240988'
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
        accessionNumber={accessionNumber}
        tests={tests}
        setTestName={setTestName}
        setTestDate={setTestDate}
        setDoctorName={setDoctorName}
        setMedicalLicenseNumber={setMedicalLicenseNumber}
        setTestModality={setTestModality}
        setAccessionNumber={setAccessionNumber}
        setTests={setTests}
      />

      {/* <div>{JSON.stringify(tests)}</div> */}

      {
        tests.map((test) => {
          return (
            <Card test={test} />
          )
        })
      }
    </div>
  )

}

export default App
