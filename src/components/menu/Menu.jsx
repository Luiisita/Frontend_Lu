import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import LogoEmpren from "../../assets/Logo_Empren.png";

const Menu = () => {
  return (
    <div>
      <header className="barra-superior">
        <img src={LogoEmpren} alt="Logo" className="logoem" />
      </header>

      <div>
        <h1 className="Titulo">Menú</h1>
        <hr />
      </div>
      <div className="Container">
        <div className="Botones">
          <a href="/usuarios"><i className="fas fa-user"></i> Usuarios</a>
          <a href="http://localhost:5173/registroinventario"><i className="fas fa-clipboard-list"></i> Inventarios</a>
          <a href="/registro-ventas"><i className="fas fa-cart-plus"></i> Registro de Ventas</a>
          <a href="/reporte-ventas"><i className="fas fa-chart-line"></i> Reporte de Ventas</a>
          <a href="http://localhost:5173/registrogastos"><i className="fas fa-wallet"></i> Registro de Gastos</a>
          <a href="http://localhost:5173/reportegastos"><i className="fas fa-file-invoice-dollar"></i> Reporte de Gastos</a>
          <a href="http://localhost:5173/menureporte"><i className="fas fa-dollar-sign"></i> Reporte de Ganancias</a>
          <a href="/ajustes"><i className="fas fa-cogs"></i> Ajustes</a>
        </div>
      </div>

      <div className="Container1">
        <button type="submit">Registrarse</button>
      </div>
    </div>
  );
};

export default Menu;
