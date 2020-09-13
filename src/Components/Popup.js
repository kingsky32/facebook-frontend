import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import styled from "styled-components";
import CircleButton from "./CircleButton";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.lightGreyColor}75;
  z-index: 10000;
  overflow: hidden;
`;

const Container = styled.form`
  width: 50rem;
  padding: 0 1.5rem 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadius};
  ${props => props.theme.boxShadow};
  position: relative;
`;

const Title = styled.div`
  height: 6rem;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
`;

const CloseButton = styled(CircleButton)`
  color: ${props => props.theme.greyColor};
  position: absolute;
  top: 1rem;
  right: 1.5rem;
`;

const Popup = ({ className, onSubmit, title, component, onPopup }) => {
  const modalRef = useRef(null);
  const onClose = e => {
    if (e.target === modalRef.current) {
      onPopup();
    }
  };

  return (
    <Wrapper className={className} ref={modalRef} onClick={onClose}>
      <Container onSubmit={onSubmit}>
        <Title>
          {title}
        </Title>
        <CloseButton onClick={onPopup} icon={<FontAwesomeIcon icon={faTimes} size="2x" />} />
        {component}
      </Container>
    </Wrapper>
  );
};

export default Popup;
