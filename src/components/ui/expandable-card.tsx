'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ExpandableCardProps {
    title: string
    description: string
    className?: string
}

export function ExpandableCard({ title, description, className }: ExpandableCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <Card
            className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg bg-white dark:bg-black",
                className
            )}
            onClick={toggleExpanded}
        >
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg font-semibold">
                    <span>{title}</span>
                    <div className="flex items-center">
                        {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <div
                    className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <p className="text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
