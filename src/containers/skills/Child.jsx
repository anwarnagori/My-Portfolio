import React from 'react'
import { FaHtml5 } from 'react-icons/fa'

const Child = () => {
  return (
    <div className="child">
        <div className="content">
            <div className="left">
            <FaHtml5 />
            </div>
            <div className="right">
                <h2>HTML5</h2>
                <div className="skill-bar">
                    <div className="progress">
                        <span>90%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Child
