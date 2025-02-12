import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal jouney
        </span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                        >

                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div 
                    className={toggleState === 2 
                        ? "qualification__button qualification__active button--flex" 
                        : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                        >

                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                    className={toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelors</h3>
                            <span className="qualification__subtitle">Vellore Institute of Technology, Vellore</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Senior Secondary</h3>
                            <span className="qualification__subtitle">Delhi Public School, Bokaro</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2017
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary</h3>
                            <span className="qualification__subtitle">Saint Thomas School, Godda</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2015
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software developer</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>
                    </div> */}
                </div>

                <div 
                    className={
                        toggleState === 2 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                        }>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Engineer 2</h3>
                            <span className="qualification__subtitle">Providence India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>Sep 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Software Engineer</h3>
                            <span className="qualification__subtitle">Providence India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>Jul 2021 - Sep 2023
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Intern</h3>
                            <span className="qualification__subtitle">Nidhi Infocomm</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>May 2020 - Jun 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification;
