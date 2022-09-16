import edenlogo from '../../assets/edenlogo.png'
import { useNavigate } from 'react-router-dom'
import tickpng from '../../assets/tick.png'
import React from 'react'
import './EdenFour.css'

const EdenPageFour = () => {
const navigate = useNavigate();

  return (
    <div>
        <div className='eden-flex'>
            <img src={edenlogo} />
            <div className='eden-text'>Eden</div>
        </div>
        {/* Pagination */}
        <div className="pindicatorr">
         <div className="bullett pastt">
         <span className="iconn" onClick={() => navigate('/')}>1</span>
         </div>
         <div className="bullett pastt">
             <span className="iconn" onClick={() => navigate('/eden2')}>2</span>
         </div>
         <div className="bullett pastt">
             <span className="iconn" onClick={() => navigate('/eden3')}>3</span>
         </div>
         <div className="bullett pastt">
             <span className="iconn" onClick={() => navigate('/eden4')}>4</span>
         </div>
        </div>
        {/* Pagination */}
        <div className='tick-img'>
          <img src={tickpng} />
        </div>
        <div className='eden-wel'>
            Congratulations, Eren!
        </div>
        <div className='eden-lt'>
            You have completed onboarding, you can start using the Eden!
        </div>
       
        <div className='workspace-btn'>
            <div className='workspace-txt'>Launch Eden</div>
        </div>
    </div>
  )
}

export default EdenPageFour