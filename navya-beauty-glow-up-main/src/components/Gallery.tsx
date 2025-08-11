import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Lock, Unlock } from 'lucide-react';
import { useState } from 'react';
import ImageEditor from './ImageEditor';
import OwnerGalleryManager from './OwnerGalleryManager';

interface GalleryImage {
  id: number | string;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editingImage, setEditingImage] = useState<string | null>(null);
  const [isOwner, setIsOwner] = useState(false);
  const [ownerPassword, setOwnerPassword] = useState('');
  const [showOwnerLogin, setShowOwnerLogin] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([
    {
      id: 1,
      src: "public/Hair.jpeg",
      alt: "Professional Indian hair styling",
      category: "Hair"
    },
    {
      id: 2,
      src: "public/Makeup.jpg",
      alt: "Bridal makeup artistry",
      category: "Makeup"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
      alt: "Elegant nail art design",
      category: "Nails"
    },
    {
      id: 4,
      src: "public/wellness.jpeg",
      alt: "Relaxing spa treatment",
      category: "Wellness"
    },
    {
      id: 5,
      src: "public/Bride.jpeg",
      alt: "Traditional Indian bridal look",
      category: "Bridal"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      alt: "Modern hair color transformation",
      category: "Hair"
    }
  ]);

  const categories = ["All", "Hair", "Makeup", "Nails", "Wellness", "Bridal"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleOwnerLogin = () => {
    if (ownerPassword === 'navya2024') {
      setIsOwner(true);
      setShowOwnerLogin(false);
      setOwnerPassword('');
    } else {
      alert('Incorrect password!');
    }
  };

  const handleEditImage = (imageSrc: string) => {
    setEditingImage(imageSrc);
    setSelectedImage(null);
  };

  const handleSaveEditedImage = (editedImageUrl: string) => {
    setGalleryImages(prev => 
      prev.map(img => 
        img.src === editingImage 
          ? { ...img, src: editedImageUrl }
          : img
      )
    );
    setEditingImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our gallery of transformations — from subtle elegance to bold beauty. 
            At Navya, every style tells your story.
          </p>
        </div>

        {/* Owner Access Section */}
        <div className="mb-8 text-center">
          {!isOwner ? (
            <div className="space-y-4">
              <Button
                onClick={() => setShowOwnerLogin(!showOwnerLogin)}
                variant="outline"
                className="border-elegant-brown-300 text-elegant-brown-600 hover:bg-elegant-brown-50"
              >
                <Lock className="w-4 h-4 mr-2" />
                Owner Access
              </Button>
              {showOwnerLogin && (
                <div className="flex justify-center items-center gap-3 max-w-md mx-auto">
                  <input
                    type="password"
                    placeholder="Enter owner password"
                    value={ownerPassword}
                    onChange={(e) => setOwnerPassword(e.target.value)}
                    className="flex-1 px-4 py-2 border border-elegant-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-elegant-brown-500"
                  />
                  <Button
                    onClick={handleOwnerLogin}
                    className="naturals-button text-white px-6 py-2 border-0"
                  >
                    Login
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-elegant-brown-600 font-medium">
                <Unlock className="w-4 h-4" />
                <span>Owner Mode Active</span>
                <Button
                  onClick={() => setIsOwner(false)}
                  variant="outline"
                  size="sm"
                  className="ml-4 border-red-300 text-red-600 hover:bg-red-50"
                >
                  Logout
                </Button>
              </div>
              
              {/* Owner Gallery Manager */}
              <OwnerGalleryManager
                images={galleryImages}
                onImagesUpdate={setGalleryImages}
                onEditImage={handleEditImage}
                onImageView={setSelectedImage}
              />
            </div>
          )}
        </div>

        {/* Category Filter - Only show if not in owner mode */}
        {!isOwner && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'naturals-button text-white shadow-lg border-0'
                    : 'bg-white text-elegant-brown-600 hover:bg-elegant-brown-50 border border-elegant-brown-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid - Only show if not in owner mode */}
        {!isOwner && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="naturals-card overflow-hidden hover-lift border-elegant-brown-200 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4">
                      <Button
                        onClick={() => setSelectedImage(image.src)}
                        size="sm"
                        className="bg-white/20 hover:bg-white/40 text-white border-white/30"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isOwner && filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Image Editor Modal */}
        {editingImage && (
          <ImageEditor
            imageSrc={editingImage}
            onSave={handleSaveEditedImage}
            onClose={() => setEditingImage(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Gallery;
