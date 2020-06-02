import { createGlobalStyle } from 'styled-components'

const  GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    background-image:${props => props.theme.body.backgroundImage};
    min-height: 100vh;
  }
`

export default GlobalStyle