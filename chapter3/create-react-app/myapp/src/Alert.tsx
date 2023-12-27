import { useState } from "react";

interface Props {
  type?: string;
  heading: string;
  closeable?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export function Alert({
  type = "information",
  heading,
  closeable = true,
  onClose,
  children,
}: Props) {
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
    <div>
      <div>
        <span role="img" aria-label={type === "warning" ? "Warning" : "Information"}>
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span>{heading}</span>
      </div>
      {closeable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
}
