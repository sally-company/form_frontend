import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 40%;
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-out;
`;

const SLink = styled(Link)`
  display: flex;
  text-decoration: none;
  font-size: 16px;
  color: #3F3F3F;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
`;

const Logo = styled.img`
  height: 60px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;
`;

const Item = styled.li`
    margin-top: 23px;
`;

const SlideDrawer = props => {
    return (
      <Container isOpen={props.isShow}>
        <Content>
            <SLink to="/" onClick={props.drawerToggleClickHandler}>
                <Logo 
                    src={ require("images/logo.png") }
                    alt={`logo`} 
                />
            </SLink>
            <List>
            <Item>
                <SLink to="/salo" onClick={props.drawerToggleClickHandler}>Salon</SLink>
            </Item>
            <Item>
                <SLink to="/magazine" onClick={props.drawerToggleClickHandler}>Magazine</SLink>
            </Item>
            <Item>
                <SLink to="/host" onClick={props.drawerToggleClickHandler}>Host</SLink>
            </Item>
            </List>
        </Content>
        
      </Container>
    );
  }

export default SlideDrawer;