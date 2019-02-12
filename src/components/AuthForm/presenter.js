import React from 'react'
import styled from "styled-components"

const Label = styled.label``;

const NameContainer = (props) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
    `;
    const Input = styled.input``;
    return (
        <Container>
            <Label>성함</Label>
            <Input placeholder={`본명을 알려주세요.`}></Input>
        </Container>
    )
}

const SexContainer = (props) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
    `;
    const RadioLabel = styled.label``;
    const Radio = styled.input``;
    return (
        <Container>
            <Label>성별</Label>
            <Radio type={`radio`} value={`male`} name={`sex`}/>
            <RadioLabel>남자</RadioLabel>
            <Radio type={`radio`} value={`female`} name={`sex`}/>
            <RadioLabel>여자</RadioLabel>
        </Container>
    )
}

const BirthDateContainer = (props) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
    `;
    const Input = styled.input``;
    return (
        <Container>
            <Label>생년월일</Label>
            <Input placeholder={`YYYY  /  MM  /  DD`}/>
        </Container>
    )
}

const NicknameContainer = (props) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
    `;
    const Input = styled.input``;
    return (
        <Container>
            <Label>별명</Label>
            <Input placeholder={`본명 대신 불리고 싶은 이름이 있다면 알려주세요`}/>
        </Container>
    )
}

const PhoneNumberContainer = (props) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
    `;
    const Input = styled.input``;
    return (
        <Container>
            <Label>연락처</Label>
            <Input placeholder={`연락이 가능한 본인의 휴대폰 번호를 알려주세요.`}/>
        </Container>
    )
}

const EmailContainer = (props) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
    `;
    const Input = styled.input``;
    return (
        <Container>
            <Label>이메일 주소</Label>
            <Input placeholder={`자주 확인하는 이메일 주소를 알려주세요.`}/>
        </Container>
    )
}

const BioContainer = (props) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
    `;
    const Input = styled.textarea``;
    return (
        <Container>
            <Label>소개</Label>
            <Input placeholder="폼은 같은 취미, 비슷한 취향을 가진 사람들을 연결시켜주는 곳입니다. 다른 멤버들이 어떤 사람인지 알 수 있게 소개를 해주세요. 하루 일과, 좋아하는 음식, 영화, 책, 노래 무엇이든 다 좋습니다."></Input>
        </Container>
    )
}

const JoinContainer = (props) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
    `;
    const Button = styled.button`
    `;
    return (
        <Container>
            <Button>가입하기</Button>
        </Container>
    )
}

const AuthForm = (props, context) => {
    const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `;
    return (
        <Container>
            <NameContainer></NameContainer>
            <SexContainer></SexContainer>
            <BirthDateContainer></BirthDateContainer>
            <NicknameContainer></NicknameContainer>
            <PhoneNumberContainer></PhoneNumberContainer>
            <EmailContainer></EmailContainer>
            <BioContainer></BioContainer>
            <JoinContainer></JoinContainer>
        </Container>
    )
}

export default AuthForm