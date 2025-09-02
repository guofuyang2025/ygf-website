'use client'

import { Label } from './label'
import { Input } from './input'
import { cn } from '@/lib/utils'

interface FormInputProps extends React.ComponentProps<'input'> {
    label: string
    htmlFor: string
    className?: string
    labelClassName?: string
    inputClassName?: string
}

export function FormInput({
    label,
    htmlFor,
    className,
    labelClassName,
    inputClassName,
    ...props
}: FormInputProps) {
    return (
        <div className={cn('space-y-2', className)}>
            <Label
                htmlFor={htmlFor}
                className={cn('text-sm font-medium text-foreground', labelClassName)}
            >
                {label}
            </Label>
            <Input
                id={htmlFor}
                className={cn('w-full', inputClassName)}
                {...props}
            />
        </div>
    )
}
