import React from "react";
import { useMutation } from "react-apollo-hooks";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { ADD_FRIEND, CONFIRM_FRIEND } from "../../Routes/Friends/FriendsQueries";
import { toggleFriend } from "../../store";
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
  onDelete,
  onRemove,
  paramId,
  isFriend,
  isRequestFriend,
  toggleFriend,
  facebook: { me }
}) => {
  const [addFriendMutation] = useMutation(ADD_FRIEND, {
    variables: {
      id: uid
    }
  });
  const [confirmFriend] = me.requestFriends.filter(e => e.opponent.id === uid);
  const [confirmFriendMutation] = useMutation(CONFIRM_FRIEND, {
    variables: {
      id: confirmFriend && confirmFriend.id
    }
  });
  const onAddFriend = async e => {
    e.preventDefault();
    try {
      const { data: { addFriend: result } } = await addFriendMutation();
      if (result === 1) {
        toast.success("Friend Request Transfer Succeed");
      } else {
        toast.success("Friend Request Cancel Succeed");
      }
      toggleFriend({
        id: uid,
        isFriend: result
      });
    } catch (err) {
      toast.error(err.message);
    }
  };
  const onConfirmFriend = async e => {
    e.preventDefault();
    if (isRequestFriend) {
      const { data: result } = await confirmFriendMutation();
      if (result) {
        toggleFriend({
          id: uid,
          isFriend: 2
        });
      }
    }
  };
  return (
    isFriend !== 2 &&
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
          {isRequestFriend
            ? <ButtonContainer>
                <ConfirmButton text="Confirm" onClick={onConfirmFriend} />
                <DeleteButton text="Delete" onClick={onDelete} />
              </ButtonContainer>
            : isFriend === 1
              ? <ButtonContainer>
                  <DeleteButton text="Cancel Request" onClick={onAddFriend} />
                </ButtonContainer>
              : <ButtonContainer>
                  <ConfirmButton text="Add Friend" onClick={onAddFriend} />
                  <DeleteButton text="Remove" onClick={onRemove} />
                </ButtonContainer>}
        </MetaContainer>
      </Link>
    </Container>
  );
};

const mapStateToProps = state => {
  return { facebook: state };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFriend: friend => dispatch(toggleFriend(friend))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsCard);
