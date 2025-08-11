
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

interface ImageEditorProps {
  imageSrc: string;
  onSave: (editedImageUrl: string) => void;
  onClose: () => void;
}

const ImageEditor = ({ imageSrc, onSave, onClose }: ImageEditorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [filter, setFilter] = useState('none');
  const [cropMode, setCropMode] = useState(false);
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setOriginalImage(img);
      drawImage(img);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  const drawImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to image size
    canvas.width = img.width;
    canvas.height = img.height;

    // Apply filters
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) ${getFilterCSS()}`;
    
    // Clear and draw image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };

  const getFilterCSS = () => {
    switch (filter) {
      case 'sepia': return 'sepia(1)';
      case 'grayscale': return 'grayscale(1)';
      case 'blur': return 'blur(2px)';
      case 'vintage': return 'sepia(0.5) contrast(1.2) brightness(1.1)';
      default: return '';
    }
  };

  useEffect(() => {
    if (originalImage) {
      drawImage(originalImage);
    }
  }, [brightness, contrast, saturation, filter, originalImage]);

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const editedImageUrl = canvas.toDataURL('image/jpeg', 0.9);
    onSave(editedImageUrl);
  };

  const resetFilters = () => {
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setFilter('none');
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <Card className="max-w-6xl w-full max-h-full overflow-auto bg-white">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-heading font-bold text-gray-800">
              Edit Image
            </h3>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-rose-gold-300 text-rose-gold-600 hover:bg-rose-gold-50"
            >
              ✕ Close
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Canvas */}
            <div className="lg:col-span-3">
              <div className="bg-black-100 rounded-lg p-4 overflow-auto max-h-96">
                <canvas
                  ref={canvasRef}
                  className="max-w-full h-auto border border-rose-gold-200 rounded"
                />
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              {/* Brightness */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brightness: {brightness}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full accent-rose-gold-400"
                />
              </div>

              {/* Contrast */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contrast: {contrast}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={contrast}
                  onChange={(e) => setContrast(Number(e.target.value))}
                  className="w-full accent-rose-gold-400"
                />
              </div>

              {/* Saturation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Saturation: {saturation}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={saturation}
                  onChange={(e) => setSaturation(Number(e.target.value))}
                  className="w-full accent-rose-gold-400"
                />
              </div>

              {/* Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filters
                </label>
                <div className="space-y-2">
                  {['none', 'sepia', 'grayscale', 'blur', 'vintage'].map((filterType) => (
                    <button
                      key={filterType}
                      onClick={() => setFilter(filterType)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        filter === filterType
                          ? 'bg-rose-gold-400 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-rose-gold-100'
                      }`}
                    >
                      {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="w-full border-rose-gold-300 text-rose-gold-600 hover:bg-rose-gold-50"
                >
                  Reset
                </Button>
                <Button
                  onClick={handleSave}
                  className="w-full bg-rose-gold-400 hover:bg-rose-gold-500 text-white"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageEditor;
