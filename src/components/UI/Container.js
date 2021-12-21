import styled from 'styled-components';

const Container = styled.div`
  background: #F9F9F9;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 25px;
  text-align: left;

  &.user-list {
    display: none;
  }

  &.show {
    display: block;
  }
`

export default Container;