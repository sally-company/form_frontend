import React, {Component} from 'react'
import styled from 'styled-components'
import SalonCarouselItem from '../SalonCarouselItem'
import device from "../../config/device";
import color from "../../config/_color";

class Salon extends Component {
    render() {
        return (
            <Container>
                <TextContainer>
                    <RecommendText>모집중인 살롱</RecommendText>
                </TextContainer>
                <Divider/>
                <SalonColoum>

                    <SalonContainer>
                        <SalonCarouselItem imageUrl={`images/magazine1.png`} title={`test`} subtitle={'subtitle'} />
                    </SalonContainer>
                    <SalonContainer>
                        <SalonCarouselItem imageUrl={`images/magazine1.png`} title={`test`} subtitle={'subtitle'} />
                    </SalonContainer>
                    <SalonContainer>
                        <SalonCarouselItem imageUrl={`images/magazine1.png`} title={`test`} subtitle={'subtitle'} />
                    </SalonContainer>

                </SalonColoum>
                <TextContainer>
                    <RecommendText>마감된 살롱</RecommendText>
                </TextContainer>
                <Divider/>
                <SalonColoum>

                    <SalonContainer>
                        <SalonCarouselItem imageUrl={`images/magazine1.png`} title={`test`} subtitle={'subtitle'} />
                    </SalonContainer>
                    <SalonContainer>
                        <SalonCarouselItem imageUrl={`images/magazine1.png`} title={`test`} subtitle={'subtitle'} />
                    </SalonContainer>
                    <SalonContainer>
                        <SalonCarouselItem imageUrl={`images/magazine1.png`} title={`test`} subtitle={'subtitle'} />
                    </SalonContainer>

                </SalonColoum>
            </Container>
        )
    }
    
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SalonColoum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const SalonContainer = styled.div`
  min-width: 350px;
  margin: 0 20px;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 5px;
  
  
`
const RecommendText = styled.span`
  color: ${color.sleepyJet};
  font-size: 35px;
  font-weight: bold;
  @media ${device.phone} {
  font-size: 30px;
  } 
`
const Divider = styled.div`
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 2px;
      background-color: ${color.stellarAlmond};
      margin-top: 10px;
      margin-bottom: 30px;
    
`



export default Salon
