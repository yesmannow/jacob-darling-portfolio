import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledHackathonSection = styled.section`
  max-width: 900px;

  .hackathon-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

const StyledHackathon = styled.div`
  position: relative;
  cursor: default;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
  }

  .hackathon-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
  }

  .hackathon-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .hackathon-links {
      margin-right: -10px;
      color: var(--light-slate);
    }

    a {
      padding: 5px 7px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .hackathon-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
  }

  .hackathon-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .hackathon-tech-list {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    flex-grow: 1;
    margin-top: 20px;
    padding: 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Hackathon = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const hackathons = [
    {
      title: 'AI-Powered Code Review Assistant',
      description: 'Built an intelligent code review tool that uses machine learning to identify potential bugs and suggest improvements. Won 1st place in the AI/ML category.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      github: 'https://github.com/example/ai-code-review',
      external: 'https://devpost.com/software/ai-code-review-assistant',
    },
    {
      title: 'Sustainable City Dashboard',
      description: 'Created a real-time dashboard for monitoring urban sustainability metrics including air quality, energy consumption, and waste management.',
      tech: ['Next.js', 'D3.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/example/sustainable-city',
      external: 'https://sustainable-city-dashboard.vercel.app',
    },
    {
      title: 'Blockchain Voting System',
      description: 'Developed a secure, transparent voting platform using blockchain technology to ensure election integrity and prevent tampering.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      github: 'https://github.com/example/blockchain-voting',
      external: 'https://blockchain-voting-demo.netlify.app',
    },
  ];

  return (
    <StyledHackathonSection id="hackathon" ref={revealContainer}>
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Hackathon Projects
      </motion.h2>

      <motion.div
        className="hackathon-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {hackathons.map((hackathon, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <StyledHackathon>
              <div className="hackathon-inner">
                <header>
                  <div className="hackathon-top">
                    <div className="folder">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H13L11 5H5C3.89543 5 3 5.89543 3 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="hackathon-links">
                      <a href={hackathon.github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C17.2 15.17 19.5 14.35 19.5 10.3C19.5 9.25 19.15 8.3 18.5 7.55C18.8188 6.46091 18.791 5.29599 18.42 4.22C18.42 4.22 17.56 3.95 16.5 4.65C15.12 4.18 13.64 4.18 12.26 4.65C11.2 3.95 10.34 4.22 10.34 4.22C9.969 5.29599 9.94125 6.46091 10.26 7.55C9.61 8.3 9.26 9.25 9.26 10.3C9.26 14.33 11.54 15.16 13.66 15.53C13.3239 15.8765 13.0658 16.2892 12.9027 16.7417C12.7395 17.1942 12.6748 17.6757 12.7125 18.155V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <a href={hackathon.external} aria-label="External Link" className="external" target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <h3 className="hackathon-title">{hackathon.title}</h3>

                  <div className="hackathon-description">
                    <p>{hackathon.description}</p>
                  </div>
                </header>

                <footer>
                  <ul className="hackathon-tech-list">
                    {hackathon.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </StyledHackathon>
          </motion.div>
        ))}
      </motion.div>
    </StyledHackathonSection>
  );
};

export default Hackathon;
