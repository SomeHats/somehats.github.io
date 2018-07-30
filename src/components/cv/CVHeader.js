import React from 'react';
import cxsComponent from 'cxs/component';
import { media, headingsFont, H1, Img } from '../../lib/styles';
import CVContact from './CVContact';

const Header = cxsComponent('header')({
  display: 'flex',

  [media.smallMedium]: {
    display: 'block',
  },
});

const NameSection = cxsComponent('section')({
  order: '1',
  flex: '1 1 auto',
});

const ImageSection = cxsComponent('section')({
  order: '0',
  marginRight: '2rem',
  flex: '0 0 10rem',

  '@media screen and (max-width: 950px)': {
    display: 'none',
  },
});

const ProfilePicture = cxsComponent(Img)({
  borderRadius: '100%',
});

const ContactSection = cxsComponent('section')({
  order: '2',
  flex: '0 0 12rem',
});

const JobTitle = cxsComponent('h4')({
  ...headingsFont,
  fontSize: '1rem',
  margin: '1rem 0',
});

const LocationUpdate = cxsComponent('p')({
  ...headingsFont,
  fontStyle: 'italic',
  opacity: 0.5,
  fontSize: '0.8rem',
});

const CVHeader = () => (
  <Header>
    <NameSection>
      <H1>Alex Dytrych</H1>
      <JobTitle>
        Full-Stack Developer &amp; Designer<br /> Teacher &amp; Facilitator
      </JobTitle>
      <LocationUpdate>
        She/her • London, UK / Remote • Updated July 2018
      </LocationUpdate>
    </NameSection>
    <ImageSection>
      <ProfilePicture
        src="/assets/profile-3-300.jpg"
        srcSet="/assets/profile-3-600.jpg 2x"
        alt="A photo of me! A woman with pink and blue hair, wearing a stripy t-shirt and a suede jacket."
      />
    </ImageSection>
    <ContactSection>
      <CVContact />
    </ContactSection>
  </Header>
);

export default CVHeader;
