import React from 'react'

const Helmet = (props) => {
    document.title = 'Agearle - ' + props.title
  return (
    <div className='w-100'>{props.chilren}</div>
  )
}

export default Helmet