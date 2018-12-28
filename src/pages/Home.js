import React from "react";
import ReactDOM from "react-dom";
import Layout from "../components/layout";
import { hot } from 'react-hot-loader/root'

const Home = () => (
  <Layout>
    <div className='grid-container'>
      <div className='grid-x'>
        <div className='cell large-12'>
          <h1 className='m-t-l'>ReactPress</h1>
          <p>the React starter-theme for Wordpress built on Foundation by Zurb.</p>
          <a href='https://github.com/benjaminviaud/reactpress' className='button large primary'>Downloading ReactPress</a>
        </div>
      </div>
    </div>
  </Layout>
)

export default hot(Home);
