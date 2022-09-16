import edenlogo from '../../assets/edenlogo.png'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import './Eden.css'

const Eden = () => {
const navigate = useNavigate();

  return (
    <div>
        <div className='eden-flex'>
            <img src={edenlogo} />
            <div className='eden-text'>Eden</div>
        </div>
        {/* Pagination */}
        <div className="pindicator">
         <div className="bullet past">
             <span className="icon" onClick={() => navigate('/')}>1</span>
         </div>
         <div className="bullet current">
             <span className="icon" onClick={() => navigate('/eden2')}>2</span>
         </div>
         <div className="bullet next future">
             <span className="icon" onClick={() => navigate('/eden3')}>3</span>
         </div>
         <div className="bullet future">
             <span className="icon" onClick={() => navigate('/eden4')}>4</span>
         </div>
        </div>
        {/* Pagination */}
        <div className='eden-wel'>
            Welcome! First things first...
        </div>
        <div className='eden-lt'>
            You can always change them later
        </div>
        <div>
            <div className='eden-inputs-txt'>Full Name</div>
            <input className='eden-inputs' placeholder='Steve Jobs' />
            <div className='eden-inputs-txt'>Display Name</div>
            <input className='eden-inputs' placeholder='Steve' />
        </div>
        <div className='workspace-btn'>
            <div className='workspace-txt'>Create Workspace</div>
        </div>
    </div>

  )
}

export default Eden