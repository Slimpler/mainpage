import React from 'react';
import { Container } from 'semantic-ui-react';
import { validate } from "./rut"
export default function Validador(params) {
    
    const [rutIngresado, setRutIngresado] = React.useState(params.valor);

    const [clave, setClave] = React.useState("");
    

    const change = (e)=>{
        setRutIngresado(e.target.value)
    }
    const onChangePassword = (e)=>{
        setClave(e.target.value);
    }

     if(clave === "uvalpo") return <p><h3>¡¡Perfecto es un rut válido!!</h3> <img src= "https://3.bp.blogspot.com/-n5dX1cTbtSA/Wju4dnR3sGI/AAAAAAAALVU/sF1m9Y9VDFkrKai5itdyNDt4SXZ1_LHowCLcBGAs/w1200-h630-p-k-no-nu/objet%2Blogrado.jpg"/></p>

     return  (<div>
         <Container textAlign="center">
             <h1>Bienvenido</h1>
             <h3> --Este es un validador de rut-- </h3>

        <input type="text" value={rutIngresado} onChange={change}  />
                 <p>Ingrese su rut sin puntos ni guion</p>
       { validate(rutIngresado) && 
           <input type="password"  value={clave} onChange={onChangePassword}  />
           
       } 
       </Container>
       </div>)
}