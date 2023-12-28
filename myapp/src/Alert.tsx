/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { styles } from "./AlertStyles";

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
    <div css={[styles.alertContainer, styles.alertText(type)]}>
      <div css={styles.alertHeader}>
        <span
          css={styles.alertIcon}
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span css={styles.headingText}>{heading}</span>
        {closable && (
          <button css={styles.alertCloseButton} aria-label="Close" onClick={handleCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>

      <div css={styles.alertContent}>{children}</div>
    </div>
  );
}
