import React from "react";
import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en_US");

const Timestamp = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 1rem;
  margin-top: .5rem;
`;

export default ({ createdAt, className }) => {
  const date = new Date(createdAt);
  return (
    <Timestamp className={className}>
      {timeAgo.format(date)}
    </Timestamp>
  );
};
