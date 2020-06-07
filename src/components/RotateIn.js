import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

const RotateInStyle = styled(animated.div)`
position: relative;
display: block;

`

const RotateIn = ({ children }) => {
    const Animation = useSpring({
        opacity: 1,
        top: 0,
        transform: `rotateX(0deg)`,
        from: {
            opacity: 0,
            top: -15,
            transform: `rotateX(300deg)`,
        },
        config: config.stiff
    })

    return (
        <RotateInStyle style={Animation}>
            {children}
        </RotateInStyle>

    )
}

export default RotateIn
