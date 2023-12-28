/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import {
  alertContainer,
  alertText,
  alertCloseButton,
  alertContent,
  alertHeader,
  alertIcon,
  headingText,
} from "./AlertStyles";

type Props = {
  type?: "information" | "warning";
  heading: string;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

export function Alert({ type = "information", heading, children, closable, onClose }: Props) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div css={[alertContainer, alertText(type)]}>
      <div css={alertHeader}>
        <span
          css={alertIcon}
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span css={headingText}>{heading}</span>
        {closable && (
          <button css={alertCloseButton} aria-label="Close" onClick={handleCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>

      <div css={alertContent}>{children}</div>
    </div>
  );
}
