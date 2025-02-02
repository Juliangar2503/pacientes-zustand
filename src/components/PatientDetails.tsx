import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"               
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
  patients: Patient
}


export default function PatientDetails({ patients }: PatientDetailsProps) {

const deletePatient = usePatientStore((state) => state.deletePatient)
const getPatientById = usePatientStore((state) => state.getPatientById)


const handleClickDelete = () => {
  deletePatient(patients.id)
  toast.error('Paciente eliminado exitosamente')  
}

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={patients.id} />
        <PatientDetailItem label="Nombre" data={patients.name} />
        <PatientDetailItem label="Propietario" data={patients.caretaker} />
        <PatientDetailItem label="Email" data={patients.email} /> 
        <PatientDetailItem label="Síntomas" data={patients.symptoms} />
        <div className="flex flex-col lg:flex-row gap-3  justify-between mt-10 ">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => getPatientById(patients.id)}
            >Editar</button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleClickDelete}
            >Eliminar</button>

        </div>
    </div>

  )
}
