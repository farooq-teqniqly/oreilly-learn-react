import { css } from "@emotion/react";

export const alertContainer = css`
  display: inline-flex;
  flex-direction: column;
  text-align: left;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px solid transparent;
`;

export const alertText = (type: "information" | "warning") => css`
  color: ${type === "warning" ? "#e7650f" : "#118da0"};
  background-color: ${type === "warning" ? "#f3e8da" : "#dcf1f3"};
`;

export const alertHeader = css`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const alertIcon = css`
  width: 30px;
`;

export const alertCloseButton = css`
  border: none;
  background: transparent;
  margin-left: auto;
  cursor: pointer;
`;

export const alertContent = css`
  margin-left: 30px;
  color: #000;
`;

export const headingText = css`
  font-weight: bold;
`;
