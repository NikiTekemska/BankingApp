import { useForm } from "../hooks/useForm";
import { useContext } from "react";
import { ClientContext } from "../context/ClientContext";


export const CreateClient = () => {
    const { onCreateSubmit } = useContext(ClientContext)
    const { values, changeHandler, onSubmit } = useForm({
        firstName: '',
        secondName: '',
        familyName: '',
        idCardNumber: '',
        address: '',
        bulgarianEgn: ''
    }, onCreateSubmit);


    return (    
        <form method="post" onSubmit={onSubmit}>
          <div className="section">
            <h2>Clients</h2>
            <div>
              <input type="text" name="firstName" placeholder="First Name" value={values.firstName} onChange={changeHandler}/>
              <input type="text" name="secondName" placeholder="Second Name" value={values.secondName} onChange={changeHandler}/>
              <input type="text" name="familyName" placeholder="Last Name" value={values.familyName} onChange={changeHandler}/>
              <input type="text" name="idCardNumber" placeholder="ID Number" value={values.idCardNumber} onChange={changeHandler}/>
              <input type="text" name="address" placeholder="Address" value={values.address} onChange={changeHandler} />
              <input type="text" name="bulgarianEgn" placeholder="egn" value={values.bulgarianEgn} onChange={changeHandler} />
              <button>
                Create
              </button>
            </div>
            </div>
            </form>
            )
        
}