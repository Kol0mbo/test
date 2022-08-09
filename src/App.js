import React from 'react';
import styled from 'styled-components'
import Tabs from './Tabs';

const FlexStyled = styled.div`
display: flex;
padding: 10px;
border-bottom: 4px solid #662E1C;
box-shadow: #662E1C 0px -70px 100px -10px inset;
flex-direction: $row;
align-items: stretch;
justify-content: center;
`
const TitleStyled = styled.h1`
color: #EBDCB2;
font-family: Comic Sans MS;
font-size: 3rem;
`
const AppStyle = styled.div`
width: 100%;
min-height: 100vh;
background: #EBDCB2;
`
const App = () => {
    return (
     <AppStyle>      
         <FlexStyled> 
         <TitleStyled>Coctails</TitleStyled>        
        </FlexStyled>
         <Tabs/>    
     </AppStyle>
    );
};

export default App;
