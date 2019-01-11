import React from "react";
import Layout from "../components/Layout";
import { GridContainer, Grid, Cell } from 'react-foundation';


const Home = () => (
  <Layout>
    <GridContainer>
      <Grid>
        <Cell large={12}>
          <h1 className='m-t-l'>ReactPress</h1>
          <p>the React starter-theme for Wordpress built on Foundation by Zurb.</p>
          <a href='https://github.com/benjaminviaud/reactpress' className='button large primary'>Downloading ReactPress</a>
        </Cell>
      </Grid>
    </GridContainer>
  </Layout>
)

export default Home;
