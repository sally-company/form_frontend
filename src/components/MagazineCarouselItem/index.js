import React from 'react';
import styled from "styled-components"; // You need this as well
import PropTypes from 'prop-types';
import colors from "../../config/_color";
import sizes from "../../config/_sizes";

const SalonCarouselItem = (props) => {
    return (
        <Container>
            <Image bgURL={require('images/magazine1.png')}>
            </Image>
            <Title>
                {props.title}
            </Title>
            <SubTitle>
                {props.subtitle}
            </SubTitle>
            <Creator>
                {`By ${props.creator}`}
            </Creator>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;  
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.bgURL});
  background-position: center center;
  background-size: cover;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;

const Title = styled.span`
  width: 100px;
  font-size: ${sizes.titleFontSize};
  color: ${colors.elusiveAlmond};
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubTitle = styled.span`
  width: 100px;
  font-size: ${sizes.largeFontSize};
  color: ${colors.dismayedMousy}
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 5px 0;
`;

const Creator = styled.span`
  width: 100px;
  font-size: ${sizes.normalFontSize};
  margin: 15px 0;
  color: ${colors.stellarAlmond}
`

SalonCarouselItem.propTypes = {

    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired
}

export default SalonCarouselItem;