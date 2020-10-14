import React from 'react';
import '../App.css';
import styles from './About.module.css'

function About() {
  return (
    <div className={ styles.container }>
      <div className={ styles.infoContainer }>
        <span className={ styles.title }>The About Page</span><br></br><br></br>
        I have a little story for you. Once upon a time there was an software engineering student with a lot of work.<br></br>
        This student tried his hardest to schedule schoolwork, so that he could pass all courses with some at least some dignity.
        But after struggling a bit with some subjects, he was running out of time. Yet, lied ahead the greatest challenge of them all.
        Creating a web application. Not only was this a pretty sizable task from the start, had the students struggles left him with 
        only a fragment on the time left. Nevertheless, the student, with 4 days left, decided to push on with this task. He didn't want to
        fail. He watched hours upon hours of tutorials and lectures. He started to code when he woke up and ended only when about to pass out.
        In the final night, he didn't even sleep. He wanted to pass...<br></br><br></br>
        But instead managed to create this abomination with hopes that it isn't a complete embarrasment, and allows him to pass the course.
      </div>
    </div>
  );
}

export default About;