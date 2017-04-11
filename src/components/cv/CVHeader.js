import React from 'react';
import { media, headingsFont, H1, Img } from '../../lib/styles';
import { cxsComponent } from '../../lib/cxs';
import CVContact from './CVContact';

const Header = cxsComponent('header', {
  display: 'flex',

  [media.smallMedium]: {
    display: 'block',
  },
});

const NameSection = cxsComponent('section', {
  order: '1',
  flex: '1 1 auto',
});

const ImageSection = cxsComponent('section', {
  order: '0',
  marginRight: '2rem',
  flex: '0 0 10rem',

  '@media screen and (max-width: 950px)': {
    display: 'none',
  },
});

const ContactSection = cxsComponent('section', {
  order: '2',
  flex: '0 0 12rem',
});

const JobTitle = cxsComponent('h4', {
  composes: headingsFont,
  fontSize: '1rem',
  margin: '1rem 0',
});

const Location = cxsComponent('p', {
  composes: headingsFont,
  fontStyle: 'italic',
  opacity: 0.5,
  fontSize: '0.8rem',
});

const CVHeader = () => (
  <Header>
    <NameSection>
      <H1>Alex Dytrych</H1>
      <JobTitle>Full-Stack Web Developer <br /> Teacher &amp; Facilitator</JobTitle>
      <Location>London, UK • Remote</Location>
    </NameSection>
    <ImageSection>
      <Img src="/assets/profile-2-300.jpg" srcSet="/assets/profile-2-600.jpg 2x" />
    </ImageSection>
    <ContactSection>
      <CVContact />
    </ContactSection>
  </Header>
);

export default CVHeader;
