import React from "react";
import { FieldError, useForm } from "react-hook-form";
import { SearchCriteria } from "../../api/types";

interface Props {
  onSearch: (criteria: SearchCriteria) => void;
}

const fieldStyle = "flex flex-col mb-2";

function getEditorStyle(fieldError: FieldError | undefined) {
  return fieldError ? "border-red-500" : "";
}

function ValidationError({ fieldError }: { fieldError: FieldError | undefined }) {
  if (!fieldError) {
    return null;
  }
  return (
    <div role="alert" className="text-red-500 text-xs mt-1">
      {fieldError.message}
    </div>
  );
}

export function SearchRepoForm({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchCriteria>();

  return (
    <form noValidate className="border-b py-4" onSubmit={handleSubmit(onSearch)}>
      <div className={fieldStyle}>
        <label htmlFor="org">Organization</label>
        <input
          type="text"
          id="org"
          {...register("org", { required: "Enter an organization." })}
          className={getEditorStyle(errors.org)}
        />
        <ValidationError fieldError={errors.org}></ValidationError>
      </div>
      <div className={fieldStyle}>
        <label htmlFor="repo">Repository</label>
        <input
          type="text"
          id="repo"
          {...register("repo", { required: "Enter an repository." })}
          className={getEditorStyle(errors.repo)}
        />
        <ValidationError fieldError={errors.repo}></ValidationError>
      </div>
      <div className={fieldStyle}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-10 px-6 font-semibold bg-black text-white self-start"
        >
          Search
        </button>
      </div>
    </form>
  );
}
