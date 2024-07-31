import { useEffect, useState } from 'react';
import { ClientCard } from "./ClientCard";


export const ClientList = () => {
  const [clients, setClients] = useState([]);
  const baseUrl = 'http://localhost:8080/clients'

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setClients(data);
            })

    }, []);
    console.log(clients);
    return (
        <div>
        <h3>Client List</h3>
        <ul>
            {clients.map(client => <ClientCard key={client.id} {...client} />)}
        </ul>
      </div>
    )
}