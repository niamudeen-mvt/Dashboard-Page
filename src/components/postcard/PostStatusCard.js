import React from 'react'

const PostStatusCard = ({ type, icon, mainHeading, count, verticalMarign }) => {
  return (
    <div className={`post_card transition_5s cursor border_radius_9  ${verticalMarign}`}>
      <div className={`status_badge ${type} d-flex justify-content-center align-items-center`}>
        <img src={icon} alt='pending-icon' />
      </div>
      <p className='main_heading my-3'>{mainHeading}</p>
      <p className='count'>{count}</p>
    </div>
  )
}

export default PostStatusCard