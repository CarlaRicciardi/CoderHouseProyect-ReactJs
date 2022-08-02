import React from 'react'
import './Contacto.css'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contacto() {
  return (
    <div>
        <h2 className='title'>CONTACTO</h2>

        <img className='imgContacto' src="/assets/img/imgContacto-02.jpg" alt="" />


        <p className='parrafoContacto'>
        En Carrizo Petshop nos preocupamos por el bienestar de tu mascota.
        <br/>
        Brindamos asesoramiento gratuito a cada uno de nuestros clientes.
        <br/>
        Hacemos envíos GRATIS en Córdoba Capital.
        <br/>
        Escribinos y te asesoramos para encontrar el
        alimento ideal para tu mascota!
        <br/>
        <br/>
        Encontranos en:
        </p>
      
      <div className='iconsRedes iconsHover'>
        <a href='https://walink.co/037695'><WhatsAppIcon className='redes-icon' style={{fontSize: '40px'}}/></a>
        <a href='https://www.instagram.com/carrizopetshop/'><InstagramIcon className='redes-icon' style={{fontSize: '40px'}}/></a>
        <a href='https://www.facebook.com/Carrizopetshop'><FacebookIcon className='redes-icon' style={{fontSize: '40px'}}/></a>
      </div>

     </div>
  )
}
