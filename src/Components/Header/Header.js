import React from "react";
import { Logo, Home, Watch, Groups, Gamming, Message, Notifications, Friends } from "../Icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { connect } from "react-redux";
import HeaderNavigatorButton from "./HeaderNavigatorButton";
import CircleButton from "../CircleButton";
import InputRound from "../InputRound";
import Avatar from "../Avatar";

const Container = styled.header`
  display: flex;
  padding: 0 1rem;
  background-color: ${props => props.theme.bgColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 500;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem 0;
`;

const SearchForm = styled.form`
  position: relative;
  height: 4rem;
  margin-left: .7rem;
`;

const SearchIcon = styled.div`
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  top: 0;
  left: 2rem;
  bottom: 0;
  margin: auto 0;
  opacity: .5;
`;

const HeaderCenter = styled.div`flex: 1;`;

const NavigatorWrapper = styled.ul`
  display: flex;
  width: 68rem;
  flex: 0 0 68rem;
  height: 100%;
  justify-content: center;
  box-sizing: border-box;
`;

const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Profile = styled(Link)`
  display: flex;
  align-items: center;
  height: 3.6rem;
  border-radius: 3.6rem;
  transition: .25s background-color ease;
  margin-right: 1rem;
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.lightGreyColor};
  }
`;

const Username = styled.span`
  font-size: 1.5rem;
  padding: 0 .5rem;
  font-weight: 700;
`;

const EInputRound = styled(InputRound)`
  width: 24rem;
  padding-left: 3.8rem;
`;

const Header = ({ facebook: { me }, history }) => {
  const search = useInput();
  const onSubmit = e => {
    e.preventDefault();
    history.push(`/search/${search.value}`);
  };
  return (
    <Container>
      <HeaderLeft>
        <Link to="/">
          <Logo />
        </Link>
        <SearchForm onSubmit={onSubmit}>
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </SearchIcon>
          <EInputRound
            value={search.value}
            onChange={search.onChange}
            placeholder="Search Facebook"
          />
        </SearchForm>
      </HeaderLeft>
      <HeaderCenter>
        <NavigatorWrapper>
          <HeaderNavigatorButton icon={<Home />} to="/" info="Home" />
          <HeaderNavigatorButton icon={<Friends />} to="/friends" info="Friends" />
          <HeaderNavigatorButton icon={<Watch />} to="/watch" info="Watch" />
          <HeaderNavigatorButton icon={<Groups />} to="/groups" info="Groups" />
          <HeaderNavigatorButton icon={<Gamming />} to="/gamming" info="Gamming" />
        </NavigatorWrapper>
      </HeaderCenter>
      <HeaderRight>
        <Profile to={`/profile/${me.id}`}>
          <Avatar url={me.avatar} size="2.8rem" />
          <Username>
            {me.username}
          </Username>
        </Profile>
        <CircleButton icon={<FontAwesomeIcon icon={faPlus} size="lg" />} info="Create" />
        <CircleButton icon={<Message />} info="Messenger" />
        <CircleButton icon={<Notifications />} info="Notifications" />
        <CircleButton icon={<FontAwesomeIcon icon={faCaretDown} size="2x" />} info="Account" />
      </HeaderRight>
    </Container>
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

export default connect(mapStateToProps)(withRouter(Header));
