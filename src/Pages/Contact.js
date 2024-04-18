import React from 'react';
import Footer from '../Components/Footer';

const Contact = () => {

  return (
    <>
      <div className="contact-div">
        <h2>Contact</h2>
        <section id="hire">
          <form>
            <div className="field name-box">
              <input type="text" id="name" placeholder="Who Are You?" />
              <label htmlFor="name">name</label>
            </div>

            <div className="field email-box">
              <input type="text" id="email" placeholder="name@email.com" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="field">
              <label htmlFor="motivo">Motivo:</label>
              <select id="motivo" name="motivo">
                <option value="proyecto">Para hablar de un proyecto</option>
                <option value="oferta">Por una oferta laboral</option>
                <option value="cafe">Tomamos un café y te cuento</option>
              </select>
            </div>

            <div className="field msg-box">
              <textarea
                id="msg"
                rows="4"
                placeholder="Your message goes here..."
              />
              <label htmlFor="msg">Msg</label>
            </div>

            <input className="button" type="submit" value="Send" />
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Contact;