import React from "react";
import styled from "styled-components";
import { DeleteIcon, EditIcon } from "../../Icons/IconsPost";

const Container = styled.div`
  width: 35rem;
  min-height: 3.6rem;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.boxShadow};
  padding: .8rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 6rem;
  right: 1.5rem;
  z-index: 5;
  &::after {
    content: '';
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    background-color: ${props => props.theme.whiteColor};
    transform: rotate(45deg);
    top: -1rem;
    right: 1rem;
  }
`;

const Options = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  z-index: 10;
`;

const Option = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: .8rem;
  border-radius: ${props => props.theme.borderRadius};
  transition: .25s background-color ease;
  cursor: pointer;
  &:hover {
    transition-duration: 0s;
    background-color: ${props => props.theme.lightGreyColor};
  }
`;

const OptionText = styled.span`
  display: block;
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const PostOptionPresenter = ({ me, user, onDeletePopup, onEditPopup }) => {
  return (
    <Container>
      <Options>
        {me.id === user.id &&
          <Option onClick={onEditPopup}>
            <EditIcon />
            <OptionText>Edit post</OptionText>
          </Option>}
        {me.id === user.id &&
          <Option onClick={onDeletePopup}>
            <DeleteIcon />
            <OptionText>Delete post</OptionText>
          </Option>}
      </Options>
    </Container>
  );
};

export default PostOptionPresenter;
