import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Loading from 'components/Loading'
import HeaderImage from '../HeaderImage'
import SalonCarousel from '../SalonCarousel'
import MagazineCarousel from '../MagazineCarousel'
import styled from 'styled-components'
import device from '../../config/device'
import color from "../../config/_color"

const Feed = props => {
    // if (props.loading) {
    //     return <LoadingSalon/>
    // } else if (props.salon) {
    //     return <SalonPage {...props}/>
    // }

    return <SalonPage {...props}/>
}

const LoadingSalon = props => (
    <div className={styles.salon}>
        <Loading/>
    </div>
);

const RenderSalon = props => (
    <div className={styles.salon}> {props.salon.map(post => post.subTitle)} </div>

)

const SalonPage = props => {
    return (
        <Container>
            <HeaderContainer>
                <HeaderImage/>
            </HeaderContainer>
            <TextContainer>
                <RecommendText>추천 살롱</RecommendText>
            </TextContainer>
            <Divider/>
            <SalonCarousel/>
            <TextContainer>
                <RecommendText>추천 매거진</RecommendText>
            </TextContainer>
            <Divider/>
            <MagazineCarousel/>
        </Container>
    )
}

Feed.propTypes = {
    loading: PropTypes.bool.isRequired
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 600px;
  
  @media ${device.tablet} {
  height : 500px
  }
  
  @media ${device.phone} {
  height : 400px
  }  
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

export default Feed