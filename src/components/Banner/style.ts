import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 130px;
  width: 100vw;
  height: calc(100vh - 130px);
`

export const ImageArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
