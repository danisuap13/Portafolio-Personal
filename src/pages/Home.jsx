import React from 'react'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Email from '@mui/icons-material/Email'
import Github from '@mui/icons-material/GitHub'
import '../styles/Home.css'


function Home() {
  return (
	<div className='home'>
		<div className='about'>
			<h2>Hi, My Name is Daniel</h2>
		<div className='propmt'>
			<p>A FrontEnd developer with a passion for learning and creating.</p>
			<LinkedIn />
			<Email />
			<Github />
		</div>
		</div>
		<div className='skills'>
			<h1> Skills </h1>
			<ol className='list'>
				<li className='Item'>
					<h2> Front-End</h2>
					<span> ReactJS, HTML, CSS, NPM, TailwindCss </span>
				</li>
				<li className='Item'>
					<h2> Back-End</h2>
					<span> NodeJS, PostgreSQL, ExpressJS </span>
				</li>
				<li className='Item'>
					<h2> Languages</h2>
					<span> JavaScript, TypeScript </span>
				</li>
			</ol>
		</div>
	</div>
  )
}

export default Home
