import React, { useState } from 'react';
import Footer from '../Components/Footer';
import { Toaster, toast } from 'sonner';
import Whatsapp from '../assets/icons/whatsapp.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    motivo: 'proyecto',
    msg: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) {
      toast.error('Por favor, completa todos los campos obligatorios.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error('Por favor, introduce una dirección de correo electrónico válida.');
      return;
    }
    try {
      const response = await fetch('https://formspree.io/f/mqkoegol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success('¡Gracias por contactarme! Me pondré en contacto contigo pronto.');
        setFormData({ name: '', email: '', motivo: 'proyecto', msg: '' });
      } else {
        toast.error('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      toast.error('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const handleWhatsapp = () => {
    const mensaje = 'Hola, estoy en contacto directo contigo desde mi sitio web.';
    const url = `https://api.whatsapp.com/send?phone=3425045770&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="contact-div">
        <div className="contact-bg" />
        <div className="contact-inner">
          <div className="contact-header">
            <h2>Contact</h2>
            <p className="contact-subtitle">
              ¿Tenés un proyecto en mente o una oferta laboral?<br />
              Escribime o contactame directo por WhatsApp.
            </p>
          </div>
          <div className="contact-glass">
            <form onSubmit={handleSubmit}>
              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" placeholder="¿Quién eres?" value={formData.name} onChange={handleChange} autoComplete="name" />
                </div>
                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder="name@email.com" value={formData.email} onChange={handleChange} autoComplete="email" />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="motivo">Motivo</label>
                <select id="motivo" name="motivo" value={formData.motivo} onChange={handleChange}>
                  <option value="proyecto">Proyectar una idea</option>
                  <option value="oferta">Por una oferta laboral</option>
                  <option value="cafe">Tomamos un café y te cuento</option>
                </select>
              </div>
              <div className="contact-field">
                <label htmlFor="msg">Mensaje</label>
                <textarea id="msg" rows="4" placeholder="Dejá tu mensaje..." value={formData.msg} onChange={handleChange} />
              </div>
              <div className="contact-actions">
                <button type="submit" className="contact-submit">Enviar →</button>
                <button type="button" className="contact-whatsapp" onClick={handleWhatsapp}>
                  <img src={Whatsapp} alt="WhatsApp" />
                  Contacto directo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
