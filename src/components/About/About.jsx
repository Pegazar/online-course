import React from 'react'
import about from "../../img/about.jpg"
import "./About.css"

const About = () => {
  return (
    <div className="about py-5">
        <div className="container">
            <div className="about-wrapper py-5">
                <div className="row align-items-center">
                    <div className="a-left col-lg-5">
                        <img className="img-fluid mb-4" src={about} alt="" />
                    </div>
                    <div className="a-right col-lg-7 mb-4">
                        <h5>About us</h5>
                        <h1>Innovative Way To Learn</h1>
                        <p>
                        Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet
                        </p>
                        <a href="#" className="a-btn mt-2">Learn More</a>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About