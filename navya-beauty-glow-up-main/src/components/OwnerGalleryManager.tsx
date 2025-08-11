
import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Edit2, Trash2, Image as ImageIcon, Eye } from 'lucide-react';

interface GalleryImage {
  id: number | string;
  src: string;
  alt: string;
  category: string;
}

interface OwnerGalleryManagerProps {
  images: GalleryImage[];
  onImagesUpdate: (images: GalleryImage[]) => void;
  onEditImage: (imageSrc: string) => void;
  onImageView: (imageSrc: string) => void;
}

const OwnerGalleryManager = ({ 
  images, 
  onImagesUpdate, 
  onEditImage, 
  onImageView 
}: OwnerGalleryManagerProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const categories = ["Hair", "Makeup", "Nails", "Wellness", "Bridal"];

  const handleImageUpload = (files: FileList) => {
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage: GalleryImage = {
            id: Date.now() + Math.random(),
            src: e.target?.result as string,
            alt: file.name.replace(/\.[^/.]+$/, ""),
            category: "Hair" // Default category
          };
          onImagesUpdate([...images, newImage]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      handleImageUpload(files);
    }
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files) {
      handleImageUpload(files);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDeleteImage = (imageId: number | string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      onImagesUpdate(images.filter(img => img.id !== imageId));
    }
  };

  const handleCategoryChange = (imageId: number | string, newCategory: string) => {
    onImagesUpdate(
      images.map(img => 
        img.id === imageId 
          ? { ...img, category: newCategory }
          : img
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card className="p-6 border-2 border-dashed border-elegant-brown-300 hover:border-elegant-brown-500 transition-colors">
        <div
          className={`text-center space-y-4 ${dragOver ? 'bg-elegant-brown-50' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="flex justify-center">
            <Upload className="w-12 h-12 text-elegant-brown-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-elegant-brown-700 mb-2">
              Upload Gallery Images
            </h3>
            <p className="text-gray-600 mb-4">
              Drag and drop images here or click to browse
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="naturals-button text-white px-6 py-3 rounded-full border-0"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Choose Images
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Supports JPG, PNG, WebP up to 10MB each
          </p>
        </div>
      </Card>

      {/* Image Management Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <Card key={image.id} className="naturals-card overflow-hidden group">
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 right-2 flex gap-1">
                  <Button
                    onClick={() => onImageView(image.src)}
                    size="sm"
                    className="bg-white/20 hover:bg-white/40 text-white border-white/30 w-8 h-8 p-0"
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                  <Button
                    onClick={() => onEditImage(image.src)}
                    size="sm"
                    className="naturals-button text-white border-0 w-8 h-8 p-0"
                  >
                    <Edit2 className="w-3 h-3" />
                  </Button>
                  <Button
                    onClick={() => handleDeleteImage(image.id)}
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white border-0 w-8 h-8 p-0"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
                
                <div className="absolute bottom-2 left-2 right-2">
                  <select
                    value={image.category}
                    onChange={(e) => handleCategoryChange(image.id, e.target.value)}
                    className="w-full text-sm bg-elegant-brown-600 text-white px-3 py-1 rounded-full border-none outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Image Info */}
            <div className="p-3">
              <p className="text-sm font-medium text-gray-800 truncate">{image.alt}</p>
              <p className="text-xs text-gray-500">{image.category}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {images.length === 0 && (
        <Card className="p-8 text-center">
          <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">No images uploaded yet</h3>
          <p className="text-gray-500">Start by uploading some beautiful gallery images!</p>
        </Card>
      )}
    </div>
  );
};

export default OwnerGalleryManager;
