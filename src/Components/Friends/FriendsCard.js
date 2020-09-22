import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../Avatar";
import Button from "../Button";
import Timestamp from "../Timestamp";

const Container = styled.div`
  &.active {
    a {
      background-color: ${props => props.theme.blueColor}25;
      &:hover {
        background-color: ${props => props.theme.blueColor}25;
      }
    }
  }
  a {
    display: flex;
    padding: 1.2rem .8rem;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    transition: .25s background-color ease;
    &:hover {
      transition-duration: 0s;
      background-color: ${props => props.theme.lightGreyColor};
    }
  }
`;

const MetaContainer = styled.div`
  margin-left: 1.2rem;
  flex: 1;
`;

const UsernameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: .8rem;
`;

const Username = styled.span`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ButtonContainer = styled.div`display: flex;`;

const ConfirmButton = styled(Button)`
  font-size: 1.5rem;
  height: 3.6rem;
  flex: 1;
  transition: .25s background-color ease;
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.blueHoverColor};
  }
  margin-right: .8rem;
`;

const DeleteButton = styled(Button)`
  font-size: 1.5rem;
  height: 3.6rem;
  flex: 1;
  background-color: ${props => props.theme.greyColor}25;
  color: ${props => props.theme.blackColor};
  transition: .25s background-color ease;
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.greyColor}50;
  }
`;

const FriendsCard = ({
  uid,
  avatar,
  username,
  createdAt,
  onConfirm,
  onAddFriend,
  onDelete,
  onRemove,
  paramId,
  isFriend
}) => {
  return (
    <Container className={paramId === uid && "active"}>
      <Link to={`/friends/${uid}/timeline`}>
        <Avatar url={avatar} size="6rem" />
        <MetaContainer>
          <UsernameContainer>
            <Username>
              {username}
            </Username>
            {createdAt && <Timestamp createdAt={createdAt} />}
          </UsernameContainer>
          <ButtonContainer>
            {onConfirm && <ConfirmButton text="Confirm" onClick={onConfirm} />}
            {onAddFriend && <ConfirmButton text="Add Friend" onClick={onAddFriend} />}
            {onDelete && <DeleteButton text="Delete" onClick={onDelete} />}
            {onRemove && <DeleteButton text="Remove" onClick={onRemove} />}
          </ButtonContainer>
        </MetaContainer>
      </Link>
    </Container>
  );
};

export default FriendsCard;
