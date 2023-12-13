import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
	<div className='footer'>
	  <div className='socialMedia'>
			<InstagramIcon />
			<LinkedInIcon />
		</div>
	  <p> &copy; 2022 danieljosesuarez2003@gmail.com </p>
	</div>
  )
}

export default Footer
