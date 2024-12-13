import React from 'react'


const WorkItems = ({item}) => {
  
  return (
    <div className='work_card' key={item.id}>
        <a href={item.at} target="blank" rel="noopener noreferrer" className='voile' onMouseEnter={(e) => e.currentTarget.classList.add('voile--hidden')} onMouseLeave={(e) => e.currentTarget.classList.remove('voile--hidden')}>
    <img src={item.image} className='work_img' alt="project-image" />
  </a>
        <h3 className="work_title">{item.title}</h3>
        <p className="work_language">{item.language}</p>
<a href={item.at} target='blank' className='work_button'>
    Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
</a>

    </div>
  )
}

export default WorkItems