import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;


export const NoMatch = (props) => (
  <GridWrapper><form>
  <h1>Enter your sales details</h1>
  
  <label>
    Month
    <input type="text" name="month" />
  </label>


  <label>
    Sales
    <input type="text" name="sales" />
  </label>


</form>
    </GridWrapper>
)