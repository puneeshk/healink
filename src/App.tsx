import React, { useState } from 'react';
import './App.scss';
import AtomTabs from './atoms/tabs/tabs';
import AtomTabPanel from './atoms/tabs/tabPanel';
import { Container, Grid } from '@mui/material';
import DrImg from '../src/assets/doctor.png'
import HeaderTemplate from './templates/header';
import AtomButton from './atoms/buttons/button';


function App() {
  const TabsName = [
    {
      text: "Personal Details"
    },
    {
      text: "Education & Experience"
    },
    {
      text: "Establishment Details"
    },
    {
      text: "KYC Verification"
    },
  ]
  const [currenTab, setCurrenTab] = useState(0);
  const handleTabChange = (event: React.SyntheticEvent<Element, Event>, value: number) => {
    setCurrenTab(value)
  }
  return (
    <>
      <HeaderTemplate />
      <div className="nav-tab">
        <Container>
          <AtomTabs
            variant='standard'
            onChange={handleTabChange}
            value={currenTab}      
          >
            {TabsName}
          </AtomTabs>
        </Container>      
      </div>
      <AtomTabPanel value={currenTab} index={0}>
        <div className='personal-info'>
          <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <img src={DrImg} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </AtomTabPanel>
      <AtomTabPanel value={currenTab} index={1}>
        Education & Experience
      </AtomTabPanel>
      <AtomTabPanel value={currenTab} index={2}>
        Establishment Details
      </AtomTabPanel>
      <AtomTabPanel value={currenTab} index={3}>
        KYC Verification
      </AtomTabPanel>
      <AtomButton
          variant="contained"
      >
        Puneesh
      </AtomButton>
    </>
  )
}

export default App;