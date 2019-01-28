import React, {Component} from 'react'
import styled from 'styled-components'
import MagazineCarouselItem from '../MagazineCarouselItem'
import device from "../../config/device"

class SalonCarousel extends Component {

    render() {
        return (
            <Container>
                <PreviousButton> </PreviousButton>
                <Slider>
                    <CarouselContainer>
                        <MagazineCarouselItem
                            imageUrl={`images/magazine1.png`} title={`test`}
                            subtitle={'subtitle'} creator={`최부영`}/>
                    </CarouselContainer>
                    <CarouselContainer>
                        <MagazineCarouselItem
                            imageUrl={`images/magazine1.png`} title={`test`}
                            subtitle={'subtitle'} creator={`최부영`}/>
                    </CarouselContainer>
                    <CarouselContainer>
                        <MagazineCarouselItem
                            imageUrl={`images/magazine1.png`} title={`test`}
                            subtitle={'subtitle'} creator={`최부영`}/>
                    </CarouselContainer>
                </Slider>
                <NextButton></NextButton>
            </Container>
        );
    }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Slider = styled.div`
  flex: 1;  
  display: flex;
  height: 100%;
  justify-content: space-between;
  
  @media ${device.tablet}{
  
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  margin: 10px;
  
  @media ${device.laptop}{
    &:last-child  {
    display: none;
    }
  }
  
  @media ${device.tablet}{
    
    &:last-child  {
    display: none;
    }
  }
  
  @media ${device.phone}{
    &:not(:first-child)  {
    display: none;
    }
  }
`

const PreviousButton = styled.button`
    height: 20px;
    margin-left: 10px;
`

const NextButton = styled.button`
    height: 20px;
    margin-right: 10px;
`

export default SalonCarousel

