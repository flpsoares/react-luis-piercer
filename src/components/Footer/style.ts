import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  background-color: black;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 700;
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 13px;
      text-align: center;
    }
  }
`
