import React from 'react';
import ImageViewer from './ImageViewer';

export default {
  title: 'Media/ImageViewer',
  component: ImageViewer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A professional image viewer component with support for multiple images, online links, zoom, pan, and lightbox features.',
      },
    },
  },
  argTypes: {
    enableZoom: {
      control: 'boolean',
      description: 'Enable zoom functionality',
    },
    enableDownload: {
      control: 'boolean',
      description: 'Enable download functionality',
    },
    enableRotate: {
      control: 'boolean',
      description: 'Enable rotation functionality',
    },
    initialScale: {
      control: { type: 'range', min: 0.5, max: 2, step: 0.1 },
      description: 'Initial scale of the image',
    },
    maxScale: {
      control: { type: 'range', min: 1, max: 10, step: 0.5 },
      description: 'Maximum allowed scale',
    },
  },
};

// Sample images from various sources
const sampleImages = [
  {
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Coastal landscape',
    filename: 'coastal-landscape.jpg',
    info: {
      title: 'Coastal Serenity',
      description: 'A beautiful coastal landscape at sunset',
      metadata: {
        Author: 'John Smith',
        Location: 'Pacific Coast',
        'Taken on': '2023-06-15',
        Camera: 'Canon EOS R5',
        'Focal Length': '24mm',
        'Exposure': 'f/8 1/250s ISO 100',
      },
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Mountain vista',
    filename: 'mountain-vista.jpg',
    info: {
      title: 'Mountain Majesty',
      description: 'Majestic mountain peaks at dawn',
      metadata: {
        Author: 'Sarah Johnson',
        Location: 'Swiss Alps',
        'Taken on': '2023-07-20',
        Camera: 'Sony A7IV',
        'Focal Length': '70mm',
        'Exposure': 'f/11 1/500s ISO 200',
      },
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Urban architecture',
    filename: 'urban-architecture.jpg',
    info: {
      title: 'Urban Geometry',
      description: 'Modern architectural masterpiece in the city',
      metadata: {
        Author: 'Michael Chen',
        Location: 'Tokyo, Japan',
        'Taken on': '2023-08-05',
        Camera: 'Fujifilm X-T4',
        'Focal Length': '16mm',
        'Exposure': 'f/5.6 1/1000s ISO 400',
      },
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1682695798522-6e208131916d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Wildlife portrait',
    filename: 'wildlife-portrait.jpg',
    info: {
      title: 'Wildlife Portrait',
      description: 'Intimate portrait of wildlife in natural habitat',
      metadata: {
        Author: 'Emma Wilson',
        Location: 'Serengeti, Tanzania',
        'Taken on': '2023-09-10',
        Camera: 'Nikon Z9',
        'Focal Length': '400mm',
        'Exposure': 'f/4 1/2000s ISO 800',
      },
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Abstract art',
    filename: 'abstract-art.jpg',
    info: {
      title: 'Abstract Patterns',
      description: 'Natural patterns creating abstract art',
      metadata: {
        Author: 'David Lee',
        Location: 'Death Valley, USA',
        'Taken on': '2023-10-01',
        Camera: 'Hasselblad X2D',
        'Focal Length': '90mm',
        'Exposure': 'f/16 1/125s ISO 50',
      },
    },
  },
];

// Single image viewer
export const SingleImage = {
  args: {
    currentImage: sampleImages[0],
    alt: 'Single image example',
    className: 'w-96 h-64 object-cover',
  },
};

// Multiple images gallery
export const MultipleImages = {
  args: {
    images: sampleImages,
    className: 'w-full h-64 object-cover',
  },
};

// Grid layout with multiple images
export const GridLayout = {
  args: {
    images: sampleImages,
    className: 'w-full h-48 object-cover',
    enableGrid: true,
  },
};

// Images with info
export const ImagesWithInfo = {
  args: {
    images: [
      {
        src: 'https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Aerial landscape',
        info: {
          title: 'Aerial Perspective',
          description: 'Stunning aerial view of natural landscapes',
          metadata: {
            Author: 'James Wilson',
            Location: 'Iceland',
            'Taken on': '2023-11-15',
            Camera: 'DJI Mavic 3',
            'Focal Length': '24mm',
            'Exposure': 'f/2.8 1/1000s ISO 100',
          },
        },
      },
      {
        src: 'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        alt: 'Street photography',
        info: {
          title: 'Urban Life',
          description: 'Candid moment in city life',
          metadata: {
            Author: 'Lisa Chen',
            Location: 'New York City',
            'Taken on': '2023-12-01',
            Camera: 'Leica Q2',
            'Focal Length': '28mm',
            'Exposure': 'f/1.7 1/500s ISO 400',
          },
        },
      },
    ],
    className: 'w-full h-64 object-cover',
    enableInfo: true,
  },
};

// Images with effects
export const ImagesWithEffects = {
  args: {
    images: sampleImages.slice(0, 3),
    className: 'w-full h-64 object-cover',
    enableEffects: true,
    effects: ['none', 'grayscale', 'sepia', 'blur', 'brightness'],
  },
};

// Interactive gallery
export const InteractiveGallery = () => (
  <div className="space-y-8">
    <h3 className="text-lg font-semibold">Interactive Image Gallery</h3>
    <ImageViewer
      images={sampleImages}
      className="w-full h-64 object-cover"
      enableZoom
      enableRotate
      enableDownload
      enableShare
      enableLike
      enableInfo
      enableEffects
      enableGrid
    />
    <div className="text-sm text-gray-600">
      Click on any image to open the interactive viewer with full features
    </div>
  </div>
);

// Dynamic loading example
export const DynamicLoading = () => {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading images from an API
    setTimeout(() => {
      setImages(sampleImages);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
        <div className="text-gray-400">Loading images...</div>
      </div>
    );
  }

  return (
    <ImageViewer
      images={images}
      className="w-full h-64 object-cover"
      enableZoom
      enableRotate
      enableGrid
    />
  );
}; 