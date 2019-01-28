import React, {Component} from 'react'
import styled from 'styled-components'
import MagazineCarouselItem from '../MagazineCarouselItem'
import color from "../../config/_color";
import device from "../../config/device";


class Magazine extends Component {

    render() {
        return (
            <Container>
                <TextContainer>
                    <RecommendText>전체 매거진</RecommendText>
                </TextContainer>
                <Divider/>
                <MagazineColoum>

                    <MagazineContainer>
                        <MagazineCarouselItem
                            imageUrl={`images/magazine1.png`} title={`test`}
                            subtitle={'subtitle'} creator={'최부영'}/>
                    </MagazineContainer>
                    <MagazineContainer>
                        <MagazineCarouselItem
                            imageUrl={`images/magazine1.png`} title={`test`}
                            subtitle={'subtitle'} creator={'최부영'}/>
                    </MagazineContainer>
                    <MagazineContainer>
                        <MagazineCarouselItem
                            imageUrl={`images/magazine1.png`} title={`test`}
                            subtitle={'subtitle'} creator={'최부영'}/>
                    </MagazineContainer>

                </MagazineColoum>
            </Container>

        );
    }

}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MagazineColoum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const MagazineContainer = styled.div`
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


export default Magazine
