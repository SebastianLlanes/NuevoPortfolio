// import React, { useState } from 'react';
// import Footer from '../Components/Footer';
// import { Toaster, toast } from 'sonner';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     motivo: 'proyecto',
//     msg: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Aquí puedes agregar la lógica para enviar el formulario por correo electrónico
//     // Por ahora, simplemente mostraremos un mensaje en el toaster
//   };

//   return (
//     <>
//       <div className='contact-div'>
//         <h2>Contact</h2>
//         <section id='hire'>
//           <form onSubmit={handleSubmit}>
//             <div className='field name-box'>
//               <input type='text' id='name' placeholder='Quién eres?' value={formData.name} onChange={handleChange} autoComplete="name" />
//               <label htmlFor='name'>name</label>
//             </div>

//             <div className='field email-box'>
//               <input type='text' id='email' placeholder='name@email.com'  value={formData.email} onChange={handleChange} autoComplete="email" />
//               <label htmlFor='email'>Email</label>
//             </div>
//             <div className='field'>
//               <label htmlFor='motivo'>Motivo:</label>
//               <select id='motivo' name='motivo' value={formData.motivo} onChange={handleChange} autoComplete="motivo">
//                 <option value='proyecto'>Proyectar una idea</option>
//                 <option value='oferta'>Por una oferta laboral</option>
//                 <option value='cafe'>Tomamos un café y te cuento</option>
//               </select>
//             </div>

//             <div className='field msg-box'>
//               <textarea
//                 id='msg'
//                 rows='4'
//                 placeholder='Deja tu mensaje...'
//                 value={formData.msg} onChange={handleChange} autoComplete="msg"
//               />
//               <label htmlFor='msg'>Msg</label>
//             </div>
//             <Toaster richColors position="top-center" />
//             <input 
//               onClick={() => toast.success('¡Gracias por contactarme! Me pondre en contacto contigo pronto.')}
//               className='button'
//               type='submit' 
//               value='Send' 
//               />
//           </form>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Contact;
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import { Toaster, toast } from 'sonner';

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
    
    // Envío de datos a través de Formspree
    try {
      const response = await fetch('https://formspree.io/f/mqkoegol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Si el envío es exitoso, muestra un mensaje de éxito
        toast.success('¡Gracias por contactarme! Me pondré en contacto contigo pronto.');
        // Limpiar el formulario después de enviarlo con éxito
        setFormData({
          name: '',
          email: '',
          motivo: 'proyecto',
          msg: ''
        });
      } else {
        // Si hay un error en el envío, muestra un mensaje de error
        toast.error('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Si hay un error en la conexión, muestra un mensaje de error
      toast.error('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <>
      <div className='contact-div'>
        <h2>Contact</h2>
        <section id='hire'>
          <form onSubmit={handleSubmit}>
            <div className='field name-box'>
              <input type='text' id='name' placeholder='Quién eres?' value={formData.name} onChange={handleChange} autoComplete="name" />
              <label htmlFor='name'>name</label>
            </div>

            <div className='field email-box'>
              <input type='text' id='email' placeholder='name@email.com'  value={formData.email} onChange={handleChange} autoComplete="email" />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='field'>
              <label htmlFor='motivo'>Motivo:</label>
              <select id='motivo' name='motivo' value={formData.motivo} onChange={handleChange} autoComplete="motivo">
                <option value='proyecto'>Proyectar una idea</option>
                <option value='oferta'>Por una oferta laboral</option>
                <option value='cafe'>Tomamos un café y te cuento</option>
              </select>
            </div>

            <div className='field msg-box'>
              <textarea
                id='msg'
                rows='4'
                placeholder='Deja tu mensaje...'
                value={formData.msg} onChange={handleChange} autoComplete="msg"
              />
              <label htmlFor='msg'>Msg</label>
            </div>
            <Toaster richColors position="top-center" />
            <input 
              className='button'
              type='submit' 
              value='Send' 
              />
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
