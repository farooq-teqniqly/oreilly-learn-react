import React from "react";
import { FieldError, useForm } from "react-hook-form";
import ValidationError from "./ValidationError";
import { NewPostData } from "./types";

interface Props {
  onSave: (newPost: NewPostData) => void;
}

const fieldStyle = "flex flex-col mb-2";

function getEditorStyle(fieldError: FieldError | undefined) {
  return fieldError ? "border-red-500" : "";
}

function NewPostForm({ onSave }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewPostData>();

  return (
    <form noValidate className="border-b py-4" onSubmit={handleSubmit(onSave)}>
      <div className={fieldStyle}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className={getEditorStyle(errors.title)}
          {...register("title", { required: "You must enter a title." })}
        />
        <ValidationError fieldError={errors.title}></ValidationError>
      </div>

      <div className={fieldStyle}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className={getEditorStyle(errors.description)}
          {...register("description", { required: "You must enter a description." })}
        />
        <ValidationError fieldError={errors.description}></ValidationError>
      </div>
      <div className={fieldStyle}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-10 px-6 font-semibold bg-black text-white"
        >
          Save
        </button>
        {isSubmitSuccessful && (
          <div role="alert" className="text-green-500 text-xs mt-1">
            Post saved.
          </div>
        )}
      </div>
    </form>
  );
}

export default NewPostForm;
