import React from 'react'
import './portfolio.css'
import img1 from '../../assests/portfolioimg1.webp'
import img2 from '../../assests/portfolioimg2.png'
import img3 from '../../assests/portfolioimg3.png'
import img4 from '../../assests/portfolioimg4.webp'
import img5 from '../../assests/portfolioimg5.webp'
const data =[
  {
    id:1,
    image:img1,
    title:'Crypto Currency Dashboard & Finicial Visualization',
    github:"https://github.com/Mspatil9",
    demo:'https://dribbble.com/shots/17610739-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id:2,
    image:img1,
    title:'Crypto Currency Dashboard & Finicial Visualization',
    github:"https://github.com/Mspatil9",
    demo:'https://dribbble.com/shots/17610739-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id:3,
    image:img1,
    title:'Crypto Currency Dashboard & Finicial Visualization',
    github:"https://github.com/Mspatil9/Newsletter",
    demo:'https://infinite-sierra-77175.herokuapp.com/',
  },
  {
    id:4,
    image:img4,
    title:'Crypto Currency Dashboard & Finicial Visualization',
    github:"https://github.com/Mspatil9",
    demo:'https://dribbble.com/shots/17610739-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id:5,
    image:img5,
    title:'Crypto Currency Dashboard & Finicial Visualization',
    github:"https://github.com/Mspatil9",
    demo:'https://dribbble.com/shots/17610739-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id:6,
    image:img5,
    title:'Crypto Currency Dashboard & Finicial Visualization',
    github:"https://github.com/Mspatil9",
    demo:'https://dribbble.com/shots/17610739-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(<article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} /></div>
            <h3>{title}</h3><div className="portfolio__item-cta">
            <a href={github}className='btn'>Github</a>
            <a href={demo}className='btn btn-primary'>Live Demo</a></div>
  
          </article>)
          })
        }
        
        </div>
      </section>
  )
}

export default Portfolio