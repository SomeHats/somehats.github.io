import React, { Fragment } from 'react';
import { H3, A, Em } from '../../lib/styles';
import CVWorkHistoryItem, { CVSection } from './CVWorkHistoryItem';

const CVCoolStuff = () => (
  <CVSection>
    <H3>Talks, Publications, Projects</H3>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Co-Author &amp; Consultant • JavaScript Made Easy •{' '}
          <A href="http://dk.com">DK</A>
        </Fragment>
      }
      date="February 2018"
    >
      <A href="https://amzn.to/2mIPmQc">The book on Amazon</A>. A short exercise
      book for children aimed 7-11, introducing them to programming in
      JavaScript with a series of short, fun projects. The book was published by
      DK, part of Penguin Random House.
    </CVWorkHistoryItem>

    <CVWorkHistoryItem name="Talk • Intro to GraphQL" date="August 2017">
      <A href="https://speakerdeck.com/somehats/intro-to-graphql">
        Check out the slides
      </A>. A talk about GraphQL at Node Workshops, a meetup group. What it is,
      how it works, how it compares to other tech, and how to get started with
      it.
    </CVWorkHistoryItem>

    <CVWorkHistoryItem name="Talk • Teaching Tech" date="July 2017">
      <A href="https://speakerdeck.com/somehats/teaching-tech">
        Check out the slides
      </A>. A talk given at Queer Code London about how everyone in tech -
      especially those who are new to the industry - has something to offer when
      it comes to teaching others.
    </CVWorkHistoryItem>
    <CVWorkHistoryItem
      name="Talk • Error Handling in GraphQL"
      date="January 2017"
    >
      <p>
        <A href="https://skillsmatter.com/skillscasts/9582-graphql-growing-pains">
          Watch on Skills Matter
        </A>. A short talk on our use of <Em>GraphQL</Em> at Music Glue. I
        discussed the decision to make error states an explicit part of our
        graph schema for extra resilience if a service went down.
      </p>
    </CVWorkHistoryItem>
  </CVSection>
);

export default CVCoolStuff;
