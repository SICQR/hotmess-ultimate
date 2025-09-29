"use client";
import { useEffect, useRef } from "react";

interface RadioVisualizerProps {
  isPlaying?: boolean;
  height?: number;
}

export default function RadioVisualizer({ isPlaying = true, height = 200 }: RadioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const bars = 64;
    const barWidth = canvas.width / bars;
    
    let audioData = new Array(bars).fill(0).map(() => Math.random() * 0.5 + 0.1);
    
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isPlaying) {
        // Update audio data simulation
        audioData = audioData.map(() => Math.random() * 0.8 + 0.1);
      } else {
        // Fade out when not playing
        audioData = audioData.map(val => val * 0.95);
      }
      
      // Draw bars
      audioData.forEach((value, i) => {
        const barHeight = value * canvas.height * 0.8;
        const x = i * barWidth;
        const y = canvas.height - barHeight;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, y, 0, canvas.height);
        gradient.addColorStop(0, '#ff5a00');
        gradient.addColorStop(0.6, '#ff8c00');
        gradient.addColorStop(1, '#ffaa00');
        
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff5a00';
        
        // Draw bar
        ctx.fillRect(x + 1, y, barWidth - 2, barHeight);
        
        // Add glow effect
        ctx.shadowBlur = 0;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);
  
  return (
    <div className="w-full bg-black/50 rounded-lg p-4">
      <canvas
        ref={canvasRef}
        width={800}
        height={height}
        className="w-full h-auto"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}