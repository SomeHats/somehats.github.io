import React from 'react';
import EmailIcon from 'react-icons/lib/io/email';
import WebIcon from 'react-icons/lib/io/ios-world';
import GithubIcon from 'react-icons/lib/io/social-github';
import TwitterIcon from 'react-icons/lib/io/social-twitter';

import cxsComponent from 'cxs/component';
import { media, A } from '../../lib/styles';
import { primary } from '../../lib/colors';
import NoSSR from '../NoSSR';

const List = cxsComponent('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  textAlign: 'right',

  [media.smallMedium]: {
    textAlign: 'left',
  },
});

const ListItem = cxsComponent('li')({
  color: primary,
  margin: '0.5rem 0',
  a: {
    display: 'inline-block',
    margin: '0 1rem',
    ':after': {
      display: 'none',
    },
  },
  svg: {
    marginTop: '-0.2rem',
    width: '1.8rem',
    height: '1.8rem',
  },

  [media.smallMedium]: {
    display: 'flex',
    a: {
      order: 1,
    },
    svg: {
      order: 0,
    },
  },
});

const ContactItem = ({ href, icon: Icon, children }) => (
  <ListItem>
    <A href={href}>{children}</A>
    <Icon />
  </ListItem>
);

const CVContact = () => (
  <List>
    <NoSSR>
      <ContactItem href="mailto:alex@dytry.ch" icon={EmailIcon}>
        alex@dytry.ch
      </ContactItem>
    </NoSSR>
    <ContactItem href="https://alex.dytry.ch" icon={WebIcon}>
      alex.dytry.ch
    </ContactItem>
    <ContactItem href="https://github.com/somehats" icon={GithubIcon}>
      SomeHats
    </ContactItem>
    <ContactItem href="https://twitter.com/somehats" icon={TwitterIcon}>
      @SomeHats
    </ContactItem>
  </List>
);

export default CVContact;
