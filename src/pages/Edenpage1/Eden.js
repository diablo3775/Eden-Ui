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
        <div class="pindicator">
         <div class="bullet past">
             <span class="icon" onClick={() => navigate('/')}>1</span>
         </div>
         <div class="bullet current">
             <span class="icon" onClick={() => navigate('/eden2')}>2</span>
         </div>
         <div class="bullet next future">
             <span class="icon" onClick={() => navigate('/eden3')}>3</span>
         </div>
         <div class="bullet future">
             <span class="icon" onClick={() => navigate('/eden4')}>4</span>
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