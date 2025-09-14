'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQQuestion {
    question: string
    answer: string
}

interface FAQSectionProps {
    title: string
    questions: FAQQuestion[]
    className?: string
}

export function FAQSection({ title, questions, className }: FAQSectionProps) {
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
            <CardHeader className="pb-0">
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
                        isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <div className="space-y-6">
                        {questions.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                                <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
