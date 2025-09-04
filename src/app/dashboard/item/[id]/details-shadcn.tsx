'use client';

import { getItemByIdWithParsedData } from "@/db/items";
import { notFound } from "next/navigation";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '@/components/ui/alert-dialog';
import { Edit, Delete, Loader2 } from 'lucide-react';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface DetailsShadcnProps {
  item: Awaited<ReturnType<typeof getItemByIdWithParsedData>>;
}

export default function DetailsShadcn({ item }: DetailsShadcnProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  if (!item) {
    notFound();
  }

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/items/${item.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      toast.success('Item deleted successfully!');
      router.push('/dashboard/item');
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error('Failed to delete item. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">
          {item.data.name}
        </h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push(`/dashboard/item/${item.id}/edit`)}
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <Delete className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the item
                  "{item.data.name}" and remove it from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  {isDeleting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    'Delete'
                  )}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Item Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Name</h3>
                <p className="text-muted-foreground">{item.data.name}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Description</h3>
                <p className="text-muted-foreground">{item.data.description}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Price</h3>
                <p className="text-2xl font-bold text-foreground">
                  ${item.data.price?.toFixed(2) || '0.00'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Category</h3>
                <Badge variant="secondary" className="capitalize">
                  {item.data.category || 'Uncategorized'}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {item.image && (
        <Card>
          <CardHeader>
            <CardTitle>Item Image</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video max-w-md">
              <img
                src={item.image}
                alt={item.data.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Item ID</h3>
              <p className="text-muted-foreground font-mono text-sm">{item.id}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Created At</h3>
              <p className="text-muted-foreground">
                {new Date(item.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            {item.updated_at && (
              <div>
                <h3 className="font-semibold text-foreground mb-2">Last Updated</h3>
                <p className="text-muted-foreground">
                  {new Date(item.updated_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
