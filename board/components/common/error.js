import styled from 'styled-components';

const Error = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  font-size: 10px;
  padding: 10px;
  background-color:#f00;
  color: #fff;
`
export default Error;