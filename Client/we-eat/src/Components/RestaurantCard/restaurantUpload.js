// based on https://www.pluralsight.com/guides/uploading-files-with-reactjs
// and https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples

import React, { useState, useEffect } from "react";

import style from "./restautantUpload.module.css";

export default function Restaurant() {
    /* useEffect(() => {
        //NOT really an action for React-Redux but placed in actions file
        addRestaurant({ nombre:"Tuetano", direccion:"Morelos", area_de_reparto: 1, 
        actividad:"Abierto", estatus: "En_Registro", 
        nombreCorp: "We-Eat-Corp", direccionCorp: "Domicilio Corporativo"  });      
      }, []); */
    const [input, setInput] = useState({ 
        nombre: "", direccion: "", area_de_reparto:"", actividad:"", estatus:"",
        nombreCorp:"",  direccionCorp:""
    });
    console.log(input)
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const onChangeHandler = (e) => {
        console.log(e.target.files[0]);
        setSelectedFile(e.target.files[0]);
        setIsFilePicked(true);
        console.log(input)
    }

    const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
        console.log(input)
      }

    const onSubmit = async() => {
        const formData = new FormData();
        //formData.append('username', 'Chris');
		formData.append('file', selectedFile);
        for(var pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
         }
         
		await fetch(
			'http://localhost:4000/restaurantes/agregarRestaurantes',
			{
				method: 'POST',
                headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(input),
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
        await fetch(
			'http://localhost:4000/restaurantes/agregarImgRest',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

    return (
        <form onSubmit={onSubmit}>
            <h1>Registro de Nuevo Restaurant</h1>
            <input
                name= 'nombre'
                value = {input.nombre}
                placeholder="Nombre del Restaurante"
                onChange={(e) =>handleInputChange(e)}
                className= {style.nombreRest}
            /> 
            <input
                name= "direccion"
                value={input.direccion}
                placeholder = "Direccion"
                onChange={(e) => handleInputChange(e)}
            />
            <input
                name= "area_de_reparto"
                value= {input.area_de_reparto}
                placeholder = "Area de Reparto en Km"
                onChange={(e) => handleInputChange(e)}
            />
            {/* <input
                name= "actividad"
                value= {input.actividad}
                placeholder = "Abierto / Cerrado / Pausa"
                onChange={(e) => handleInputChange(e)}
            /> */}
            <label>Estatus de Actividad</label>
            <select 
                id="actividad" 
                name="actividad"
                value= {input.actividad}
                onChange={(e) => handleInputChange(e)}
            >
                <option value="Abierto">Abierto</option>
                <option value="Cerrado">Cerrado</option>
                <option value="Pausa">Pausa</option>
            </select>
            <label>Estatus de Registro</label>
            <select 
                id="estatus" 
                name="estatus"
                value= {input.estatus}
                onChange={(e) => handleInputChange(e)}
            >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
                <option value="En_Registro">En Registro</option>
                <option value="En_Baja">Baja</option>
            </select>
            <input
                name= "nombreCorp"
                value= {input.nombreCorp}
                placeholder="Nombre del Corporativo"
                onChange={(e) => handleInputChange(e)}
            />
            <input
                name= "direccionCorp"
                value={input.direccionCorp}
                placeholder="Direccion del Corporativo"
                onChange={(e) => handleInputChange(e)}
            />
            <input type="file" name="file" onChange={onChangeHandler} className={style.file}/>
            {isFilePicked ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filtype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate: {''}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ):(
               <p> Seleccione una foto de su Restaurante</p> 
            )}
            
                <input type="submit" className={style.submit}/>
                {/* <button onClick={onSubmit}>Submit</button> */}
            
        </form> 
    )
};