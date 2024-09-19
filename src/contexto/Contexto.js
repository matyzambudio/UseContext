import React, { createContext ,useState} from 'react'

export const Contexto = createContext(); //Importamos el contexto y lo Creamos.

// Paso 1 :Creamos contexto para acceder a los datos que se 
//         han guardado de los diferentes hijos
// Paso 2: debemos decirles quienes pueden acceder a esos datos para ello creamos
//        un componente padre (en el App.jsx) que envuelva a todos.

export const Datos = ({ children }) =>{  // afectara a todos sus hijos!
      
    //tiene que devolver todo lo siguiente
    //Provider : accede a los Datos de Contexto y los modifica

    const [color,setColor] = useState("");
    return (                          /*queremos pasar a ese elemento usamos value */
           <Contexto.Provider value={{color,
            setColor}}>       {/*pasamos dos cosas la Variable y la funcion que la midifica
                               ej : color , setColor*/} 
               {children}         
           </Contexto.Provider>   
    )
}