const actualizarReporte = async (anioParam) => {
  const dataFalsa = {
    labels: ["Enero", "Febrero", "Marzo", "Abril"],
    datasets: [
      {
        label: `Ganancias ${anioParam || "Prueba"}`,
        data: [120, 250, 180, 400],
        borderColor: "rgba(153,102,255,1)",
        backgroundColor: "rgba(153,102,255,0.2)",
      },
    ],
  };
  setDatosChart(dataFalsa);
};
