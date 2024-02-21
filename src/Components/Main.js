import React from 'react'
import './CssFiles/Main.css'
import img1 from './ImagesFile/rock.png'
import img2 from './ImagesFile/punk.jpg'
import img3 from './ImagesFile/zelda.jpg'
import gta5 from './ImagesFile/gta5.jpg'
import assas from './ImagesFile/assasians.jpg'
import { Link } from 'react-router-dom'


function Main() {
  return (
    <>
{/* Main Section */}
      <div className="main">
        <div className="txt-body">
            <p className='txt-white fts-1'>The Best Games Website</p>
            <p className='txt-white txt-only'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, eos repellat. Excepturi veniam ex omnis assumenda quo delectus porro, recusandae itaque ipsam ullam unde cum exercitationem cumque? Dolores, nihil quia?</p>
            <button className='btn btn-outline-warning btn-lg'>Explore</button>
          </div>
      </div>

{/* Popular Section */}
      <div className='game-box py-3'>
        <p className="fts-1 text-center">Popular Games of 2023</p>
        <div className="games-wrapper">
          <div className="box box-1">
            <img src={img1} alt="pic1" />
            <p className="heading">Rock Paper Shotgun</p>
            <p className="desc">VR games are clogging up Steam's Early Access list like cholesterol these days. Well, here comes another one. Raw Data [official site] is a survival-mode shooter.</p>
          </div>
          <div className="box box-2">
            <img src={img2} alt="punk" />
            <p className="heading">Cyberpunk 2077</p>
            <p className="desc">Cyberpunk 2077 is an open-world action role-playing game developed and published by CD Projekt. The game is set in a dystopian future in the year 2077.</p>
          </div>
          <div className="box box-3">
            <img src={img3} alt="zelda" />
            <p className="heading">The Legend of Zelda: Breath of the Wild</p>
            <p className="desc">The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo. It is the nineteenth main installment in Zelda series.</p>
          </div>
        </div>
      </div>

{/* Latest Section */}
      <div className="latest-box">
        <p className="fts-1 text-center">Latest Release</p>
        <div className="latest-games-wrapper">
          <div className="l-games l-games-1">
            <img src={gta5} alt="gta5" />
            <p className="heading">Grand Theft Auto V</p>
            <p className="desc">When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.</p>
            <div className="btns">
              <button className='btn btn-warning btn-lg'><Link className='links' to='/games'>Explore</Link></button>
            </div>
          </div>
          <div className="l-games l-games-2">
            <img src={assas} alt="assas" />
            <p className="heading">Assassins Creed: Nexus</p>
            <p className="desc">Abstergo Industries has found a way to retrieve powerful lost artifacts that can be used to manipulate people's beliefs. To sabotage their plan, you'll uncover all-new stories and accomplish new missions as legendary Assassins. Nexus features a wide variety of historically-accurate open maps with 360-degree navigation. Climb and parkour everywhere as you choose how to achieve your objectives.</p>
            <div className="btns">
              <button className='btn btn-warning btn-lg'><Link className='links' to='/games'>Explore</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>    
  )
}

export default Main