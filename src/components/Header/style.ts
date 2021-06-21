import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 130px;
  padding: 0 200px;
  background-color: black;
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const NavButton = styled.a`
  color: var(--primary);
  font-size: 15px;
  margin: 0 18px;
  text-decoration: none;
  padding: 0;
  border-bottom: 2px solid black;
  transition: border-bottom 0.5s, padding 0.5s;

  &:hover {
    padding-bottom: 51px;
    border-bottom: 2px solid var(--primary);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
