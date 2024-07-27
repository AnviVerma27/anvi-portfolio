import React from 'react';
import './Volunteering.css';

const Volunteering = () => {
  return (
    <section id="volunteering" className="volunteering">
      <div className="container">
        <h2>Volunteering</h2>
        <hr />
        <div className="volunteer-role">
          <div className="role-header">
            <h3>Organizing Team Member</h3>
            <div className="role-info">
              <p className="role-place"><strong>TEDxNITSrinagar</strong>, Srinagar</p>
              {/* <p className="role-duration">Feb 2022 - Aug 2023</p> */}
            </div>
          </div>
          <p>Part of the organizing team for the prestigious TEDxNITSrinagar event. Contributed as a graphic designer, content writer, and corporate relations handler, ensuring the event's success through effective team collaboration and creative input.</p>
        </div>
        <div className="volunteer-role">
          <div className="role-header">
            <h3>Content Writer</h3>
            <div className="role-info">
              <p className="role-place"><strong>GDSC NIT Srinagar</strong>, Srinagar</p>
            </div>
          </div>
          <p>Appointed as a member of the college's renowned community GDSC NIT Srinagar. Managed all content writing tasks and later contributed to the social media team, enhancing the club's online presence and engagement.</p>
        </div>
        <div className="volunteer-role">
          <div className="role-header">
            <h3>Technical Team Member</h3>
            <div className="role-info">
              <p className="role-place"><strong>Semicolon</strong>, Srinagar</p>
              {/* <p className="role-duration">July 2023 - Nov 2023</p> */}
            </div>
          </div>
          <p>Contributed to various technical projects in the college coding club.</p>
        </div>
      </div>
    </section>
  );
};

export default Volunteering;

