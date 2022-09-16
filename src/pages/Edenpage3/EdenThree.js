import mlpersons from '../../assets/multiplepersons.png'
import sgperson from '../../assets/singleperson.png'
import edenlogo from '../../assets/edenlogo.png'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import './EdenThree.css'

const EdenThree = () => {
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
         <div className="bullett pastt futuree">
             <span className="iconn" onClick={() => navigate('/eden3')}>3</span>
         </div>
         <div className="bullett futuree">
             <span className="iconn" onClick={() => navigate('/eden4')}>4</span>
         </div>
        </div>
        {/* Pagination */}
        <div className='eden-wel'>
            How are you planning to use Eden?
        </div>
        <div className='eden-lt'>
            We'll streamline your setup experience accordingly.
        </div>
        <div className='cards'>
            <div className='card-one'>
                <img className='sp' src={sgperson} />
                <div className='card-txt'>For Myself</div>
                <div className='card-txt-2'>Write better.Think more clearly.Stay organized.</div>
            </div>
            <div className='card-two'>
                <img className='sp' src={mlpersons} />
                <div className='card-txt'>With my team</div>
                <div className='card-txt-2'>Wikis, docs, tasks & projects , all in one place.</div>
            </div>
        </div>
        <div className='workspace-btn'>
            <div className='workspace-txt'>Create Workspace</div>
        </div>
    </div>
  )
}

export default EdenThree