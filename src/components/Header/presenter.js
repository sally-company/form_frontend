import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import device from "config/device";

const Header = styled.header`
  color: #E6E6F3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  width: 100%;
  height: 77px;
  display: flex;

  align-items: center;
  background-color: #2C1951;
  z-index: 10;

  @media ${device.phone} {
    & {
      justify-content: space-between;
    }
  }
  @media ${device.tablet} {
    & {
      justify-content: space-between;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  @media ${device.phone} {
    & {
      justify-content: center;
    }
  }
  @media ${device.tablet} {
    & {
      justify-content: center;
    }
  }
`;

const Logo = styled.img`
  height: 50px;
  margin-left: 100px;
  @media ${device.phone} {
    & {
      margin-left: 0;
    }
  }
  @media ${device.tablet} {
    & {
      margin-left: 0;
    }
  }
`;

const SLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  color: ${props => (props.current ? "#AA8858" : "#E6E6F3")}
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  right: 100px;
  
`;

const Menu = (props) => {
  const List = styled.ul`
    display: flex;
    @media ${device.phone} {
      & {
        display: none;
      }
    }
    @media ${device.tablet} {
      & {
        display: none;
      }
    }
  `;
  const Item = styled.li`
    height: 100%;
    &:not(:last-child) {
      margin-right: 63px;
    }
  `;
  return (
    <List>
      <Item>
        <SLink to="/salon" current={props.pathname === "/salon"}>Salon</SLink>
      </Item>
      <Item>
        <SLink to="/magazine" current={props.pathname === "/magazine"}>Magazine</SLink>
      </Item>
      <Item>
        <SLink to="/host" current={props.pathname === "/host"}>Host</SLink>
      </Item>
    </List>
  );
}

const LoginSignUpButton = (props) => {
  const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 200px;
    
    margin-left: 61px;
    font-size: 20px;
    color: #E6E6F3;
    &:hover {
      cursor: pointer;
      color: #AA8858;
    }
    &:focus {
      outline: none;
      color: #AA8858;
    }
    @media ${device.phone} {
      & {
        font-size: 14px;
        width: 150px;
        margin-left: 0px;
      }
    }
    @media ${device.tablet} {
      & {
        font-size: 16px;
        width: 180px;
        margin-left: 0px;
      }
    }
    @media ${device.laptop} {
      & {
        font-size: 18px;
        width: 180px;
        margin-left: 0px;
      }
    }
  `;

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  `;

  return (
      <Container>
        <Button>Log in / Join us</Button>
      </Container>
  );
};

const DrawerToggleButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
    @media ${device.phone} {
      & {
        display: flex;
      }
    }
    @media ${device.tablet} {
      & {
        display: flex;
      }
    }
`;

const DrawerToggleButton = props => {
  const Button = styled.button`
    height: 24px;
    width: 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    &:focus {
      outline: none;
    }
  `;

  const Line = styled.div`
    width: 28px;
    height: 2px;
    background: white;
  `;

  return (
    <Button onClick={props.click}>
      <Line/>
      <Line/>
      <Line/>
    </Button>
  );
};

const Profile = (props) => {
  const Container = styled.div`
    display: flex;    
    height: 100%;
    justify-content: center;
    align-items: center;
  `;

  const Image = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 43px;
    margin-right: 40px;
    display: none;

    @media ${device.phone} {
      & {
        display: inline-block;
      }
    }
    @media ${device.tablet} {
      & {
        display: inline-block;;
      }
    }
  `;

  const Text = styled.span`
    margin-left: 43px;
    margin-right: 40px;
    @media ${device.phone} {
      & {
        display: none;
      }
    }
    @media ${device.tablet} {
      & {
        display: none;
      }
    }
  `
  
  return (
    <Container>
      <Text>{props.username}</Text>
      <Image src={ require("images/icon_avatar.png") } />
    </Container>
  );
};

export default withRouter(({ drawerToggleClickHandler, isLoggedIn, location: { pathname } }) => {
  console.log(pathname);
  return (
    <Header>
      <DrawerToggleButtonContainer>
        <DrawerToggleButton click={drawerToggleClickHandler}/>
      </DrawerToggleButtonContainer>
      <LogoContainer>
        <SLink to="/">
          <Logo src={ require("images/logo.png") } alt={`logo`} />
        </SLink>
      </LogoContainer>
        {isLoggedIn && (
          <MenuContainer>
            <Menu pathname={pathname} />
            <Profile username={"todo"}/>
          </MenuContainer>
        )}
        {!isLoggedIn && (
          <MenuContainer>
            <Menu pathname={pathname} />
            <LoginSignUpButton />
          </MenuContainer>
        )}
    </Header>
  )
});


/* <Route path={`/login`} component={Feed}></Route>
<Route path={'/signup'} component = {Feed}></Route>
<Route path={`/salon`} component={Salon}></Route>
<Route path={`/magazine`} component={Magazine}></Route>
<Route path={`/host`} component={Host}></Route>
<Route path={`/profile`} component={Profile}></Route> */


