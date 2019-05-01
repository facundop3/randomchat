import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-radius: 50%;
  color: white;
  background-color: red;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5em;
  width: 1.5em;
  font-size: smaller;
  font-weight: bold;
`

const Badge = ({number}) => number ? <Container title={`${number} Unread messages`}>{number}</Container> : ""

export default Badge