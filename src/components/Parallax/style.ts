import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  padding: 60px 50px;
`
export const Overlay = styled.a`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  height: 300px;
  color: white;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transform: scale(1.02);
  }

  p {
    font-size: 40px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    height: 200px;

    p {
      font-size: 20px;
    }
  }
`
