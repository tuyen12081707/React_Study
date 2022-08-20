import styled from 'styled-components';


export const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "red" : "white"};
color: ${props => props.primary ? "white" : "red"};

font-size: ${props => props.primary ? "20px" : "10px"};

margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`; 
export const TuyenButton = styled(Button)`
color:white;
background-color:tomato;


`