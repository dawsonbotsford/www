import React, { Component } from 'react';
import {style, merge} from 'next/css';

// import JobPositionCard from './JobPositionCard';
const JobPositionCard = () => (<div>JobPositionCard</div>)
const styles = {
  main: {
    display: 'flex',
    content: 'center',
    flexWrap: 'wrap'
  },
  sectionHeading: {
    borderBottom: '3px solid lightgray',
    // fontFamily: '\'Pacifico\', cursive',
    fontFamily: `'Scratch', sans-serif`,
    textTransform: 'uppercase',
    fontSize: '24px',
    letterSpacing: '3px',
    padding: '0px 0px 4px 0px'
    // margin: '0px 10px 0px 4px'
  },
  bodySection: {
    margin: '16px'
  },
  sectionLeft: {
    flex: '11',
    textAlign: 'left'
  },
  sectionRight: {
    flex: '20',
    textAlign: 'right'
  }
};

const SectionHeading = (displayText) => {
  return <h2 className={style(styles.sectionHeading)}> {displayText} </h2>;
}

class ResumeBody extends Component {
  static displayName = 'ResumeBody'

  render() {
    return (
      <div className={style(styles.main)}>
        <section className={merge(styles.bodySection, styles.sectionRight)}>
          {SectionHeading('Experience')}
          <JobPositionCard
            jobTitle="Web Engineer"
            companyName="Uber"
            companyUrl="https://uber.com"
            jobDescription="Improved and Standardized Uber
            's online frontend using React and Node."
          />
          <JobPositionCard
            jobTitle="Web Engineer"
            companyName="Shape Security"
            companyUrl="https://shapesecurity.com"
            jobDescription="Part of KPCB Fellowship in Silicon Valley
            where less than 3% of applicants are accepted."
          />
          <JobPositionCard
            jobTitle="Co-founder and Director"
            companyName="HackCU"
            companyUrl="https://hackcu.org"
            jobDescription="Started and grew this collegiate
            hackathon to over 200 students and a $20,000 budget in two years."
          />
          <JobPositionCard
            jobTitle="Software Engineer"
            companyName="NSA"
            companyUrl="https://nsa.gov"
            jobDescription="Held a U.S. Top-Secret security
            clearance from July 2012 - March 2015"
            />
        </section>
        <div className={merge(styles.bodySection, styles.sectionLeft)}>
          {SectionHeading('Skills')}
          <p>JavaScript</p>
          <p>html</p>
          <p>css</p>
          <p>Node.js</p>
        </div>
      </div>
    );
  }
}

export default ResumeBody;