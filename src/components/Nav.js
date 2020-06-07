import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Icon from './icon'

const NavStyles = styled.ul`
    background: #1D303B;
    display: flex;
    list-style-type: none;
    align-items: center;
    a{
        color: white;
        text-decoration-color: yellow;
        padding: .5rem 1rem;
    }
    a:hover {
        background: rgba(255, 255, 255, 0.1);
    }


`

const Nav = () => (
    <NavStyles>
        <li>
            <Link to='/'><Icon /></Link>
        </li>
        <li>
            <Link to='/docs'>Docs</Link>
        </li>
        <li>
            <Link to='/community'>Community</Link>
        </li>
    </NavStyles>
)


export default Nav
