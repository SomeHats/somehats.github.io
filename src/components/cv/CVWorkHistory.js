import React, { Fragment } from 'react';
import { H3, H4, A, Em } from '../../lib/styles';
import CVWorkHistoryItem, { CVSection, CVQuote } from './CVWorkHistoryItem';

const CVWorkHistory = () => (
  <CVSection>
    <H3>Work History</H3>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Developer &amp; Designer • <A href="http://airtable.com">Airtable</A>
        </Fragment>
      }
      date="April 2017 - present"
      tags={['Freelance / Consulting']}
    >
      <p>
        Airtable was looking for help developing Blocks - apps embedded in your
        spreadsheat/database. I would take ideas for blocks along with any
        relevant customer feedback, then spec-out, design, and implement them on
        top of their Blocks SDK. The Blocks I created are killer features for
        several large Airtable clients, including well known social media and
        video streaming companies.
      </p>
      <p>
        I've also spent considerable time working on the Blocks SDK itself -
        adding new features for tighter integration with the rest of Airtable,
        or working to smooth out the experience for other developers building
        Blocks.
      </p>
    </CVWorkHistoryItem>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Educator &amp; Facilitator - Apprentices •{' '}
          <A href="http://ada.ac.uk">Ada College</A>
        </Fragment>
      }
      date="January 2017 - present"
      tags={['Freelance / Consulting']}
    >
      <p>Teaching</p>
      <CVQuote from="Ali Blackwell, Lead Lecturer, Ada College">
        Alex&apos;s name badge at Ada says Code Witch which I think gives a fab
        hint of the positive magic she produces on a daily basis
      </CVQuote>
    </CVWorkHistoryItem>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Product Manager &amp; Developer •{' '}
          <A href="http://bitetheballot.co.uk">Verto</A>
        </Fragment>
      }
      date="May 2017 - June 2018"
      tags={['Freelance / Consulting']}
    >
      Verto
    </CVWorkHistoryItem>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Software Engineer • <A href="https://musicglue.com">Music Glue</A>
        </Fragment>
      }
      date="March 2016 - March 2017"
      tags={[
        'JavaScript',
        'Node.js',
        'React.js',
        'Redux',
        'GraphQL',
        'Relay.js',
        'PostgreSQL',
        'TDD',
        'Ruby',
        'Microservices',
      ]}
    >
      <p>
        In my role as Software Engineer, I helped design, develop, and architect
        a rewrite of Music Glue&apos;s e-commerce system. We replace a legacy
        PHP + MySQL monolith with a collection of loosely coupled{' '}
        <Em>Node.JS</Em> + <Em>PostgreSQL</Em> services, ultimately exposed to
        clients via a single unified <Em>GraphQL</Em> API. The result was a
        system that was orders of magnitude faster and more scalable, with far
        greater flexibility for users than was possible before.
      </p>
      <p>
        On the client-side, I architected a light-weight, performance-oriented{' '}
        <Em>React/Redux</Em> shop front-end used on all Music Glue stores. We
        set a tight performance budget and were able to keep quite comfortably
        within it. I was also responsible for creating the themeing system that
        let us build new HTML/CSS templates for customer websites and provide
        customisation to users through a live-updating editor page.
      </p>
    </CVWorkHistoryItem>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Co-Founder &amp; CTO •{' '}
          <A href="http://drumrollhq.com">Drum Roll HQ</A>
        </Fragment>
      }
      date="September 2013 - February 2016"
      tags={[
        'JavaScript',
        'Node.js',
        'React.js',
        'PostgreSQL',
        'MongoDB',
        'Pixi.js',
        'UI/UX',
        'AWS',
        'Project & Product Management',
      ]}
    >
      <p>
        As co-founder &amp; CTO, I was responsible for all the technical work on
        our product Erase All Kittens, a web-based game that teaches children
        how to code. I started the project in my bedroom, and by the time I left
        we had introduced hundreds of thousands of children to code.
      </p>
      <p>
        I was responsible for all of the educational content in the game, and
        much of the game-mechanic &amp; puzzle design. I created a custom
        browser-based game engine to support E.A.K.&apos;s core mechanic - the
        ability to edit the HTML and CSS source code to levels in real time, as
        you were playing them.
      </p>
    </CVWorkHistoryItem>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Developer • <A href="http://decoded.com">Decoded</A>
        </Fragment>
      }
      date="September 2013 - September 2014"
      tags={[
        'JavaScript',
        'Node.js',
        'PHP',
        'Salesforce',
        'PostgreSQL',
        'Realtime',
        'Go',
        'Redis',
        'TDD/BDD',
        'Angular.js',
      ]}
    >
      <p>
        At Decoded I worked on a range of internal and external software
        products. Notably, I designed and built the live coding environment
        Decoded used to deliver all their coding workshops. The web-based editor
        was specifically designed to have the lowest possible barrier to entry
        and a very tight feedback loop to help new coders understand the effects
        of their changes.
      </p>
      <p>
        I also built internal business-management tools and wrote a tool that
        would automatically synchronise company data between <Em>PostgreSQL</Em>{' '}
        and <Em>Salesforce</Em>.
      </p>
    </CVWorkHistoryItem>
  </CVSection>
);

export default CVWorkHistory;
