import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Profile from './Profile'

const AppWrapper = styled.div`
text-align:center;
`

function App() {
  return (
    <AppWrapper >
      <Header />
      <Profile />
    </AppWrapper>
  );
}

export default App;
