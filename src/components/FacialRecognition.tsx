import React, { useRef, useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Camera, RefreshCw } from 'lucide-react';
import { detectFace, analyzeMood, initializeAI } from '../services/ai';

interface FacialRecognitionProps {
  onMoodDetected: (mood: string) => void;
}

const FacialRecognition: React.FC<FacialRecognitionProps> = ({ onMoodDetected }) => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectedMood, setDetectedMood] = useState<string | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);

  useEffect(() => {
    const loadModels = async () => {
      try {
        await initializeAI();
        setIsModelLoading(false);
      } catch (error) {
        console.error('Error loading AI models:', error);
      }
    };

    loadModels();
  }, []);

  const capture = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      await analyzeCapturedImage(imageSrc);
    }
  }, [webcamRef]);

  const analyzeCapturedImage = async (imageSrc: string | null) => {
    if (!imageSrc) return;
    
    setIsAnalyzing(true);
    
    try {
      // Create an image element for analysis
      const img = new Image();
      img.src = imageSrc;
      await new Promise(resolve => img.onload = resolve);

      // Detect face first
      const faces = await detectFace(img);
      
      if (faces.length === 0) {
        alert('No face detected. Please try again.');
        retake();
        return;
      }

      // Analyze mood
      const detectedMood = await analyzeMood(img);
      
      if (detectedMood) {
        setDetectedMood(detectedMood);
        onMoodDetected(detectedMood);
      }
    } catch (error) {
      console.error('Error analyzing image:', error);
      alert('Error analyzing image. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const retake = () => {
    setCapturedImage(null);
    setDetectedMood(null);
  };

  if (isModelLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-amber-900 mb-4">Loading AI Models</h3>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-700"></div>
          <span className="ml-3 text-gray-600">Initializing facial recognition...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-amber-900 mb-4">Facial Mood Recognition</h3>
      <p className="text-gray-600 mb-6">
        We'll analyze your current mood to recommend the perfect coffee for you.
      </p>
      
      <div className="flex flex-col items-center">
        {capturedImage ? (
          <div className="relative w-full max-w-md">
            <img 
              src={capturedImage} 
              alt="Captured" 
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={retake}
              className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors flex items-center justify-center space-x-2 w-full"
              disabled={isAnalyzing}
            >
              <RefreshCw size={18} />
              <span>Retake Photo</span>
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-md">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full h-auto rounded-lg"
              videoConstraints={{
                width: 640,
                height: 480,
                facingMode: "user"
              }}
            />
            <button
              onClick={capture}
              className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors flex items-center justify-center space-x-2 w-full"
              disabled={isAnalyzing}
            >
              <Camera size={18} />
              <span>Capture Photo</span>
            </button>
          </div>
        )}
        
        {isAnalyzing && (
          <div className="mt-4 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-amber-700 border-r-transparent"></div>
            <p className="mt-2 text-amber-900">Analyzing your mood...</p>
          </div>
        )}
        
        {detectedMood && !isAnalyzing && (
          <div className="mt-4 text-center">
            <p className="text-lg font-medium">
              Detected Mood: <span className="text-amber-700 font-bold capitalize">{detectedMood}</span>
            </p>
            <p className="mt-2 text-gray-600">
              We'll use this to recommend the perfect coffee for you!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacialRecognition;