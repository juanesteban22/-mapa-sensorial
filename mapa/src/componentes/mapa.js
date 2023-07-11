import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Mapa = ({ datosMapa, setDatosMapa }) => {
  const [series, setSeries] = useState([
    {
      name: datosMapa.nombreGrafica,
      data: Array(11).fill(0),
    },
  ]);
  
  useEffect(() => {
    const newData = [...series[0].data];
    Object.keys(datosMapa).forEach((key, index) => {
      if (typeof datosMapa[key] === 'number' && index < newData.length) {
        newData[index] = Math.min(Math.max(parseFloat(datosMapa[key]) || 0, 0), 10);
      }
    });
    setSeries((prevSeries) => [{ ...prevSeries[0], data: newData }]);
  }, [datosMapa, series]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const newData = [...series[0].data];
    newData[index] = Math.min(Math.max(parseFloat(value) || 0, 0), 10);
    setSeries([{ ...series[0], data: newData }]);
  };
  const options = {
    chart: {
      height: datosMapa.altoGrafico,
      type: 'radar',
      background: datosMapa.colorFondo,
      foreColor: datosMapa.colorTexto,
    },
    dataLabels: {
      enabled: false,
      style: {
        fontSize: datosMapa.tamañoFuenteEtiquetas,
        fontFamily: datosMapa.tipoFuenteEtiquetas,
        fontWeight: 'bold',
        colors: [datosMapa.colorEtiquetas],
      },
    },
    title: {
      text: datosMapa.tituloGrafica,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        fontFamily: datosMapa.tipoFuenteCategorias,
        color: datosMapa.colorTexto,
      },
    },
    xaxis: {
      categories: [
        'Cacao',
        'Acido',
        'Astringente',
        'Amargo',
        'Afrutado',
        'Floral',
        'Nueces',
        'Panela/Malta',
        'Crudo/Verde',
        'Especies',
        'Caramelo',
      ],
      labels: {
        show: true,
        style: {
          colors: Array(11).fill(datosMapa.colorCatego),
          fontSize: datosMapa.tamañoFuenteCategorias,
          fontFamily: datosMapa.tipoFuenteCategorias,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 10,
      tickAmount: 5,
      labels: {
        show: true,
        style: {
          fontSize: datosMapa.tamañoFuenteCategorias,
          fontFamily: datosMapa.tipoFuenteCategorias,
        },
        offsetX: -20,
        offsetY: -1,
      },
    },
    markers: {
      size: 0,
      colors: 'red',
      shape: 'circle',
      radius: 2,
      showNullDataPoints: true,
    },
    fill: {
      colors: 'white',
      opacity: datosMapa.llenar,
    },
    stroke: {
      show: true,
      colors: ['blue'],
      width: datosMapa.gruesor,
      dashArray: 0,
    },
    plotOptions: {
      radar: {
        size: 100,
        polygons: {
          strokeWidth: 1,
          connectorColors: 'white',
          fill: {
            colors: [datosMapa.colorMapa, datosMapa.colorMapa],
          },
        },
      },
    },
  };
  return (
    <div>
      <ReactApexChart options={options} series={series} type="radar" height={350} />

      <div id="html-dist" className="contenedor">
        <div className="seccion1">
          <label htmlFor="input-1">Cacao</label>
          <input
            id="input-1"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(0, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-2">Acido</label>
          <input
            id="input-2"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(1, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-3">Astringente</label>
          <input
            id="input-3"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(2, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-4">Amargo</label>
          <input
            id="input-4"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(3, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-5">Afrutado</label>
          <input
            id="input-5"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(4, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-6">Floral</label>
          <input
            id="input-6"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(5, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-7">Nueces</label>
          <input
            id="input-7"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(6, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-8">Panela/Malta</label>
          <input
            id="input-8"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(7, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-9">Crudo/Verde</label>
          <input
            id="input-9"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(8, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-10">Especies</label>
          <input
            id="input-10"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(9, event)}
          />
        </div>
        <div className="seccion1">
          <label htmlFor="input-11">Caramelo</label>
          <input
            id="input-11"
            type="number"
            min="0"
            max="10"
            onChange={(event) => handleInputChange(10, event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Mapa;