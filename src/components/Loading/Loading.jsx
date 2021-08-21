import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoadingStyles = styled.div`
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
  }
`;

const CircularIndeterminate = () => {
  return (
    <LoadingStyles>
      <div className="loading"><CircularProgress /></div>
    </LoadingStyles>
  );
}

export default CircularIndeterminate;