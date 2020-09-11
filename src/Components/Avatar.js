import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size};
  overflow: hidden;
`;

const Avatar = ({ className, url, size = "4rem" }) =>
  <Container className={className} src={url} size={size} />;

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default Avatar;
