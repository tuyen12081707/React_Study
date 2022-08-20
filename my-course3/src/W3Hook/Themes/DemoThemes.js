

import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
const configtheme = {
  background: '#000',
  color: '#FFF',
  fontSize: '15px',
  fontWeight: 'bold'
}
const lighttheme = {
  background: 'white',
  color: 'black',
  border:'1px solid black',
  fontSize: '15px',
  fontWeight: 'bold'
}

const DivStyle = styled.div`
color:${props => props.theme.color};
padding:5%;
background-Color:${props => props.theme.background};
font-size: ${props => props.theme.fontSize};
font-weight:${props => props.theme.fontWeight};
border : ${props=>props.theme.border};
`;
export default class DemoThemes extends Component {
  state = {
    currentTheme: configtheme
  }
  handel_btn_change = (event) => {
    this.setState({
      currentTheme: event.target.value == '1' ? configtheme : lighttheme
    })
  }
  render() {
    return (
      <div>
        <ThemeProvider theme={this.state.currentTheme}>
          <DivStyle>
            Hello Chao ban
          </DivStyle>
        </ThemeProvider>
        <select onChange={this.handel_btn_change}>
          <option value="1">Dark Theme</option>
          <option value="2">Light Theme</option>

        </select>
      </div>
    )
  }
}
