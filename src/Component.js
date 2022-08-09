import React from 'react'
import styled from 'styled-components'

  var value = [];


const ImageStyle = styled.img`
width: 200px;
height: 220px;

`
const ItemStyle = styled.div`
justify-content: center;
width: 200px;
margin: 8px;
border-radius: 3px;
box-shadow: 10px 10px 5px #C9A66B;
position:relative;
overflow:auto;
display: inline-block;
align-items: center;
`
const TitleStyle = styled.div`
height: 50px;
font-family: Comic Sans MS;
font-size: 1rem;
text-align: center;
`
const ButtonStyle = styled.button`
margin: 4px;
display: inline-block;
outline: none;
cursor: pointer;
font-size: 12px;
line-height: 20px;
font-weight: 60;
border-radius: 8px;
padding: 14px;
border: none;
transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
background: #662E1C;
color: #fff;
color: #fff;

`
const DeleteStyle = styled.button`
margin: 4px;
display: inline-block;
outline: none;
cursor: pointer;
font-size: 12px;
line-height: 20px;
font-weight: 600;
border-radius: 8px;
padding: 14px;
border: none;
transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
background: #662E1C;
color: #fff;
float: right;
`
const Click = event => { 
  value.forEach((id,idx) =>{
    if(id === event.currentTarget.id)
    {
        value.splice(idx,1);
    } 
  });
  localStorage.setItem('item', JSON.stringify(value))
};

const handleClick = event => {  
  if(value.length === 0){
    value.push(event.currentTarget.id);
    }
      else{
    if(!value.includes(event.currentTarget.id)){
      value.push(event.currentTarget.id);
    }
}
localStorage.setItem('item', JSON.stringify(value))
};

function Component({items} ) {
  return ( 
    <main id="main">
    {items.map(item => (
          <ItemStyle key={item.id}>
          <ImageStyle img src={item.strDrinkThumb}/>
        <TitleStyle>{item.strDrink}</TitleStyle>
        <ButtonStyle  id={item.idDrink} onClick={handleClick}>Favorite</ButtonStyle>
        <DeleteStyle  id={item.idDrink} onClick={Click}>Delete</DeleteStyle>
        </ItemStyle>                        
            
    ))}
    </main>
  );
}


export default Component