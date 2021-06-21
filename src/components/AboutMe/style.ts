import styled from 'styled-components'

export const Container = styled.div`
  color: var(--primary);
  padding: 70px 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  scroll-margin-top: 100px;

  @media screen and (max-width: 768px) {
    padding: 70px 10px;
  }
`

export const Title = styled.h1`
  margin-bottom: 10px;
  font-weight: 100;
  font-size: 63px;

  @media screen and (max-width: 768px) {
    font-size: 33px;
  }
`

export const Line = styled.div`
  margin-right: 600px;
  width: 100px;
  height: 3px;
  margin-bottom: 50px;
  background-color: var(--primary);

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`

export const BoxProfile = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Profile = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  div {
    display: flex;
    align-items: center;
    border-radius: 60%;

    h2 {
      margin-left: 20px;
      font-size: 39px;
      font-weight: 100;
    }
  }

  h3 {
    font-size: 35px;
    font-weight: 900;
  }

  p {
    margin-top: 9px;
    font-size: 19px;
    font-weight: 200;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    margin-bottom: 40px;

    div {
      display: flex;
      align-items: center;
      border-radius: 60%;

      h2 {
        margin-left: 20px;
        font-size: 29px;
        font-weight: 100;
      }
    }
  }
`

export const Poetry = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 10px;
    font-size: 38px;
    font-weight: 200;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PoetryButton = styled.button`
  color: white;
  margin-bottom: 10px;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: 20px;
  border-radius: 7px;
  font-weight: 200;
  width: 90%;
  padding: 4px;
  transition: 0.3s;

  &:hover {
    background-color: var(--primary);
    color: white;
  }
`

export const ContactButton = styled.a`
  background-color: rgba(231, 141, 60, 0.3);
  color: white;
  padding: 20px;
  font-size: 20px;
  margin-top: 40px;
  border-radius: 27px;
  transition: border-radius 0.4s, background-color 0.4s, color 0.4s;

  text-decoration: none;

  &:hover {
    background-color: rgba(231, 141, 60, 1);
    color: white;
  }
`
