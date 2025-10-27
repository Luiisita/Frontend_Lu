import React, { useState } from 'react';

function SaleModal({ onClose, onAdd }) {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [quantity, setQuantity] = useState('');
  const [payments, setPayments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (payments.length === 0) {
      alert('Por favor selecciona al menos un método de pago');
      return;
    }
    onAdd({ name, icon, quantity, payments });
  };

  const handlePaymentChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setPayments([...payments, value]);
    } else {
      setPayments(payments.filter(p => p !== value));
    }
  };

  return (
    <div className="modal active" onClick={(e) => e.target.className === 'modal active' && onClose()}>
      <div className="modal-content">
        <h2>Agregar Venta</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre del producto" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="Ícono" value={icon} onChange={(e) => setIcon(e.target.value)} required />
          <input type="number" placeholder="Cantidad" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          <div>
            <label>
              <input type="checkbox" value="CR" onChange={handlePaymentChange} /> CR (💵)
            </label>
            <label>
              <input type="checkbox" value="efectivo" onChange={handlePaymentChange} /> Efectivo (✓)
            </label>
            <label>
              <input type="checkbox" value="dañado" onChange={handlePaymentChange} /> Dañado (✗)
            </label>
          </div>
          <button type="submit">Agregar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default SaleModal;
