import React from 'react';
import { H3, A, Em } from '../../lib/styles';
import { CVSection, CVItem, ItemHead, ItemName, ItemDate, ItemDesc, TagList, Tag } from './CVItem';

const CVWorkHistory = () => (
  <CVSection>
    <H3>Work History</H3>

    <CVItem>
      <ItemHead>
        <ItemName>
          Software Engineer • {' '}
          <A href="https://musicglue.com">Music Glue</A>
        </ItemName>
        <ItemDate>March 2016 - March 2017</ItemDate>
      </ItemHead>
      <ItemDesc>
        <TagList>
          <Tag>JavaScript</Tag>
          <Tag>Node.js</Tag>
          <Tag>React.js</Tag>
          <Tag>Redux</Tag>
          <Tag>GraphQL</Tag>
          <Tag>Relay.js</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>TDD</Tag>
          <Tag>Ruby</Tag>
          <Tag>Microservices</Tag>
        </TagList>

        <p>
          In my role as Software Engineer, I helped design, develop, and architect a rewrite of
          Music Glue's e-commerce system using <Em>React</Em>, <Em>Node.js</Em>, <Em>GraphQL</Em>,
          and <Em>Ruby</Em>.
        </p>
        <p>
          I led work on the new platform's theming system which let users customise their website
          without having to write code. This involved writing <Em>RESTful Microservices</Em> with
          {' '}<Em>Node</Em> and <Em>Postgres</Em>, integrating with a large <Em>Ruby on Rails</Em>
          {' '}app, and writing a UI with <Em>React</Em>, <Em>Redux</Em>, <Em>Relay</Em>, and
          {' '}<Em>Immutable.js</Em>.
        </p>
        <p>
          I also architected the light-weight <Em>React/Redux</Em> shop front-end used on all Music
          Glue stores. Keeping within our performance budget here was an interesting challenge, but
          the result was a very fast, simple system.
        </p>
        <p>
          One of the more interesting challenges was scale. Music Glue's platform needs to deal
          with an event like a major band announcing a stadium tour, where hundreds of thousands of
          tickets might be sold in just a few minutes. I worked to <Em>profile</Em> and
          {' '}<Em>optimise</Em> the use of <Em>PostgreSQL</Em> by our microservices; and designed
          &amp; implemented a caching strategy using <Em>Memcached</Em> for our <Em>GraphQL API</Em>.
        </p>
      </ItemDesc>
    </CVItem>

    <CVItem>
      <ItemHead>
        <ItemName>Co-Founder &amp; CTO • <A href="http://drumrollhq.com">Drum Roll HQ</A></ItemName>
        <ItemDate>September 2013 - February 2016</ItemDate>
      </ItemHead>
      <ItemDesc>
        <TagList>
          <Tag>JavaScript</Tag>
          <Tag>Node.js</Tag>
          <Tag>React.js</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>MongoDB</Tag>
          <Tag>Pixi.js</Tag>
          <Tag>UI/UX</Tag>
          <Tag>AWS</Tag>
          <Tag>Project Management</Tag>
        </TagList>

        <p>
          As co-founder &amp; CTO, I was responsible for all the technical work on our product Erase
          All Kittens, a web-based game that teaches children how to code. I started the project in
          my bedroom, and by the time I left we had introduced hundreds of thousands of children to
          code.
        </p>
        <p>
          I designed and implemented a custom game engine in <Em>JavaScript</Em>, using
          {' '}<Em>Pixi.js</Em>, <Em>Backbone.js</Em>, <Em>WebGL</Em>, <Em>React.js</Em>, and the
          {' '}<Em>WebAudio API</Em>. I wrote a backend API in <Em>Node.JS</Em>, using
          {' '}<Em>PostgreSQL</Em>, <Em>MongoDB</Em>, and <Em>Stripe</Em>.
        </p>
        <p>
          As well as implementing the engine, I was responsible for most of the in-game <Em>UI &amp;
          UX design</Em>, writing all the educational <Em>content &amp; curriculum</Em>, level &amp;
          puzzle design, some character &amp; UI <Em>animation</Em>, and <Em>project management</Em>.
        </p>
      </ItemDesc>
    </CVItem>

    <CVItem>
      <ItemHead>
        <ItemName>Developer • <A href="http://decoded.com">Decoded</A></ItemName>
        <ItemDate>September 2013 - September 2014</ItemDate>
      </ItemHead>
      <ItemDesc>
        <TagList>
          <Tag>JavaScript</Tag>
          <Tag>Node.js</Tag>
          <Tag>PHP</Tag>
          <Tag>Salesforce</Tag>
          <Tag>PostgreSQL</Tag>
          <Tag>Websockets</Tag>
          <Tag>Go</Tag>
          <Tag>Redis</Tag>
          <Tag>TDD/BDD</Tag>
          <Tag>Angular.js</Tag>
        </TagList>

        <p>
          As a developer at Decoded I worked on a range of internal and external software products.
          I designed and built a live code editor for Decoded's coding workshops. It was written
          with a real-time framework called <Em>Derby.js</Em>, using <Em>MongoDB</Em>,
          {' '}<Em>Redis</Em>, and <Em>Stylus</Em>. Users could open their project on a phone and
          watch it update live via <Em>websockets</Em> with <Em>Socket.io</Em> as they worked.
        </p>
        <p>
          I also worked built internal business-management tools in <Em>Angular.js</Em> and
          {' '}<Em>Node.js</Em> using a <Em>BDD</Em> approach. I maintained
          the existing website and course infrastructure (<Em>PHP</Em> and <Em>MySQL</Em>); and
          wrote a tool in <Em>Go</Em> that would automatically synchronise company data between a
          {' '}<Em>PostgreSQL</Em> database and <Em>Salesforce</Em>.
        </p>
      </ItemDesc>
    </CVItem>
  </CVSection>
);

export default CVWorkHistory;
