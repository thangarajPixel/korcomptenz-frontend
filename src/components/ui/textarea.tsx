import * as React from "react"

import { cn } from "@/lib/utils"
import { useController, type UseControllerProps } from 'react-hook-form';
type FieldValue = {
  [key: string]: unknown;
};

type TextAreaProps<D extends FieldValue> = UseControllerProps<D> & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "defaultValue" | "name" | "onBlur" | "ref"> & {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};
const Textarea = <T extends FieldValue>({ control, name, defaultValue, className, ...props }: TextAreaProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  });
  return (
    <div className={cn('relative', props.disabled && 'cursor-pointer')}>
      <textarea
        data-slot="textarea"
        className={cn(
          "w-full bg-transparent border-0 border-b border-[#cbd5e0] pb-3 text-[#2d3748] placeholder:text-[#cbd5e0] focus:outline-none focus:border-[#4a5568] transition-colors",
          className
        )}
        {...field}
        {...props}
        value={
          typeof field.value === "string"
            ? field.value
            : field.value == null
              ? ""
              : String(field.value)
        }
        onChange={(e) => {
          field.onChange(e.target.value);
          props?.onChange?.(e);
        }}
      />
      {error?.message && (
        <p className="left-0 mt-1 font-sans text-sm text-destructive">
          {error?.message}
        </p>
      )}
    </div>
  )
}

export { Textarea }
