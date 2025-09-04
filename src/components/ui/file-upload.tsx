'use client'

import React, { useState, useRef, useCallback } from 'react'
import { Upload, X, FileText, FileImage, FileVideo, FileAudio } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FileUploadProps {
    onFileSelect: (file: File) => void
    onFileRemove: () => void
    selectedFile: File | null
    accept?: string
    maxSize?: number // in MB
    className?: string
    label?: string
    placeholder?: string
}

const FileUpload: React.FC<FileUploadProps> = ({
    onFileSelect,
    onFileRemove,
    selectedFile,
    accept = '.pdf,.doc,.docx,.txt',
    maxSize = 10, // 10MB default
    className,
    label = 'Upload File',
    placeholder = 'Drag and drop a file here, or click to browse'
}) => {
    const [isDragOver, setIsDragOver] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const validateFile = (file: File): string | null => {
        // Check file size
        if (file.size > maxSize * 1024 * 1024) {
            return `File size must be less than ${maxSize}MB`
        }

        // Check file type
        const acceptedTypes = accept.split(',').map(type => type.trim())
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()

        if (!acceptedTypes.some(type => {
            if (type.startsWith('.')) {
                return type === fileExtension
            }
            return file.type.startsWith(type)
        })) {
            return `File type not supported. Accepted types: ${accept}`
        }

        return null
    }

    const handleFileSelect = useCallback((file: File) => {
        setError(null)
        const validationError = validateFile(file)

        if (validationError) {
            setError(validationError)
            return
        }

        onFileSelect(file)
    }, [onFileSelect, maxSize, accept])

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(true)
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
    }, [])

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)

        const files = Array.from(e.dataTransfer.files)
        if (files.length > 0) {
            handleFileSelect(files[0])
        }
    }, [handleFileSelect])

    const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        if (files.length > 0) {
            handleFileSelect(files[0])
        }
    }, [handleFileSelect])

    const handleBrowseClick = useCallback(() => {
        fileInputRef.current?.click()
    }, [])

    const getFileIcon = (fileName: string) => {
        const extension = fileName.split('.').pop()?.toLowerCase()

        switch (extension) {
            case 'pdf':
                return <FileText className="w-8 h-8 text-red-500" />
            case 'doc':
            case 'docx':
                return <FileText className="w-8 h-8 text-blue-500" />
            case 'txt':
                return <FileText className="w-8 h-8 text-gray-500" />
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                return <FileImage className="w-8 h-8 text-green-500" />
            case 'mp4':
            case 'avi':
            case 'mov':
                return <FileVideo className="w-8 h-8 text-purple-500" />
            case 'mp3':
            case 'wav':
            case 'aac':
                return <FileAudio className="w-8 h-8 text-orange-500" />
            default:
                return <FileText className="w-8 h-8 text-gray-500" />
        }
    }

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }

    return (
        <div className={cn('w-full', className)}>
            {label && (
                <label className="block text-sm font-medium text-foreground mb-2">
                    {label}
                </label>
            )}

            {!selectedFile ? (
                <div
                    className={cn(
                        'border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer',
                        isDragOver
                            ? 'border-primary bg-primary/5'
                            : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50',
                        error && 'border-destructive bg-destructive/5'
                    )}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleBrowseClick}
                >
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">{placeholder}</p>
                    <p className="text-xs text-muted-foreground">
                        Accepted formats: {accept} (Max: {maxSize}MB)
                    </p>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept={accept}
                        onChange={handleFileInputChange}
                        className="hidden"
                    />
                </div>
            ) : (
                <div className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-center gap-3">
                        {getFileIcon(selectedFile.name)}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                                {selectedFile.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {formatFileSize(selectedFile.size)}
                            </p>
                        </div>
                        <button
                            onClick={onFileRemove}
                            className="p-1 hover:bg-muted rounded-md transition-colors"
                            type="button"
                        >
                            <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </button>
                    </div>
                </div>
            )}

            {error && (
                <p className="text-sm text-destructive mt-2">{error}</p>
            )}
        </div>
    )
}

export default FileUpload
