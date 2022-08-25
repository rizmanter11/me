import React from 'react';
import styled from 'styled-components';
import ThemeList from '../../data/ThemeList';

const ParagraphTextStyle = styled.p`
    font-size: 1.6rem;
    line-height: 1.4rem;
    color: ${({theme: {theme}}) => theme === ThemeList.light ? 'var(--darkBlue_1)' : 'var(--lightBlue_2)'};

    @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

function ParagraphText({children}) {
  return <ParagraphTextStyle>{children}</ParagraphTextStyle>;
}

export default ParagraphText