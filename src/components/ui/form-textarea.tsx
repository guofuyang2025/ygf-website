'use client'

import { Label } from './label'
import { Textarea } from './textarea'
import { cn } from '@/lib/utils'

interface FormTextareaProps extends React.ComponentProps<'textarea'> {
    label: string
    htmlFor: string
    className?: string
    labelClassName?: string
    textareaClassName?: string
}

export function FormTextarea({
    label,
    htmlFor,
    className,
    labelClassName,
    textareaClassName,
    ...props
}: FormTextareaProps) {
    return (
        <div className={cn('space-y-2', className)}>
            <Label
                htmlFor={htmlFor}
                className={cn('text-sm font-medium text-foreground', labelClassName)}
            >
                {label}
            </Label>
            <Textarea
                id={htmlFor}
                className={cn('w-full min-h-32', textareaClassName)}
                {...props}
            />
        </div>
    )
}
