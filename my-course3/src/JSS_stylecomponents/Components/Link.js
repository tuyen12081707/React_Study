import styled from 'styled-components';
import React from 'react';
const Link = ({ className,children, ...resProps }) => (
    <a className={className}>
        {children}
    </a>
);

export const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
    text-decoration:none

  `;
