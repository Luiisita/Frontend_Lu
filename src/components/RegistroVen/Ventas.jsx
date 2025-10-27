import React, { useState, useEffect } from 'react';
import './RegistroVen.css';
import logo from '../assets/Logo_Empren.png';
import SaleModal from './SaleModal';  // Ejemplo
import EditModal from './EditModal';
import SuccessMessage from './SeccessMessage.jsx';


function Ventas() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Cuaderno', icon: '📓', quantity: 10, payments: ['efectivo'] },
    { id: 2, name: 'Borrador', icon: '🧹', quantity: 8, payments: ['efectivo'] },
    { id: 3, name: 'Tajalápiz', icon: '✏️', quantity: 10, payments: ['efectivo'] },
  ]);
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const openModal = () => setShowSaleModal(true);
  const closeModal = () => setShowSaleModal(false);
  const openEditModal = (product) => {
    setEditingProduct(product);
    setShowEditModal(true);
  };
  const closeEditModal = () => {
    setEditingProduct(null);
    setShowEditModal(false);
  };

  const addSale = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setShowSaleModal(false);
    showSuccess('✓ Venta agregada exitosamente');
  };

  const saveEdit = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    closeEditModal();
    showSuccess('✓ Producto actualizado exitosamente');
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    closeEditModal();
    showSuccess('✓ Producto eliminado exitosamente');
  };

  const showSuccess = (msg) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div>
      <header className="barra-superior">
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <label>
        <input className="lineas-check" type="checkbox" />
        <div className="Lineas">
          <span className="top_line common"></span>
          <span className="middle_line common"></span>
          <span className="bottom_line common"></span>
        </div>
        <div className="Menu">
          <h1 className="menu_titulo">Menu</h1>
          <ul>
            <li><a href="#"><i className="fas fa-user"></i><span>Usuarios</span></a></li>
            <li><a href="#"><i className="fas fa-clipboard-list"></i><span>Inventario</span></a></li>
            <li><a href="#"><i className="fas fa-cart-plus"></i><span>Registro De Ventas</span></a></li>
            <li><a href="#"><i className="fas fa-chart-line"></i><span>Reporte De Ventas</span></a></li>
            <li><a href="#"><i className="fas fa-wallet"></i><span>Registro De Gastos</span></a></li>
            <li><a href="#"><i className="fas fa-file-invoice-dollar"></i><span>Reporte De Gastos</span></a></li>
            <li><a href="#"><i className="fas fa-cogs"></i><span>Ajustes</span></a></li>
          </ul>
        </div>
      </label>

      <div className="main-content">
        <div className="title">
          <h1>REGISTRO DE VENTAS</h1>
          <div className="subtitle">★</div>
        </div>

        <div className="products-label">• PRODUCTOS:</div>

        <div id="productsList">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <div className="product-icon">{product.icon}</div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-quantity">Cantidad: {product.quantity}</div>
                <div className="product-options">
                  {['CR', 'efectivo', 'dañado'].map(type => (
                    <label key={type} className="option">
                      <input type="checkbox" checked={product.payments.includes(type)} readOnly />
                      <span className="option-icon">
                        {type === 'CR' ? '💵' : type === 'efectivo' ? '✓' : '✗'}
                      </span> {type.toUpperCase()}
                    </label>
                  ))}
                </div>
              </div>
              <button className="edit-btn" onClick={() => openEditModal(product)}>
                <i className="fas fa-edit"></i>
              </button>
            </div>
          ))}
        </div>

        <button className="add-sale-btn" onClick={openModal}>+</button>
      </div>

      {showSaleModal && <SaleModal onClose={closeModal} onAdd={addSale} />}
      {showEditModal && <EditModal product={editingProduct} onClose={closeEditModal} onSave={saveEdit} onDelete={deleteProduct} />}
      {successMessage && <SuccessMessage message={successMessage} />}
    </div>
  );
}

export default Ventas;
