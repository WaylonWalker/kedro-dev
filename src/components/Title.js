import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const TitleStyle = styled(animated.h1)`

    text-align: center;
    color: #fafafa;
    font-size: 5rem;
    position: relative;
`


const Title = ({ delay = 0, children }) => {
    const h1Animation = useSpring({
        opacity: 1, top: 0, from: { opacity: 0, top: -50 }, delay: delay
    })

    return (
        <TitleStyle style={h1Animation}>
            {children}
        </TitleStyle>

    )
}

export default Title
