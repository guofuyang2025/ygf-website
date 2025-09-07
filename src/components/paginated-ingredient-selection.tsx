'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis
} from '@/components/ui/pagination';
import { ItemWithData } from '@/types/items';

interface PaginatedIngredientSelectionProps {
    items: ItemWithData[];
}

export function PaginatedIngredientSelection({ items }: PaginatedIngredientSelectionProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // 3 columns × 3 rows

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of section when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderPaginationItems = () => {
        const paginationItems = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                paginationItems.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            onClick={() => handlePageChange(i)}
                            isActive={currentPage === i}
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                );
            }
        } else {
            // Show first page
            paginationItems.push(
                <PaginationItem key={1}>
                    <PaginationLink
                        onClick={() => handlePageChange(1)}
                        isActive={currentPage === 1}
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
            );

            // Show ellipsis if current page is far from start
            if (currentPage > 3) {
                paginationItems.push(
                    <PaginationItem key="ellipsis1">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }

            // Show pages around current page
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                if (i !== 1 && i !== totalPages) {
                    paginationItems.push(
                        <PaginationItem key={i}>
                            <PaginationLink
                                onClick={() => handlePageChange(i)}
                                isActive={currentPage === i}
                            >
                                {i}
                            </PaginationLink>
                        </PaginationItem>
                    );
                }
            }

            // Show ellipsis if current page is far from end
            if (currentPage < totalPages - 2) {
                paginationItems.push(
                    <PaginationItem key="ellipsis2">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }

            // Show last page
            if (totalPages > 1) {
                paginationItems.push(
                    <PaginationItem key={totalPages}>
                        <PaginationLink
                            onClick={() => handlePageChange(totalPages)}
                            isActive={currentPage === totalPages}
                        >
                            {totalPages}
                        </PaginationLink>
                    </PaginationItem>
                );
            }
        }

        return paginationItems;
    };

    return (
        <section className="py-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Ingredient Selection</h2>
                <p className="text-lg text-muted-foreground">Over 60 fresh ingredients: vegetables, seafood, meats, tofu, noodles, and more — all picked and prepared daily.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={item.image_url || `https://picsum.photos/300/200?random=${item.id}`}
                                alt={item.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {item.description}
                            </p>
                        </CardHeader>
                        <CardContent className="pt-0">
                            {item.price && (
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold text-primary">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    <Badge variant="secondary">Fresh Daily</Badge>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>

                            {renderPaginationItems()}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </section>
    );
}

