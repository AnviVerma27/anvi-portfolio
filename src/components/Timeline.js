// Timeline.js
import React from 'react';
import { Icon, Header, Segment, Label } from 'semantic-ui-react';
import './Timeline.css'; // Import your custom CSS for timeline styling

const Timeline = ({ direction, icon, title, time, description, color, tags, lineHeight }) => {
  const isLeft = direction === 'left';

  return (
    <Segment className={`timeline-segment ${isLeft ? 'left' : 'right'}`}>
      <div className="timeline-icon">
        <Icon name={icon} color={color} />
      </div>
      <div className={`timeline-content ${isLeft ? 'left' : 'right'}`}>
        <Header as="h3" className="timeline-title">
          {title}
        </Header>
        <Header as="h4" className="timeline-time">
          {time}
        </Header>
        <p className="timeline-description">{description}</p>
        {tags && (
          <Label.Group className="timeline-tags">
            {tags.map((tag, index) => (
              <Label key={index}>{tag}</Label>
            ))}
          </Label.Group>
        )}
      </div>
    </Segment>
  );
};

export default Timeline;
