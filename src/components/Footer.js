import React from "react";
import { GridContainer, Grid, Cell } from 'react-foundation';

const Footer = () => (
  <GridContainer>
    <Grid>
      <Cell large={12}>
        <hr/>
        <small className='bold'><i>Made by <a href='https://github.com/benjaminviaud'>@benjaminviaud</a></i></small>
      </Cell>
    </Grid>
  </GridContainer>
)

export default Footer;
