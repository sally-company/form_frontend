import React from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";
import color from "config/_color"
import device from "config/device"

const ModifyButton = (props) => {
    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 12px;
        cursor: pointer;
    `;
    const Image = styled.img`
        width: 18px;
        height: 18px;
        @media ${device.phone} {
            & {
                font-size: 12px;
            }
        }
        @media ${device.tablet} {
            & {
                font-size: 12px;
            }
        }
    `;
    const Text = styled.span`
        font-size: 15px;
        color: ${color.dismayedMousy};
        margin-left: 5px;
        @media ${device.phone} {
            & {
                font-size: 12px;
            }
        }
        @media ${device.tablet} {
            & {
                font-size: 12px;
            }
        }
    `;
    return (
        <Container>
            <Image src={require('images/pencil_icon.png')} alt=""/>
            <Text>수정하기</Text>
        </Container>
    )
}

const Profile = props => {
    const Container = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        margin-top: 80px;
        padding: 0 100px;
        justify-content: center;
        
        @media ${device.phone} {
            & {
                padding: 0 30px;
            }
        }
        @media ${device.tablet} {
            & {
                padding: 0 50px;
            }
        }
    `;

    const AvatarImageContainer = styled.div`
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
    `;
    const AvatarImage = styled.img`
        width: 100px;
        height: 100px;
        margin-right: 40px;
        @media ${device.phone} {
            & {
                margin-right: 15px;
                width: 70px;
                height: 70px;
            }
        }
        @media ${device.tablet} {
            & {
                margin-right: 20px;
                width: 70px;
                height: 70px;
            }
        }
    `;
    
    const Content = styled.div`
        display: flex;
        height: 100%;
        flex-direction: column;
    `;

    const UsernameContainer = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    `;

    const Username = styled.span`
        color: ${color.sleepyJet};
        font-size: 34px;
        @media ${device.phone} {
            & {
                font-size: 20px;
            }
        }
        @media ${device.tablet} {
            & {
                font-size: 26px;
            }
        }
    `;

    const PermisionContainer = styled.div`
        margin-left: 10px;
    `;

    const Permision = styled.span`
        padding: 1px 5px;
        border: 1px solid ${color.muesli};
        border-width: 1px;
        border-radius: 3px;
        font-size: 12px;

        :not(:last-child) {
            margin-right: 5px;
        }
        color: ${color.muesli};
        @media ${device.phone} {
            & {
                font-size: 8px;
            }
        }
        @media ${device.tablet} {
            & {
                font-size: 8px;
            }
        }
    `;

    const Bio = styled.span`
        line-height: 30px;
        font-size: 18px;
        color: ${color.dismayedMousy};
        @media ${device.phone} {
            & {
                font-size: 16px;
            }
        }
        @media ${device.tablet} {
            & {
                font-size: 16px;
            }
        }
    `;

    return (
        <Container>
            <AvatarImageContainer>
                <AvatarImage src={require('images/profile_placeholder.png')}/>
            </AvatarImageContainer>
            <Content>
                <UsernameContainer>
                    <Username>최부영</Username>
                    <PermisionContainer>
                        <Permision>호스트</Permision>
                        <Permision>에디터</Permision>
                    </PermisionContainer>
                    <ModifyButton/>
                </UsernameContainer>
                <Bio>Jen Doll is a freelance journalist as well as the author of the  upcoming young adult novel Unclaimed Baggage  and the memoir Save the Date Jen Doll is a freelance</Bio>
            </Content>
        </Container>
    );
}


export default Profile
