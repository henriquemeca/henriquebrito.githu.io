import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  experiences.sort((a, b) => (a.indexOrder > b.indexOrder) ? 1 : -1)
  skills.sort((a, b) => (a.indexOrder > b.indexOrder) ? 1 : -1) 
  return (
    <>
      <h2 className="head-text">Skills</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        
      <h2 className="head-text subheader">Experiences</h2>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={experience.company}
            >
              <div className="app__skills-exp-company">
                <img src={urlFor(experience.imgUrl)} alt={experience.company}/>
                <div>
                  <span> <p className="bold-text">{experience.company}</p>
                  <span>{", "+experience.location}</span></span>
                  <span>{experience.desc}</span>
                </div>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((works) => (
                  <>
                    <motion.div 
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      // data-tip
                      // data-for={works.name}
                      key={works.name}
                    >
                      <p className="bold-text">{works.jobtitle+' - '+
                      works.startdate+' to '+ works.enddate}</p>
                      <ul>
                        {works.desc.map((d)=>(
                          <li className="p-text">{d}</li>
                        ))}
                      </ul>
                      
                    </motion.div>
                    <ReactTooltip
                      id={works.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {works.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
