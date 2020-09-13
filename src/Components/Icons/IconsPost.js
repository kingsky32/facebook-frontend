import React from "react";
import styled from "styled-components";
import IconsPost from "../../Assets/Images/Icons/icons_post.png";

const Icons = styled.i`
  width: ${props => props.size};
  height: ${props => props.size};
  background-image: url(${IconsPost});
  background-size: 21px 273px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const EditIconStyle = styled(Icons)`
  background-position: 0 -210px;
`;

const DeleteIconStyle = styled(Icons)`
  background-position: 0 -252px;
`;

export const EditIcon = ({ size = "2rem" }) => <EditIconStyle size={size} />;

export const DeleteIcon = ({ size = "2rem" }) => <DeleteIconStyle size={size} />;
