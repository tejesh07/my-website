import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import LogoTitle from "../../assets/images/logo-s.png"
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['e', 'j', 'a']
    const jobArray = [
      'a',
      's',
      'p',
      'i',
      'r',
      'i',
      'n',
      'g',
      ' ',
      'd',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.',
    ]
    useEffect(() => {
         setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        <>
        <div className='container home-page'>
         <div className='text-zone'>
         <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="software Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
            <h2>
                2024 Graduate, Actively Looking for SDE roles
            </h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
         </div>
         <Logo />
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home
