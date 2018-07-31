import React, { Fragment } from 'react';
import { H3, H4, A, Em } from '../../lib/styles';
import CVWorkHistoryItem, { CVSection } from './CVWorkHistoryItem';

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
      tags={[
        'Freelance / Consulting',
        'Product',
        'UI/UX Design',
        'JavaScript',
        'React.js',
        'Data Visualisation',
      ]}
    >
      <p>
        Airtable was looking for help developing Blocks - apps embedded in your
        spreadsheet/database. With only rough direction and customer feedback, I
        designed, and implemented several Blocks. The Blocks I created are key
        features for large Airtable clients, such as well known social media and
        video streaming companies.
      </p>
      <p>
        I also improved the Blocks SDK itself. I added new features for tighter
        integration with the rest of Airtable, and made several API UX changes
        to make things faster and easier for other developers working on the
        platform.
      </p>
    </CVWorkHistoryItem>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Educator &amp; Facilitator •{' '}
          <A href="http://ada.ac.uk">Ada College</A>
        </Fragment>
      }
      date="January 2017 - present"
      tags={[
        'Freelance / Consulting',
        'Education',
        'JavaScript',
        'Java',
        'Games',
        'Agile',
      ]}
    >
      <p>
        At Ada, The National College for Digital Skills, I've designed and
        delivered several courses and programs. My recent work has been on the
        2-year degree-equivalent Digital Innovation Apprenticeship. The course
        has seen candidates go from absolute beginners to valued members of
        their software teams at companies like Google, Facebook, and EY.
      </p>
      <p>
        I co-led the software engineering modules. My personal focus is in
        ensuring we emphasize the "soft" skills required to be a successful
        developer. As a result, students learn faster and more collaboratively,
        in a highly self-directed environment. I also supported delivery of
        modules on user-centered design, agile methodologies, data structures,
        and algorithms.
      </p>
    </CVWorkHistoryItem>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Product Designer &amp; Lead Developer •{' '}
          <A href="http://bitetheballot.co.uk">Verto</A>
        </Fragment>
      }
      date="May 2017 - June 2018"
      tags={[
        'Freelance / Consulting',
        'Product',
        'UI/UX Design',
        'Games',
        'JavaScript',
        'React.js',
        'GraphQL',
        'PostgreSQL',
      ]}
    >
      <p>
        At youth politics charity Bite The Ballot, I designed and built Verto -
        a playful survey &amp; interactive video platform. With the help of a
        colleague, I took BTB's team right through the product development
        process. I facilitated ideation sessions, produced initial prototypes,
        and tested with some real-world users.
      </p>
      <p>
        After several design iterations, we built out and launched the platform
        - testing as we went. My focus was on the technical architecture; UX;
        and the playful, high-performance frontend. The project has been a huge
        success - the playful surveys have a very high completion rate beyond
        our initial expectations. BTB has started to become self-sufficient by
        offering Verto to comercial businesses.
      </p>
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
        'PostgreSQL',
        'Ruby',
      ]}
    >
      <p>
        As a Software Engineer, I helped design, develop, and architect a
        rewrite of Music Glue's e-commerce system. We replaced a legacy PHP
        &amp; MySQL monolith with a collection of <Em>Node.JS</Em> &amp;{' '}
        <Em>PostgreSQL</Em> services, exposed to clients via a single unified{' '}
        <Em>GraphQL</Em> API. The new system was orders of magnitude faster and
        more scalable, with far greater flexibility for our users.
      </p>
      <p>
        On the client-side, I architected a light-weight, performance-oriented{' '}
        <Em>React/Redux</Em> shop frontend used on all Music Glue stores. We set
        a tight performance budget and were able to keep quite comfortably
        within it. I also created a new theming system that dramatically
        increased the customization options available to customers.
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
        'Co-Founder',
        'Product',
        'UI/UX Design',
        'JavaScript',
        'Node.js',
        'React.js',
        'PostgreSQL',
        'MongoDB',
        'Pixi.js',
        'AWS',
      ]}
    >
      <p>
        As co-founder &amp; CTO, I was responsible for all the technical work on
        our product Erase All Kittens, an award-winning game that teaches
        children how to code. I started the project in my bedroom, and by the
        time I left, we had introduced hundreds of thousands of children to
        coding.
      </p>
      <p>
        I was responsible for the educational content, and much of the mechanics
        &amp; puzzle design. I created a custom browser-based game engine to
        support E.A.K.'s core mechanic - the ability to edit the HTML and CSS
        source code to levels in real time, as you were playing.
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
        'PostgreSQL',
        'Real-time',
        'Go',
        'Angular.js',
      ]}
    >
      <p>
        At Decoded I worked on a range of internal and external software
        products. Notably, I designed and built the live coding environment
        Decoded used to deliver all their coding workshops. The web-based editor
        was designed to have the lowest possible barrier to entry and a very
        tight feedback loop to help new coders understand the effects of their
        changes.
      </p>
    </CVWorkHistoryItem>
  </CVSection>
);

export default CVWorkHistory;
