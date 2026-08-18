// components/common/form/FormSelectField.tsx
import { SelectHTMLAttributes, Ref } from "react";
import { FormField, inputGenericClass } from "@/components/common/form/FormField";
import { cn } from "@/utils/cn";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectOptionGroup {
  label: string;
  options: readonly SelectOption[];
}

interface FormSelectFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> {
  label: string;
  id: string;
  error?: string;
  options?: readonly SelectOption[];
  groups?: readonly SelectOptionGroup[];
  placeholder?: string;
  ref?: Ref<HTMLSelectElement>;
}

export function FormSelectField({
  label,
  error,
  options,
  groups,
  placeholder = "- Select -",
  id,
  className,
  ref,
  ...selectProps
}: FormSelectFieldProps) {
  return (
    <FormField label={label} htmlFor={id} error={error}>
      <select
        id={id}
        ref={ref}
        aria-invalid={!!error}
        className={cn("w-full bg-white", inputGenericClass, className)}
        {...selectProps}
      >
        <option value="">{placeholder}</option>
        {groups
          ? groups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ))
          : options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
      </select>
    </FormField>
  );
}