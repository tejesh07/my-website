import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faNodeJs, faPython, faLinux } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious software developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. 
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            Improving my chops one design problem at a time.
          </p>
          <p>
          I received my Master's in Computer Science degree in 2024. I enjoy coding a lot. I am innovative in my approach and am passionate about coding. I enjoy solving challenges in the real world. I am an independent learner. I'm seeking current chances that fit my talents, and I'm eager to gain all of the necessary skills quickly. I am adaptable and versatile as a newcomer. I can shape myself to fit in
          </p>
        </div>

       <div className="cubespinner">
  <div className="face1">
    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
  </div>
  <div className="face2">
    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
  </div>
  <div className="face3">
    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
  </div>
  <div className="face4">
    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
  </div>
  <div className="face5">
    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
  </div>
  <div className="face6">
    <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
  </div>
  <div className="face7">
    <FontAwesomeIcon icon={faDatabase} color="#4DB33D" /> {/* SQL/DB */}
  </div>
  <div className="face8">
    <FontAwesomeIcon icon={faCode} color="#007ACC" /> {/* C++ */}
  </div>
  <div className="face9">
    <FontAwesomeIcon icon={faPython} color="#FFD43B" />
  </div>
  <div className="face10">
    <FontAwesomeIcon icon={faLinux} color="#000000" />
  </div>
</div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
