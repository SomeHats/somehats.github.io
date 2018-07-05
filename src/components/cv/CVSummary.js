import React from 'react';
import cxsComponent from 'cxs/component';
import { media, Em, A } from '../../lib/styles';

const SummarySection = cxsComponent('section')({
  paddingTop: '2rem',
  textAlign: 'justify',

  [media.smallMedium]: {
    paddingTop: '1rem',
  },
});

const CVSummary = () => (
  <SummarySection>
    <p>
      I'm a full-stack <Em>JavaScript</Em> developer who specialises in creating
      delightful, high-performance web applications with technologies such as{' '}
      <Em>React</Em>, <Em>Node.js</Em>, and <Em>PostgreSQL</Em>. I have 5 years
      experience building <Em>apps</Em>, <Em>games</Em> and <Em>tools</Em> for
      the web.
    </p>
    <p>
      I spend a lot of time thinking about coding, computational thinking, and
      how we teach it. I'm the creator of{' '}
      <A href="https://eraseallkittens.com">Erase All Kittens</A>, an{' '}
      <Em>open-source</Em> game that teaches children aged 8+ to code. As a
      teacher/facilitator, I've run courses on <Em>web programming</Em> for
      beginners, taught business executives to build their own{' '}
      <Em>IoT devices</Em>, and introduced 7-year-olds to <Em>game design</Em>.
    </p>
  </SummarySection>
);

export default CVSummary;
