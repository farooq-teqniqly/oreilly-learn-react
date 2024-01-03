import React from "react";
import { FieldError } from "react-hook-form";

interface Props {
  fieldError: FieldError | undefined;
}

function ValidationError({ fieldError }: Props) {
  if (!fieldError) {
    return null;
  }

  return (
    <div role="alert" className="text-red-500 text-xs mt-1">
      {fieldError.message}
    </div>
  );
}

export default ValidationError;
