import React from 'react'
import styled from 'styled-components'

const HeaderImage  = (props) =>{
    return(
        <Image bgURL = {require('images/bg_1.png')}>
        </Image>
    )
};

const Image = styled.div`
  width: 100%;
  height: 100%;
  
  background-image: url(${props=> props.bgURL});
  background-position: center center;
  background-size: cover;
`;

export default HeaderImage;