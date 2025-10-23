import * as React from "react";
import { useController, type UseControllerProps } from "react-hook-form";
import { cn } from "@/lib/utils";

type FieldValue = {
  [key: string]: unknown;
};

type InputProps<D extends FieldValue> = UseControllerProps<D> &
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "defaultValue" | "name" | "onBlur" | "ref"
  > & {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
  };
const Input = <D extends FieldValue>({
  control,
  name,
  defaultValue,
  className,
  ...props
}: InputProps<D>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  });
  return (
    <div className={cn("relative", props.disabled && "cursor-pointer")}>
      <input
        data-slot="input"
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
  );
};

export { Input };
