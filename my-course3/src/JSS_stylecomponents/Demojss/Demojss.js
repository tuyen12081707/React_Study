import React, { Component } from 'react'
import { TuyenButton, Button } from '../Components/Button'
import { Input } from '../Components/Input'
import { StyledLink } from '../Components/Link'




export default class Demojss extends Component {
    render() {
        return (
            <div>
                {/* <Button  >Hello Linh</Button>
                <Button primary>Hello Linh</Button>
                <TuyenButton>Heelo</TuyenButton>
                <StyledLink>Alo</StyledLink> */}
                <Input defaultValue="@probablyup" type="text" />
                <Input defaultValue="@geelen" type="text" inputColor="black" />
                
            </div>
        )
    } 
}
