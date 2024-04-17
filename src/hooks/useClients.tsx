import {API} from '../config.ts'
import { Client } from '../types/types.ts'

export default function useClients() {

        async function getClients(){
            try{
                const res = await fetch(`${API}/clients`)
                const data = await res.json()
                return data
            }catch(error){
                console.log("Erro interno de servidor => " + error)
            }
        }

        async function addClient(name: string, day: string, time: string) {
            try{
            fetch(`${API}/clients`, {
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify({name, day, time})
            })
            }catch(error){
                console.log("Erro interno de servidor => " + error)
            }

        }
    

    return {getClients, addClient} 
}

