import { createGlobalStyle } from 'styled-components'

const  GlobalStyle = createGlobalStyle`
  body {
    width: ${props => props.theme.body.width};
    background-image:${props => props.theme.body.backgroundImage};
    min-height: ${props => props.theme.body.minHeight};
  }
`

export default GlobalStyle