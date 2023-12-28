import { useState } from "react";

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
    <div
      className={`inline-flex flex-col text-left px-4 py-3 rounded-md border-1 border-transparent ${
        type === "warning" ? "text-amber-900" : "text-teal-900"
      } ${type === "warning" ? "bg-amber-50" : "bg-teal-50"}`}
    >
      <div className="flex items-center mb-1">
        <span
          className="w-7"
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span className="font-bold">{heading}</span>
        {closable && (
          <button
            className="border-none bg-transparent ml-auto cursor-pointer"
            aria-label="Close"
            onClick={handleCloseClick}
          >
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>

      <div className="ml-7 text-black">{children}</div>
    </div>
  );
}
