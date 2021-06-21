import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 90px 30px;
  background-color: rgba(17, 16, 16, 1);

  scroll-margin-top: 130px;

  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
`

export const SquareGalery = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 60px;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin: 0 40px;
  }
`

export const WhyMeContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 200;
  }
  p {
    font-weight: 100;
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const WhyMe = styled.div`
  width: 50%;

  h2 {
    text-align: center;
    font-weight: 100;
  }

  p {
    font-weight: 400;
    line-height: 30px;
    text-align: center;
  }

  p:nth-child(3) {
    font-weight: 800;
    color: var(--primary);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    h2 {
      text-align: center;
      font-weight: 100;
      font-size: 30px;
    }

    p {
      font-size: 16px;
      font-weight: 200;
    }
  }
`

export const BigNumbers = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    display: flex;
    padding: 6px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const BoxBigNumbers = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;

    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 500;
      color: var(--primary);
    }
    p {
      margin: 5px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      margin: 20px 0px;

      h2 {
        margin: 0;
        font-size: 15px;
        font-weight: 500;
        color: var(--primary);
      }
      p {
        margin: 5px;
      }
    }
  }
`
