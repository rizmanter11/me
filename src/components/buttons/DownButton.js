import React from 'react'
import styled from 'styled-components';
import ThemeList from '../../data/ThemeList';

const DownButtonStyles = styled.a`
    display: inline-block;
    width: 80px;
    height: 80px;
    margin-top: 1vh;
    cursor: pointer;
    border: none;
    svg{
        color: var(--mediumSlateBlue);
    }
    &:hover{
        transform: scale(1.1);
        transition: 0.3s ease transform;
    }

    @media only screen and (max-width: 768px){
        width: 80px;
        height: 80px;
    }
`;

function DownButton({children}, ...rest) {
  return <DownButtonStyles {...rest}>{children}</DownButtonStyles>;
}

export default DownButton