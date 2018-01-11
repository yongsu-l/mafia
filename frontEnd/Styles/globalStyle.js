import styled,{injectGlobal} from 'styled-components'
import {Link} from 'react-router-dom'
/* eslint-disabled */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300,400,500');

  body {
    font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', sans-serif;
  }

`


export const Links = styled(Link)`
    text-decoration: none;
`;
