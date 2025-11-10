import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importación de componentes
import Menu from "./components/menu/Menu.jsx";
import Intro from "./components/intro/Intro.jsx";
import MenuReporte from "./components/menureporte/MenuReporte.jsx";
import RegistroInventario from "./components/inventario/RegistroInventario.jsx";
import ReporteMensual from "./components/grafica_mensual/ReporteMensual.jsx";
import ReporteSemanal from "./components/grafica_semanal/ReporteSemanal.jsx";
import ReporteAnual from "./components/grafica_Anual/ReporteAnual.jsx";
import ReporteGastos from "./components/ReportGastos/ReporteGastos.jsx";
import ReporteDiario from "./components/grafica_diaria/ReporteDiario.jsx";
import RegistroGasto from "./components/RegistrGastos/RegistroGastos.jsx";
import Login from "./components/login/Login.jsx";
import Registro from "./components/registro/Registro.jsx";
import Ventas from "./components/RegistroVen/Ventas.jsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Intro />} />

        {/* Ruta de inicio */}
        <Route path="/intro" element={<Intro />} />

        {/* Menú de reportes */}
        <Route path="/menureporte" element={<MenuReporte />} />

        {/* Inventario */}
        <Route path="/registroinventario" element={<RegistroInventario />} />

        {/* Reporte de ganancias mensual */}
        <Route path="/reportemensual" element={<ReporteMensual />} />

        {/* Reporte de ganancias semanal */}
        <Route path="/reportesemanal" element={<ReporteSemanal />} />

        {/* Reporte de ganancias Anual */}
        <Route path="/reporteanual" element={<ReporteAnual />} /> 

        {/* Menu principal */}
        <Route path="/menu" element={<Menu />} />
        
        {/* Reporte de gastos */}
        <Route path="/reportegastos" element={<ReporteGastos />} />

        {/* Reporte de diario */}
        <Route path="/reportediario" element={<ReporteDiario />} />
        
        {/* Registro Gastos */}
        <Route path="/registrogastos" element={<RegistroGasto />} />
        
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Registro */}
        <Route path="/registro" element={<Registro />} />

         {/* RegistroVen */}
        <Route path="/registro-ventas" element={<Ventas />} />



      </Routes>
    </Router>
  );
}

export default App;