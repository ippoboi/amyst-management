"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <button
      {...props}
      type="submit"
      aria-disabled={pending}
      className=" bg-btn-background w-full border-btn-outline text-subTitle border rounded-xl p-3"
    >
      {isPending ? pendingText : children}
    </button>
  );
}
