  import { useState } from 'react';
  import axios from 'axios';

  import { url } from '../../config/config';
    
  import './Contact.css';
  
  function Contact() {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [subject, setSubject] = useState([]);
    const [message, setMessage] = useState([]);

    const data = {
      name, email, subject, message
    }

    const sendEmail = async (event) => {
      try{
       event.preventDefault()
        await axios.post(`${url}/emails`, data);
        alert("Sucesso! Sua mensagem foi enviada!")
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      } catch (error) {
        alert(`Algo deu errado: ${error}`)
      }
    }

      return (
        <section className='contact' id="contact">
          <div className='contact-content'>
            <div className='forms'>
              <form className='Form' onSubmit={sendEmail}>
                <input
                value={name} 
                type="text" 
                name="name" 
                placeholder="Digite seu nome"
                required
                onChange={(e) => setName(e.target.value)}
                 />
                <input
                value={email}  
                type="email"
                name="email"
                placeholder="Digite seu melhor e-mail"
                required
                onChange={(e) => setEmail(e.target.value)} 
                />
                <input
                value={subject} 
                type="text" 
                name="subject"
                placeholder="Digite o assunto"
                required
                onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                value={message} 
                name="message"
                placeholder="Tire suas dúvidas ou nos mande uma mensagem" 
                rows="10" 
                required
                onChange={(e) => setMessage(e.target.value)}
                />
                <button className="form-buttom" type='submit'>ENVIAR</button>
              </form>
            </div>
          </div>
        </section>
      );
    }
  
  export default Contact;
