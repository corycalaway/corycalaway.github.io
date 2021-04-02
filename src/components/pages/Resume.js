import React from "react";

const Resume = () => (

  <div className="container">

    <div className="row">
      <div className="col-lg-12 col-xl-3">
        <p> Cory Calaway
        <br />
        Web Developer
        <br />
        ㅡ
        <br />
        Taylorsville, UT 84129
        801-234-9770
        cory.c.calaway@gmail.com
        http://www.corycalaway.com/
        https://github.com/corycalaway
        https://www.linkedin.com/in/calawaycory/
        </p>
      </div>

      <div className="col-md-2">

      </div>
      <div className="col-md-5">
      <p>  Web developer and U.S. Army veteran with a background in psychology, developmental 
        training, and operational research. On track to complete a full stack web development 
        program from the University of Utah. Newly developed skills in JavaScript, Responsive 
        Web Design, and Server-side Development(Express.js, Node.js). Proven ability to create, 
        develop, and instruct lessons which increase knowledge and understanding in the given 
        subject. Consistently able to motivate and build profound confidence in others performance 
        and abilities.</p>
</div>

    </div>

    <div className="row">
      <div className="col-sm-12 col-md-1">
        <a href={require(`../../assets/images/resume.pdf`).default} download>

          <img src={require(`../../assets/images/PDF_file_icon.svg`).default} alt="resume-pdf" width="104" height="142" className='icon-size' />
Download Resume
</a>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-md-3">
<p>
        <br />
      TECHNICAL SKILLS
      <br />
        <br />
Languages:
<br />
JavaScript ES6+
<br />
CSS3
<br />
SQL
<br />
HTML5
<br />
        <br />
Tools:
<br />
React
<br />
Node
<br />
Express
<br />
Bootstrap
<br />
Handlebars
</p>
      </div>
      <div className="col-md-2">

      </div>
      <div className="col-md-5">
        <br />
        <p>
PROJECTS
<br />
The Minimal Prepper:
<br />
GitHub: https://github.com/daniwhitlock/the-minimal-prepper
<br />
Heroku: https://minimal-prepper.herokuapp.com/
<br />
        <br />
Summary: Online emergency preparation website where people can network work with others, obtain information regarding emergency preparedness, and track their own emergency readiness.
<br />
        <br />
Role: Full stack developer.
Tools: JavaScript, Handlebars, CSS, HTML, Bootstrap
<br />
        <br />
Gamer Portal:
<br />
GitHub: https://corycalaway.github.io/gamer-portal/
<br />
        <br />
Summary: Webpage that utilizes multiple databases to obtain information on game deals, and help users find new games to play.
<br />
        <br />
Role: Front end developer.
Tools: JavaScript, CSS, HTML, Materialize, and Luxon
</p>
</div>
    </div>
    <div className="row">
      <div className="col-md-10">
        <br />
<p>
    EXPERIENCE
    <br />
Verisys – Production Analyst, South Jordan, UT					2018-2020
<br />
Consistently able to complete weekly production goals 50%-100% above expectations set by company.
<br />
Created spreadsheets and documents, resulting in less data returned errors..
<br />
        <br />
Verizon - Business and Government Technical Support, West Valley, UT	2017-2018
<br />
Responsible for providing excellent customer care for Verizon Wireless Business and Government customers. <br />
Finding reliable, efficient and operational solutions which fit the specific needs of individuals and companies. <br />
 Effectively maintaining positive interactions while ensuring that a resolution is found for all issues and concerns. <br />
Proficient in utilization of ACSS, MTAS, MARS, Remedy, MYBIZ, and TRG. Ability and drive to adapt and overcome difficult situations and challenges. <br />
        <br />
UNITED STATES ARMY 								2011-2017<br />
Supervisor, Regional Correctional Facility-Europe, Sembach, Germany 	2014-2017<br />
Hand selected to be the head of training in an organization of over 100 personnel, to document, create, organize, and conduct all required training. <br />
Increased organizations training sections accreditation compliance score from 89% to 100%, assisting in organization being recognized as the first overseas correction facility to obtain a perfect score.<br />
Selected as 1 of 9 individuals to be the facility commanders highest acting authority of all operations within the Regional Correctional Facility-Europe. <br />
Directly managed and supervised 20 personnel who provide continuous care, custody, and control to an average of 30 prisoners. <br />
Organized and created 4 week long training events for the unit, resulting in a 100% first time success rate.<br />
Instructed 39 individuals on rifle marksmanship, resulting in 100% achieving a qualifying score, and increase from 3% to 8% receiving a perfect score.<br />
Created an auto generating work schedule that reduced previous methods development time by 80%, and is now utilized by the U.S. Army’s largest corrections facility. <br />
Maintained strict accountability for over $1,000,000 of property, with 0 discrepancies.<br />
        <br />
Corrections Specialist, Regional Correctional Facility, Fort Lewis, WA,	 2011-2014<br />
Maintained the care, custody, control, security, and welfare, of 140 inmates within the Fort Lewis Regional Correctional Facility.<br />
Supervised a team of 4 personnel in daily duties, resulting recognition from organization and achievement medal being awarded for leadership and performance. <br />
Conducted maintenance and maintained accountability for organizations chemical, biological, radiological, and nuclear equipment, resulting in a 98% on regulatory inspection. <br />
Efficiently managed and maintained sensitive data and files, with 0 discrepancies. <br />
Created daily records and documentation, which directly related to the safety and security of over 200 individuals. <br />
Consistently chosen for special assignments above others within the peer group, due to quality of performance. <br />
</p>
      </div>
    </div>

  </div>
);

export default Resume;
