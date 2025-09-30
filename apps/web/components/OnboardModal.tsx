"use client";

import { useState } from "react";
import LuxButton from "@/components/LuxButton";

interface OnboardModalProps {
  open: boolean;
  onClose: () => void;
}

export default function OnboardModal({ open, onClose }: OnboardModalProps) {
  const [step, setStep] = useState(1);
  
  if (!open) return null;
  
  const handleNext = () => {
    if (step === 3) {
      onClose();
    } else {
      setStep(step + 1);
    }
  };
  
  const handleClose = () => {
    setStep(1);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fadein">
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full text-center border-4 border-orange-glow">
        <h2 className="text-2xl font-bold mb-2 text-black">Welcome to HOTMESS</h2>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-orange-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Step Indicator */}
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i <= step ? 'bg-orange-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="text-6xl mb-4">🎧</div>
            <h2 className="text-2xl font-bold mb-2 text-white">Welcome to HOTMESS</h2>
            <p className="text-gray-300 mb-6">
              Experience the finest in luxury underground radio. Where chaos meets class.
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="text-6xl mb-4">🛍️</div>
            <h2 className="text-2xl font-bold mb-2 text-white">Exclusive Merchandise</h2>
            <p className="text-gray-300 mb-6">
              Discover our premium collection of lifestyle products, crafted for the discerning connoisseur.
            </p>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="text-6xl mb-4">💰</div>
            <h2 className="text-2xl font-bold mb-2 text-white">Join Our Affiliate Program</h2>
            <p className="text-gray-300 mb-6">
              Earn 15% commission on every sale. Turn your passion into profit with HOTMESS.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {step > 1 && (
            <LuxButton
              onClick={() => setStep(step - 1)}
              variant="secondary"
              className="flex-1"
            >
              Back
            </LuxButton>
          )}
          <LuxButton
            onClick={handleNext}
            className="flex-1"
          >
            {step === 3 ? 'Get Started' : 'Next'}
          </LuxButton>
        </div>

        {/* Skip Option */}
        <button
          onClick={handleClose}
          className="mt-4 text-sm text-gray-400 hover:text-orange-400 transition-colors"
        >
          Skip Introduction
        </button>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400/20 rounded-full animate-ping" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-600/20 rounded-full animate-pulse" />
          <div className="absolute top-1/2 -left-2 w-4 h-4 bg-orange-500/20 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}