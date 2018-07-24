import React, { Fragment } from 'react';
import { H3, A, Em } from '../../lib/styles';
import CVWorkHistoryItem, { CVSection } from './CVWorkHistoryItem';

const CVCoolStuff = () => (
  <CVSection>
    <H3>Talks, Publications, Projects</H3>

    <CVWorkHistoryItem
      name={
        <Fragment>
          Author &amp; Consultant • JavaScript Made Easy •{' '}
          <A href="http://dk.com">DK</A>
        </Fragment>
      }
      date="February 2018"
    >
      done a boosk
    </CVWorkHistoryItem>

    <CVWorkHistoryItem name="Talk • Intro to GraphQL" date="August 2017">
      {'https://speakerdeck.com/somehats/intro-to-graphql'}
    </CVWorkHistoryItem>

    <CVWorkHistoryItem name="Talk • Teaching Tech" date="July 2017">
      Teaching tech talk
    </CVWorkHistoryItem>
    <CVWorkHistoryItem
      name="Talk • Error Handling in GraphQL"
      date="January 2017"
    >
      <p>
        <A href="https://skillsmatter.com/skillscasts/9582-graphql-growing-pains">
          Watch on Skills Matter
        </A>. A short talk on our use of <Em>GraphQL</Em> at Music Glue. I
        looked at how we had made error handling an explicit part of our data
        schema for extra resilience if a back-end service went down.
      </p>
    </CVWorkHistoryItem>
  </CVSection>
);

export default CVCoolStuff;
