// components/BillingForm.js
import React, { useState } from 'react';

const BillingForm = ({ setBillingDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBillingDetails(formData); // Pass data to parent component
  };

  return (
    <form className="billing-form md:w-[400px] w-[330px]" onSubmit={handleSubmit}>
      <h2>Billing Information</h2>
      <label>
        Full Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <textarea name="address" value={formData.address} onChange={handleChange} required />
      </label>
      <button type="submit">Save Billing Details</button>
    </form>
  );
};

export default BillingForm;
