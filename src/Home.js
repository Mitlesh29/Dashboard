import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BarChart from './components/BarChart';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;


export const Home = (props) => (
  <GridWrapper>

<React.Fragment>
      <Router>
        <BarChart/>
      </Router>
    </React.Fragment>

    
  </GridWrapper>
)

