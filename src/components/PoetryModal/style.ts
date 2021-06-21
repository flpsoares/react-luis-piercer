import styled from 'styled-components'

import { motion } from 'framer-motion'

export const Container = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 3;
`

export const Box = styled(motion.div)`
  position: relative;

  width: 470px;
  height: 70vh;
`
export const Title = styled.h1`
  text-align: center;
`

export const CloseButton = styled.button`
  position: absolute;

  right: 0;
  top: 10px;

  font-size: 25px;
  color: white;
`

export const Content = styled.div`
  text-align: center;
  line-height: 30px;
  font-size: 20px;

  overflow-y: auto;

  padding: 15px;
  height: 450px;

  color: white;
`
