import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.png"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.png"
const Portfolio = () => {
const data=[
    {
      id:1,
      image:IMG1,
      title:"Exam Portal (Credentials:2200000    Test@2200000)",
      github:"https://github.com/AKsHaT123456A/Resume_Builder",
      demo:"https://resume-builder-4lbe.vercel.app/"
    },
    {
      id:2,
      image:IMG3,
      title:"ConnectR",
      github:"https://github.com/AKsHaT123456A/connectr",
      demo:"https://connectr.onrender.com/"
    },
    {
      id:3,
      image:IMG4,
      title:"ShoppersStop",
      github:"https://github.com/AKsHaT123456A/Resume_Builder",
      demo:"https://645a66bef8eb8f005450c9e0--darling-kleicha-5cc424.netlify.app/"
    },
    {
      id:4,
      image:IMG5,
      title:"MedScheduler",
      github:"git@github.com:AKsHaT123456A/Amrutam.git",
      demo:"https://drive.google.com/file/d/1IKNAL-Dc7ce-pSYiV6XUksMmmL2aehIf/view?usp=drivesdk"
    },
    {
      id:5,
      image:IMG6,
      title:"Hymm-A Music App",
      github:"https://github.com/AKsHaT123456A/MusicApp",
      demo:"https://akshat123456a.github.io/MusicApp/"
    },
    {
      id:6,
      image:IMG2,
      title:"Up Driven",
      github:"https://github.com/Rishita1304/UpDriven",
      demo:"https://updriven.onrender.com/"
    },
  ];
  return (
    <section id="portfolio">
       <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
     {
      data.map(({id,image,title,github,demo})=>{
        return (
          <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt="" />
          </div>
            <h3>{title}</h3>
            <a href={github} className="btn">
              GitHub
            </a>
            <a 
              href={demo}
              className="btn btn-primary
          " target="_blank">
              Live Demo
            </a>
        </article>
        )
      })
     }

       
      </div>
    </section>
  );
};

export default Portfolio;
