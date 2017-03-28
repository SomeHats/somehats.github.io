import React from 'react';
import { H3, A, Em } from '../../lib/styles';
import { CVSection, CVItem, ItemHead, ItemName, ItemDate, ItemDesc, TagList, Tag } from './CVItem';

const CVCoolStuff = () => (
  <CVSection>
    <H3>Projects, Prototypes, Talks</H3>

    <CVItem>
      <ItemHead>
        <ItemName>Teaching/Consulting • <A href="http://adacollege.org.uk">ADA College</A></ItemName>
        <ItemDate>January 2017 - present</ItemDate>
      </ItemHead>
      <ItemDesc>
        <p>
          Recently, I've been at ADA National College for Digital Skills, designing and delivering
          courses on web programming and game design.
        </p>
        <p>
          The courses are aimed at 16/17 year old students with little to no coding experience. In
          the web programming course, we've covered the basics of web programming&mdash;
          <Em>HTML</Em>, <Em>CSS</Em>, <Em>responsive design</Em>, <Em>accessibility</Em>, and
          {' '}<Em>JavaScript</Em>&mdash;as well UX. In the games course, we've looked at
          {' '}<Em>user testing</Em>, <Em>rapid iteration</Em>, several aspects of <Em>game
          design</Em>, and building games with <Em>JavaScript</Em> and <Em>Phaser.js</Em>.
        </p>
      </ItemDesc>
    </CVItem>

    <CVItem>
      <ItemHead>
        <ItemName>Talk • Error Handling in GraphQL</ItemName>
        <ItemDate>January 2017</ItemDate>
      </ItemHead>
      <ItemDesc>
        <p>
          <A href="https://skillsmatter.com/skillscasts/9582-graphql-growing-pains">
            Watch on Skills Matter
          </A>.
          A short talk on our use of <Em>GraphQL</Em> at Music Glue. I looked at how we'd made
          error handling an explicit part of our data schema for extra resilience if a back-end
          service went down.
        </p>
      </ItemDesc>
    </CVItem>

    <CVItem>
      <ItemHead>
        <ItemName>Prototype • <A href="http://dytry.ch/programarble">Programarble</A></ItemName>
        <ItemDate>September 2016</ItemDate>
      </ItemHead>
      <ItemDesc>
        <TagList>
          <Tag>JavaScript</Tag>
          <Tag>React</Tag>
          <Tag>Pixi.js</Tag>
          <Tag>Redux</Tag>
          <Tag>Immutable.js</Tag>
          <Tag>Matter.js</Tag>
        </TagList>

        <p>
          A prototype exploring a way to visualise and explain computational thinking as
          transformations of streams of data. I decided not to take this prototype any further, but
          plan to integrate some of the ideas into a future project. Check out the code on
          {' '}<A href="https://github.com/somehats/programarble">GitHub</A>.
        </p>
        <p>
          Using <Em>Redux</Em>&mdash;with its focus on immutability&mdash;with a physics engine that
          relied on mutating objects (<Em>Matter.js</Em>) was an interesting challenge. In the end,
          I kept all the important data in <Em>Redux</Em>, synchronising it with the physics engine
          when the store updated.
        </p>
        <p>
          This was my first time using a third-party renderer with React: <Em>react-pixi</Em>,
          which attempts to let you use React with <Em>Pixi.js</Em> (my favourite 2D renderer for
          the browser). The integration wasn't quite as smooth as I'd like, but I learnt a lot from
          reading the source and I'm excited for the official renderer API that's coming with
          {' '}<Em>React Fiber</Em>.
        </p>
      </ItemDesc>
    </CVItem>

    <CVItem>
      <ItemHead>
        <ItemName>Project • Oulipo</ItemName>
        <ItemDate>October 2015</ItemDate>
      </ItemHead>
      <ItemDesc>
        <p>
          Oulipo is a programming language and IDE I hacked together whilst working on my startup,
          Drum Roll. The aim was to let my non-technical collaborators write interactive branching
          dialogue trees for our game without me having to manually translate them into JavaScript,
        </p>
        <p>
          I implemented the language from scratch over a few weeks, and I'm pretty pleased with how
          it turned out. It certainly did the job&mdash;the screenplay-inspired syntax was pretty
          easy for my collaborators to use. Check out the source code and some examples on
          {' '}<A href="http://github.com/somehats/oulipo">GitHub</A>.
        </p>
      </ItemDesc>
    </CVItem>
  </CVSection>
);

export default CVCoolStuff;
