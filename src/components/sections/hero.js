import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const one = (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Hi, my name is
    </motion.h1>
  );
  const two = (
    <motion.h2
      className="big-heading"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Jacob Darling.
    </motion.h2>
  );
  const three = (
    <motion.h3
      className="big-heading"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      I build innovative digital solutions.
    </motion.h3>
  );
  const four = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <p>
        I'm a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I'm focused on building accessible, human-centered products
        at{' '}
        <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
          Upstatement
        </a>
        .
      </p>
    </motion.div>
  );
  const five = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <a
        className="email-link"
        href="https://www.newline.co/courses/build-a-spotify-connected-app"
        target="_blank"
        rel="noreferrer">
        Check out my course!
      </a>
    </motion.div>
  );

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          <h1>Hi, my name is</h1>
          <h2 className="big-heading">Jacob Darling.</h2>
          <h3 className="big-heading">I build innovative digital solutions.</h3>
          <p>
            I'm a software engineer specializing in building (and occasionally designing) exceptional
            digital experiences. Currently, I'm focused on building accessible, human-centered products
            at{' '}
            <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
              Upstatement
            </a>
            .
          </p>
          <a
            className="email-link"
            href="https://www.newline.co/courses/build-a-spotify-connected-app"
            target="_blank"
            rel="noreferrer">
            Check out my course!
          </a>
        </>
      ) : (
        <>
          {one}
          {two}
          {three}
          {four}
          {five}
        </>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
