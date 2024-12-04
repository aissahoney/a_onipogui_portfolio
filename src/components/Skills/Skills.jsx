import React from 'react'
import "./Skills.css"
import Frontend from './Frontend'
import Uxui from './Uxui'


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">
Skills
        </h2>
        <span className="section_subtitle">
My Technical level
        </span>

    <div className="skills_container container grid">
<Frontend/>
<Uxui/>
    </div>

    </section>
  )
}

export default Skills