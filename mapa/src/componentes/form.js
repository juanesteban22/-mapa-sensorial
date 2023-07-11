// Componente FormularioMapa
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import  Mapa  from './mapa';


function FormularioMapa() {
  const [datosMapa, setDatosMapa] = useState({
    id: '',
    nombreGrafica: '',
    categoria: '',
    colorCatego: '',
    tamañoFuenteCategorias: '',
    tipoFuenteCategorias: '',
    altoGrafico: '',
    colorFondo: '',
    colorTexto: '',
    tituloGrafica: '',
    colorCuadro: '',
    tamañoFuenteEtiquetas: '',
    tipoFuenteEtiquetas: '',
    colorEtiquetas: '',
    colorNivelSensor: '',
    indicadorMapa: '',
    llenar: '',
    colorMapa: '',
    gruesor: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosMapa((prevDatos) => ({
      ...prevDatos,
      [name]: value
    }));
  };

  const handleAgregar = () => {
    axios
      .post('http://localhost:3001/create', datosMapa)
      .then(() => {
        Swal.fire({
          title: '<strong>Registro exitoso!</strong>',
          icon: 'success',
          timer: 5000
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...'
        });
      });
  };

  const handleActualizar = () => {
    axios
      .put('http://localhost:3001/update', datosMapa)
      .then(() => {
        Swal.fire({
          title: '<strong>Actualización exitosa!</strong>',
          icon: 'success',
          timer: 5000
        });
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...'
        });
      });
  };

  return (
    <div>
      <section className='contenedor'>
        <div className='seccion1'>
          <label>Id gráfica</label>
          <input
            value={datosMapa.id}
            onChange={handleInputChange}
            type='number'
            name='id'
            placeholder='Ingrese la ID de la gráfica'
          />
          <label>Nombre de la gráfica</label>
          <input
            value={datosMapa.nombreGrafica}
            onChange={handleInputChange}
            type='text'
            name='nombreGrafica'
            placeholder='Ingrese el nombre de la gráfica'
          />
        </div>

        <div className='seccion1'>
          <h2 className='ejey'>Ejes de la gráfica</h2>
          <br />
          <label>Categorías</label>
          <input
            value={datosMapa.categoria}
            onChange={handleInputChange}
            type='text'
            name='categoria'
            placeholder='Categoría'
          />
          <label>Color de las categorías</label>
          <select
            value={datosMapa.colorCatego}
            onChange={handleInputChange}
            name='colorCatego'
          >
            <option value='yellow'>Amarillo</option>
            <option value='red'>Rojo</option>
            <option value='blue'>Azul</option>
            <option value='#2E1300'>Café</option>
            <option value='grey'>Gris</option>
            <option value='green'>Verde</option>
            <option value='orange'>Naranja</option>
            <option value='black'>Negro</option>
            <option value='white'>Blanco</option>
          </select>
          <br />
          <label>Tamaño de fuente</label>
          <input
            value={datosMapa.tamañoFuenteCategorias}
            onChange={handleInputChange}
            type='number'
            name='tamañoFuenteCategorias'
            placeholder='Tamaño de la fuente'
          />
          <br />
          <label>Tipo de fuente</label>
          <select
            value={datosMapa.tipoFuenteCategorias}
            onChange={handleInputChange}
            name='tipoFuenteCategorias'
          >
            <option value="'Courier New', Courier, monospace">
              'Courier New', Courier, monospace
            </option>
            <option value="'Arial, Helvetica, sans-serif'">
              Arial, Helvetica, sans-serif
            </option>
            <option value="'Verdana, Geneva, Tahoma, sans-serif'">
              Verdana, Geneva, Tahoma, sans-serif
            </option>
            <option value='cursive'>Cursive</option>
            <option value='sans-serif'>Sans-serif</option>
          </select>
        </div>

        <div className='seccion1'>
          <h2>Estilos de la gráfica</h2>
          <label>Alto de la gráfica</label>
          <input
            value={datosMapa.altoGrafico}
            onChange={handleInputChange}
            type='number'
            name='altoGrafico'
            placeholder='Alto de la gráfica'
          />
          <br />
          <label>Color de fondo</label>
          <select
            value={datosMapa.colorFondo}
            onChange={handleInputChange}
            name='colorFondo'
          >
            <option value='yellow'>Amarillo</option>
            <option value='red'>Rojo</option>
            <option value='blue'>Azul</option>
            <option value='#2E1300'>Café</option>
            <option value='grey'>Gris</option>
            <option value='green'>Verde</option>
            <option value='orange'>Naranja</option>
            <option value='black'>Negro</option>
            <option value='white'>Blanco</option>
          </select>
          <br />
          <label>Color de texto</label>
          <select
            value={datosMapa.colorTexto}
            onChange={handleInputChange}
            name='colorTexto'
          >
            <option value='yellow'>Amarillo</option>
            <option value='red'>Rojo</option>
            <option value='blue'>Azul</option>
            <option value='#2E1300'>Café</option>
            <option value='grey'>Gris</option>
            <option value='green'>Verde</option>
            <option value='orange'>Naranja</option>
            <option value='black'>Negro</option>
            <option value='white'>Blanco</option>
          </select>
          <br />
          <label>Título de la gráfica</label>
          <input
            value={datosMapa.tituloGrafica}
            onChange={handleInputChange}
            type='text'
            name = 'tituloGrafica'
            placeholder='Título de la gráfica'
          />
          <br />
          <label>Color del cuadro</label>
          <select
            value={datosMapa.colorCuadro}
            onChange={handleInputChange}
            name='colorCuadro'
          >
            <option value='yellow'>Amarillo</option>
            <option value='red'>Rojo</option>
            <option value='blue'>Azul</option>
            <option value='#2E1300'>Café</option>
            <option value='grey'>Gris</option>
            <option value='green'>Verde</option>
            <option value='orange'>Naranja</option>
            <option value='black'>Negro</option>
            <option value='white'>Blanco</option>
          </select>
        </div>

        <div className='seccion1'>
          <h2>Etiquetas de los valores</h2>
          <label>Tamaño de la fuente</label>
          <input
            value={datosMapa.tamañoFuenteEtiquetas}
            onChange={handleInputChange}
            type='number'
            name='tamañoFuenteEtiquetas'
            placeholder='Tamaño de la fuente'
          />
          <br />
          <label>Tipo de fuente</label>
          <select
            value={datosMapa.tipoFuenteEtiquetas}
            onChange={handleInputChange}
            name='tipoFuenteEtiquetas'
          >
            <option value="'Courier New', Courier, monospace">
              'Courier New', Courier, monospace
            </option>
            <option value="'Arial, Helvetica, sans-serif'">
              Arial, Helvetica, sans-serif
            </option>
            <option value="'Verdana, Geneva, Tahoma, sans-serif'">
              Verdana, Geneva, Tahoma, sans-serif
            </option>
            <option value='cursive'>Cursive</option>
            <option value='sans-serif'>Sans-serif</option>
          </select>
          <br />
          <label>Color</label>
          <select
            value={datosMapa.colorEtiquetas}
            onChange={handleInputChange}
            name='colorEtiquetas'
          >
            <option value='yellow'>Amarillo</option>
            <option value='red'>Rojo</option>
            <option value='blue'>Azul</option>
            <option value='#2E1300'>Café</option>
            <option value='grey'>Gris</option>
            <option value='green'>Verde</option>
            <option value='orange'>Naranja</option>
            <option value='black'>Negro</option>
            <option value='white'>Blanco</option>
          </select>
          <label>Color del nivel del sensor</label>
          <select
            value={datosMapa.colorNivelSensor}
            onChange={handleInputChange}
            name='colorNivelSensor'
          >
            <option value='yellow'>Amarillo</option>
            <option value='red'>Rojo</option>
            <option value='blue'>Azul</option>
            <option value='#2E1300'>Café</option>
            <option value='grey'>Gris</option>
            <option value='green'>Verde</option>
            <option value='orange'>Naranja</option>
            <option value='black'>Negro</option>
            <option value='white'>Blanco</option>
          </select>
        </div>
        <div className='seccion1'>
          <h2>Otros campos</h2>
          <label>Indicador de mapa</label>
          <input
            value={datosMapa.indicadorMapa}
            onChange={handleInputChange}
            type='text'
            name='indicadorMapa'
            placeholder='Indicador de mapa'
          />
          <br />
          <label>Llenar</label>
          <select
            value={datosMapa.llenar}
            onChange={handleInputChange}
          >
            <option value='1'>si</option>
            <option value='0'>no</option>
          </select>
          <br />
          <label>Color del mapa</label>
          <select
            value={datosMapa.colorMapa}
            onChange={handleInputChange}
            name='colorMapa'
          >
            <option value='yellow'>Amarillo</option>
            <option value='red'>Rojo</option>
            <option value='blue'>Azul</option>
            <option value='#2E1300'>Café</option>
            <option value='grey'>Gris</option>
            <option value='green'>Verde</option>
            <option value='orange'>Naranja</option>
            <option value='black'>Negro</option>
            <option value='white'>Blanco</option>
          </select>
          <br />
          <label>Grosor</label>
          <input
            value={datosMapa.gruesor}
            onChange={handleInputChange}
            type='number'
            name='gruesor'
            placeholder='Grosor'
          />
        </div>
      <div className='seccion1'>
          <button onClick={handleAgregar}>Guardar</button>
          <button onClick={handleActualizar}>Actualizar</button>
        </div>
      </section>

      <section className='contenedor'>
        <Mapa datosMapa={datosMapa} />
      </section>
    </div>
  );
}
export default FormularioMapa;