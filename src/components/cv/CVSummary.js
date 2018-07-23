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
      I&apos;m a freelance full-stack <Em>JavaScript</Em> developer &amp;
      designer who specialises in creating delightful, playful, high-performance
      web applications with tech like <Em>React</Em>, <Em>Node.js</Em>, and{' '}
      <Em>PostgreSQL</Em>. I have over 6 years experience building <Em>apps</Em>,{' '}
      <Em>games</Em> and <Em>tools</Em> for the web.
    </p>
    <p>
      I spend a lot of time thinking about coding, computational thinking, and
      how we teach it. As a teacher/facilitator, I&apos;ve designed &amp;
      delivered <Em>degree-level</Em> software engineering courses, taught
      business executives to build their own <Em>IoT devices</Em>, and
      introduced 7-year-olds to <Em>game design</Em>. I&apos;m also the creator
      of <A href="https://eraseallkittens.com">Erase All Kittens</A>, an{' '}
      <Em>open-source</Em> game that teaches children aged 8+ to code.
    </p>
  </SummarySection>
);

export default CVSummary;
