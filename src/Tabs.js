import React, {useState, useEffect} from 'react'
import Component from './Component';
import styled from 'styled-components'
const SearchStyle = styled.input`
margin: 1rem;
background-color: transparent;
padding:0.5rem 1rem;
border-radius: 50px;
font-size: 1rem;
color:#AF4425;
font-family: inherit;
`
const Style = styled.div`
`
function Tabs() {

    const API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then((result) => {
            if(result == null){
                setItems('');
            }else{
          setItems(result.drinks);
         }       
           })   
      }, [])

      function Search(e){
        const val = e.target.value;
        if(val) {
         getMovie('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+val)
      }else{
         getMovie(API);
      }
      }

      function getMovie(url){
        fetch(url)
        .then(res => res.json())
        .then((result) => {
          setItems(result.drinks);
 
           }) 
           
      } 

  return (
      <Style>
        <SearchStyle type="text" placeholder="Search" id="search" class="search" onChange={Search} ></SearchStyle>
        {items === null ?
        <h1>No Results Found</h1>
        :
        <Component items={items}/>  
        }
        
    </Style>
  )
}

export default Tabs