import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
            
            
            <p className="footer-p">©2022 Carrizo Pet Shop | Todos los derechos reservados | Desarrollado por 
                <a href='https://www.linkedin.com/in/carlaricciardi/'> Carla Ricciardi</a></p>
                <a href='https://www.linkedin.com/in/carlaricciardi/'><LinkedInIcon className='footer-icon'></LinkedInIcon></a> 
                <a href='https://github.com/CarlaRicciardi'><GitHubIcon className='footer-icon'> </GitHubIcon></a>
            
        </div>
  )
}
