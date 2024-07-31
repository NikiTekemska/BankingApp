import { createContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import * as clientService from '../services/clientService';

export const ClientContext = createContext();
export const ClientProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);
    const [matches, setMatch] = useState([]);

    useEffect(()=>{
        clientService.getAll()
            .then(data => {
                setClients(data)
            });
    },[])

    const onSearchSubmit = (data) => {
        console.log(data.search);
        if(!data.search){
        return {};
        }
        setMatch(clients.filter(client => client.title.match(data.search)));
    
        navigate("/search");
        
    };


    const onCreateSubmit = async (data) => {
        if( data.firstName =="" || data.secondName=="" || data.familyName=="" || data.idCardNumber == "" || data.address == "" || data.bulgarianEgn == ""){
            return alert("You have missed to fill one filed!")
        }
        const newClient = await clientService.create(data)
        console.log(newClient);

        setClients(state => [...state, newClient]);
        //navigate(`/recipes/${data.category}`);
    };


    const onEditSubmit = async (values) => {
        if( values.firstName =="" || values.secondName=="" || values.familyName=="" || values.idCardNumber == "" || values.address == "" || values.bulgarianEgn == ""){
            return alert("You have missed to fill one filed!")
        }
        await clientService.update(values._id, values);
        //change state
        //navigate(`recipes/${values.category}/`);//${values._id}
    }
    const contextValues = {
    
        onCreateSubmit,
        onEditSubmit,
        onSearchSubmit

    }
    return (
        <ClientContext.Provider value={contextValues}>
            {children}
        </ClientContext.Provider>
    )
}