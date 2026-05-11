import * as React from 'react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandItem, CommandGroup } from 'cmdk';
import { ChevronsUpDown, Check } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { cn } from '@/lib/cn';

export interface ComboboxItem {
  value: string;
  label: string;
  hint?: string;
}

interface ComboboxProps {
  items: ComboboxItem[];
  value: string | null;
  onChange: (v: string | null) => void;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
}

export function Combobox({
  items,
  value,
  onChange,
  placeholder = 'Select…',
  ariaLabel = 'Select an option',
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const selected = items.find((i) => i.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          aria-label={ariaLabel}
          aria-expanded={open}
          className={cn('justify-between min-w-[220px]', className)}
        >
          <span className="truncate">{selected?.label ?? placeholder}</span>
          <ChevronsUpDown className="h-4 w-4 opacity-60" aria-hidden />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[260px]">
        <Command className="rounded-md">
          <CommandInput
            placeholder="Search…"
            className="w-full bg-transparent px-3 py-2 text-sm outline-none border-b border-border-subtle placeholder:text-text-dim"
          />
          <CommandList className="max-h-64 overflow-auto p-1 scrollbar-thin">
            <CommandEmpty className="px-3 py-2 text-sm text-text-dim">No matches.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={`${item.label} ${item.hint ?? ''}`}
                  onSelect={() => {
                    onChange(item.value === value ? null : item.value);
                    setOpen(false);
                  }}
                  className="flex cursor-pointer items-center justify-between rounded px-2 py-1.5 text-sm aria-selected:bg-accent-cyan/10 aria-selected:text-accent-cyan"
                >
                  <span className="flex flex-col">
                    <span>{item.label}</span>
                    {item.hint ? (
                      <span className="text-[11px] text-text-dim">{item.hint}</span>
                    ) : null}
                  </span>
                  {item.value === value ? (
                    <Check className="h-4 w-4 text-accent-cyan" aria-hidden />
                  ) : null}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
