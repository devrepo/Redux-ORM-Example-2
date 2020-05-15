import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: ${(props) => ( props.visible == false ? 'none' : 'block')};
  border : 1px solid #000;
  width:  ${(props) => (props.width ? props.width+'px' : 'auto')};
  height:  ${(props) => (props.height ? props.height+'px' : 'auto')};
  padding: 10px;
  margin-bottom: 10px;
`
const Label = styled.div`
  font-family: Helvetica,Arial;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
`

const LabeledBox = (props) => {
  const { label, children, ...boxProps} = props;
  return (
    <Box {...boxProps}>
      <Label>{label}</Label>
      {children}
    </Box>
  )
}
export { Box as default, LabeledBox};