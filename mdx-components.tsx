import styled from 'styled-components';
import type { MDXComponents } from 'mdx/types';

const StyledH1 = styled.h1`
  font-size: 2.5rem;
  color: #ff6600;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #ff6600;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  color: #ff6600;
  margin-top: 1.8rem;
  margin-bottom: 1.3rem;
  border-bottom: 1px solid #ff6600;
`;

const StyledH3 = styled.h3`
  font-size: 1.75rem;
  color: #ff6600;
  margin-top: 1.6rem;
  margin-bottom: 1.1rem;
`;

const StyledH4 = styled.h4`
  font-size: 1.5rem;
  color: #ff6600;
  margin-top: 1.4rem;
  margin-bottom: 1rem;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  color: #444; 
  line-height: 1.6;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledBlockquote = styled.blockquote`
  border-left: 4px solid #ff6600;
  padding-left: 1rem;
  color: #777;
  font-style: italic;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledUl = styled.ul`
  list-style: disc outside;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`;

const StyledOl = styled.ol`
  list-style: decimal outside;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
`;

const StyledLi = styled.li`
  line-height: 1.5;
  color: #444;
  margin-bottom: 0.5rem;
`;

const StyledCode = styled.code`
  background-color: #ffe5d4; 
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const StyledPre = styled.pre`
  background-color: #fff5e5;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  white-space: pre-wrap;  // Added this line
`;

const StyledA = styled.a`
  color: #ff6600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledStar = styled.span`
  display: inline-block;
  width: 16px;   // Adjust this width as needed
  height: 16px;  // Adjust this height as needed
  background-color: #ff6600;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  margin-right: 0.5rem; // Space between star and adjacent text
`;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: props => <StyledH1 {...props} />,
    h2: props => <StyledH2 {...props} />,
    h3: props => <StyledH3 {...props} />,
    h4: props => <StyledH4 {...props} />,
    p: props => <StyledParagraph {...props} />,
    blockquote: props => <StyledBlockquote {...props} />,
    ul: props => <StyledUl {...props} />,
    ol: props => <StyledOl {...props} />, // added this line for ordered lists
    li: props => <StyledLi {...props} />,
    code: props => <StyledCode {...props} />,
    pre: props => <StyledPre {...props} />,
    a: props => <StyledA {...props} />,
    Star: props => <StyledStar {...props} />,
    ...components,
  };
}