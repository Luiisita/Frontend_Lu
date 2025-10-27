import React, { useState, useEffect } from 'react';

function EditModal({ product, onClose, onSave, onDelete }) {
  const [name, setName] = useState(product?.name || '');
  const [icon, setIcon] = useState(product?.icon || '');
  const [quantity, setQuantity] = useState(product?.quantity || '');
  const [payments, setPayments] = useState(product?.payments || []);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setIcon(product.icon);
      setQuantity(product.quantity);
      setPayments(product.payments);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (payments.length === 0) {
      alert('Por favor selecciona al menos un método de pago');
      return;
    }
    onSave({ ...product, name, icon, quantity, payments });
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
        <h2>Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre del producto" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="text" placeholder="Ícono" value={icon} onChange={(e) => setIcon(e.target.value)} required />
          <input type="number" placeholder="Cantidad" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          <div>
            <label>
              <input type="checkbox" value="CR" checked={payments.includes('CR')} onChange={handlePaymentChange} /> CR (💵)
            </label>
            <label>
              <input type="checkbox" value="efectivo" checked={payments.includes('efectivo')} onChange={handlePaymentChange} /> Efectivo (✓)
            </label>
            <label>
              <input type="checkbox" value="dañado" checked={payments.includes('dañado')} onChange={handlePaymentChange} /> Dañado (✗)
            </label>
          </div>
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => onDelete(product.id)}>Eliminar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
