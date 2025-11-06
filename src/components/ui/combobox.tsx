"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

interface ComboboxFieldProps {
  control: never;
  name: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  className?: string;
}

export function ComboboxField({
  control,
  name,
  options,
  placeholder = "Select...",
  className,
}: ComboboxFieldProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className={cn(
                "w-full flex items-center justify-between text-left",
                className
              )}
            >
              <span className="truncate">
                {field.value
                  ? options.find((item) => item.value === field.value)?.label
                  : placeholder}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search..." className="h-9" />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {options.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
                      onSelect={(currentValue) => {
                        field.onChange(
                          currentValue === field.value ? "" : currentValue
                        );
                        setOpen(false);
                      }}
                    >
                      {item.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          field.value === item.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    />
  );
}
