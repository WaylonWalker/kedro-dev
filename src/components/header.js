import React from 'react'
import Headroom from 'react-headroom'
// import Nav from 'src/components/Nav'

import styled from 'styled-components'

const HeaderStyle = styled.div`
  background: #1D303B;
`

const Header = () => (
  <Headroom>
    <HeaderStyle>
      {/* <Nav /> */}
    </HeaderStyle>
  </Headroom>
)
export default Header
