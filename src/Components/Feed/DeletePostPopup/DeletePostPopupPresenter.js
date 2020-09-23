import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import Popup from "../../Popup";

const Component = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-flow: column nowrap;
`;

const Text = styled.div`
  word-break: break-word;
  font-size: 1.5rem;
`;

const ButtonArea = styled.div`
  padding-top: 1.5rem;
  display: flex;
  align-self: flex-end;
`;

const DeleteButton = styled(Button)`
  padding: 0 1.2rem;
  line-height: 2rem;
  font-size: 1.5rem;
  transition: .25s background-color ease;
  &:hover {
    transition-duration: 0s;
    background: ${props => props.theme.blueHoverColor};
  }
`;

const CancelButton = styled(DeleteButton)`
  background: ${props => props.theme.whiteColor};
  color: ${props => props.theme.blueColor};
  margin-right: .5rem;
  &:hover {
    background: ${props => props.theme.lightGreyColor};
  }
`;

const DeletePostPopupPresenter = ({ onCloseDeletePopup, onDeletePost }) => {
  return (
    <Popup
      onPopup={onCloseDeletePopup}
      title="Delete Post?"
      component={
        <Component>
          <Text>Are you sure you want to delete this post?</Text>
          <ButtonArea>
            <CancelButton text="Cancel" onClick={onCloseDeletePopup} />
            <DeleteButton text="Delete" onClick={onDeletePost} />
          </ButtonArea>
        </Component>
      }
    />
  );
};

export default DeletePostPopupPresenter;
