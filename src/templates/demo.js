import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledContainer = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
  
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledHeader = styled.header`
  margin: 100px 0 50px;
  text-align: center;
  
  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 20px;
    color: var(--lightest-slate);
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: var(--slate);
    line-height: 1.6;
  }
`;

const StyledContent = styled.div`
  margin-bottom: 100px;
  
  h2, h3, h4, h5, h6 {
    margin: 2em 0 1em;
    color: var(--lightest-slate);
  }

  p {
    margin: 1em 0;
    line-height: 1.6;
    color: var(--slate);
  }

  a {
    color: var(--green);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--white);
      text-decoration: underline;
    }
  }

  code {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    padding: 0.2em 0.4em;
  }

  pre {
    background-color: var(--lightest-navy);
    border-radius: var(--border-radius);
    padding: 20px;
    margin: 1.5em 0;
    overflow-x: auto;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  .demo-container {
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
  }
`;

const DemoTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, description } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet>
        <title>{title} | Jacob Darling</title>
        <meta name="description" content={description} />
      </Helmet>

      <StyledContainer>
        <StyledHeader>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </StyledHeader>

        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          
          {/* Demo container for interactive elements */}
          <div className="demo-container">
            {/* This is where the demo iframe or component will be rendered */}
            <div id="demo-root"></div>
          </div>
        </StyledContent>
      </StyledContainer>
    </Layout>
  );
};

export default DemoTemplate;

DemoTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { template: { eq: "demo" }, slug: { eq: $path } }) {
      html
      frontmatter {
        title
        description
        template
      }
    }
  }
`;
