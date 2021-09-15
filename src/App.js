
import React from 'react';
import './App.css';
import db from './firebase'
import {collection , getDocs, doc, setDoc} from 'firebase/firestore/lite'

function App() {

  
  const usuario = {
    id: 1,
    nombre: 'sinID',

    estado: 'soltero'
  }


setDoc(doc(db,'usuarios','IDusuario'), usuario)

/*const getDatos = async () => {
  const col = collection(db, 'usuarios')
  const datos = await getDocs(col)
  const datosr = datos.docs.map(doc=> doc.data())

console.log(datosr)

}
getDatos()*/

  return (
    <div className="App">
      <h1>hola hola</h1>
      
    </div>
  );
}

export default App;
