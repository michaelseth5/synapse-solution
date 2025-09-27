'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, Image, X, CheckCircle, Eye, EyeOff, Users, Shield } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  type: 'image' | 'pdf' | 'document';
  size: number;
  visibility: 'all' | 'leadership' | 'private';
  status: 'uploading' | 'processing' | 'completed' | 'error';
  preview?: string;
}

export function SnapshotUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    setIsUploading(true);
    
    for (const file of files) {
      const fileType = file.type.startsWith('image/') ? 'image' : 
                     file.type === 'application/pdf' ? 'pdf' : 'document';
      
      const newFile: UploadedFile = {
        id: Date.now().toString() + Math.random(),
        name: file.name,
        type: fileType,
        size: file.size,
        visibility: 'all',
        status: 'uploading'
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload and processing
      setTimeout(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === newFile.id 
              ? { ...f, status: 'processing' }
              : f
          )
        );
      }, 1000);

      setTimeout(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === newFile.id 
              ? { ...f, status: 'completed' }
              : f
          )
        );
      }, 3000);
    }
    
    setIsUploading(false);
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const updateVisibility = (id: string, visibility: 'all' | 'leadership' | 'private') => {
    setUploadedFiles(prev => 
      prev.map(f => 
        f.id === id ? { ...f, visibility } : f
      )
    );
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="w-4 h-4" />;
      case 'pdf':
        return <FileText className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case 'all':
        return <Users className="w-4 h-4" />;
      case 'leadership':
        return <Shield className="w-4 h-4" />;
      case 'private':
        return <EyeOff className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const getVisibilityLabel = (visibility: string) => {
    switch (visibility) {
      case 'all':
        return 'All Teams';
      case 'leadership':
        return 'Leadership Only';
      case 'private':
        return 'Private Notes';
      default:
        return 'All Teams';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <Upload className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Snapshot Upload</h3>
          <p className="text-sm text-gray-600">Upload progress screenshots or documents</p>
        </div>
      </div>

      {/* Drop Zone */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
          isDragOver
            ? 'border-purple-fintech bg-purple-50'
            : 'border-gray-300 hover:border-purple-fintech hover:bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-medium text-gray-900 mb-2">
          Drop files here or click to upload
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Supports images, PDFs, and documents up to 10MB
        </p>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-purple-fintech text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Choose Files
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.pdf,.doc,.docx"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Uploaded Files */}
      <AnimatePresence>
        {uploadedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 space-y-3"
          >
            <h4 className="text-sm font-medium text-gray-900">Uploaded Files</h4>
            {uploadedFiles.map((file) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-gray-600">
                      {getFileIcon(file.type)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {file.status === 'uploading' && (
                      <div className="w-4 h-4 border-2 border-purple-fintech border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {file.status === 'processing' && (
                      <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {file.status === 'completed' && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                    <button
                      onClick={() => removeFile(file.id)}
                      className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Status */}
                <div className="mb-3">
                  <div className="text-xs text-gray-600 mb-1">Status:</div>
                  <div className="text-xs">
                    {file.status === 'uploading' && (
                      <span className="text-purple-600">Uploading...</span>
                    )}
                    {file.status === 'processing' && (
                      <span className="text-blue-600">Processing with AI...</span>
                    )}
                    {file.status === 'completed' && (
                      <span className="text-green-600">Ready for sync</span>
                    )}
                  </div>
                </div>

                {/* Visibility Settings */}
                <div>
                  <div className="text-xs text-gray-600 mb-2">Visibility:</div>
                  <div className="flex space-x-2">
                    {(['all', 'leadership', 'private'] as const).map((visibility) => (
                      <button
                        key={visibility}
                        onClick={() => updateVisibility(file.id, visibility)}
                        className={`flex items-center space-x-1 px-2 py-1 rounded text-xs transition-colors ${
                          file.visibility === visibility
                            ? 'bg-purple-fintech text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {getVisibilityIcon(visibility)}
                        <span>{getVisibilityLabel(visibility)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Processing Info */}
      {uploadedFiles.some(f => f.status === 'processing') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg"
        >
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm text-blue-700">
              AI is extracting data from your files and updating team dashboards...
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
