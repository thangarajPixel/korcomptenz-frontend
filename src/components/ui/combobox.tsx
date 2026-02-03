"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  useController,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface ComboboxOption {
  label: string;
  value: string | number;
  state_code?: string;
  documentId?: string;
}

interface ComboboxFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options?: ComboboxOption[];
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
  errormessage?: string;
}

export function ComboboxField<T extends FieldValues>({
  control,
  name,
  options = [],
  placeholder = "Select an option...",
  emptyMessage = "No results found.",
  className,
}: ComboboxFieldProps<T>) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  const selectedOption = options.find(
    (opt) => String(opt.value) === String(field.value?.connect?.[0]?.id),
  );

  // Filter options based on search query
  const filteredOptions = React.useMemo(() => {
    if (!searchQuery) return options;
    const searchLower = searchQuery.toLowerCase();
    return options.filter(
      (option) =>
        option.label.toLowerCase().includes(searchLower) ||
        String(option.value).toLowerCase().includes(searchLower) ||
        option.state_code?.toLowerCase().includes(searchLower),
    );
  }, [options, searchQuery]);

  return (
    <div className="size-full">
      <Popover modal open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "flex items-center justify-between w-full bg-white h-10 min-h-10 px-3 text-base text-left",
              className,
            )}
            onClick={() => setOpen(!open)}
          >
            <span className="flex-1 truncate text-left text-black">
              {selectedOption ? selectedOption.label : placeholder}
            </span>

            {selectedOption ? (
              <svg
                onClick={(e) => {
                  e.stopPropagation();
                  field.onChange("");
                  setSearchQuery("");
                  setOpen(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 size-4 shrink-0 text-gray-500 hover:text-red-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // ⬇️ Chevron shown normally
              <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
            )}
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Search..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="h-9"
            />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup className="max-h-60 overflow-auto">
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={String(option.value)}
                    onSelect={() => {
                      field.onChange({
                        connect: [
                          {
                            id: option?.value,
                            documentId: option?.documentId,

                            isTempory: true,
                          },
                        ],
                      });
                      setOpen(false);
                      setSearchQuery("");
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        String(field.value) === String(option.value)
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {option.label}
                    {option.state_code && (
                      <span className="ml-2 text-muted-foreground">
                        ({option.state_code})
                      </span>
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error?.message && (
        <p className="mt-1 font-sans text-sm text-destructive">
          {error.message}
        </p>
      )}
    </div>
  );
}
