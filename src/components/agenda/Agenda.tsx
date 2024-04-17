import "./Agenda.css"
import { Client } from '../../types/types'
import { useState, useEffect } from 'react'
import useClients from '../../hooks/useClients'


const [clients, setClients] = useState<Client[]>([])
const [name, setName] = useState('')
const [day, setDay] = useState('')
const [time, setTime] = useState('')

const {getClients, addClient} = useClients()

useEffect(() => {
      const getData = async() => {
          const data = await getClients()
          setClients(data)
      }

      getData();
}, [])

// adicionar horario
const handleAddClient = async () => {
    const client = {name,day,time}
    addClient(name, day, time)
    setClients((prevClients) => [...prevClients, client])


    setName("")
    setDay("")
    setTime("")
}

const Agenda = () => {
  return (
    <div className="div-agenda">
        <h2 className='py-4'>Lista de clientes marcados</h2>

      <div className='div-table-clients'>
        <table className="table table-striped table-hover">
          <thead>
            <tr className='text-center'>
              <th scope="col">Nome</th>
              <th scope="col">Dia</th>
              <th scope="col">Horário</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
                {clients && clients.map((client) => (
                      <tr className='text-center' key={client.id}>
                            <td scope="row">{client.name}</td>
                            <td>{client.day}</td>
                            <td>{client.time}</td>
                            <td>
                              <button className='btn btn-danger me-1'>Cancelar</button>
                              <button className='btn btn-warning'>Cancelar</button>
                            </td>
                      </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Agenda