import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

const FadeInStyle = styled(animated.div)`
position: relative;

`

const FadeIn = ({ delay = 0, style, children }) => {
    const Animation = useSpring({
        opacity: 1, top: 0,
        from: { opacity: 0, top: -15 },
        config: config.stiff,
        delay: delay
    })

    return (
        <FadeInStyle style={{ ...Animation, ...style }}>
            {children}
        </FadeInStyle >

    )
}

export default FadeIn
