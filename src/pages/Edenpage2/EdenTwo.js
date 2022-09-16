import edenlogo from '../../assets/edenlogo.png'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import './EdenTwo.css'

const EdenTwo = () => {
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
         <div className="bullett nextt futuree">
             <span className="iconn" onClick={() => navigate('/eden3')}>3</span>
         </div>
         <div className="bullett futuree">
             <span className="iconn" onClick={() => navigate('/eden4')}>4</span>
         </div>
        </div>
        {/* Pagination */}
        <div className='eden-wel'>
            Let's set up a home for all your work
        </div>
        <div className='eden-lt'>
            You can always create another workspace later.
        </div>
        <div>
            <div className='eden-inputs-txt'>Workspace Name</div>
            <input className='eden-inputs' placeholder='Eden' />
            <div className='eden-inputs-txt '>Workspace URL(optional)</div>
            <input className='eden-inputs url'  placeholder='www.ede.com/Example' />
        </div>
        <div className='workspace-btn'>
            <div className='workspace-txt'>Create Workspace</div>
        </div>
    </div>
  )
}

export default EdenTwo