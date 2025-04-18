'use client';

import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function HeySeeker() {
  const [inputText, setInputText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationIntensity, setAnimationIntensity] = useState(0);
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentScript, setCurrentScript] = useState('');
  const [animationPhase, setAnimationPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [sentences, setSentences] = useState<string[]>([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(-1);
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const intensityRef = useRef<number>(0);
  const wordTimers = useRef<NodeJS.Timeout[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const currentSentenceRef = useRef<number>(-1);

  // Animation fluide avec requestAnimationFrame
  useEffect(() => {
    const updateAnimation = () => {
      // Transition douce vers l'intensité cible
      const targetIntensity = intensityRef.current;
      setAnimationIntensity((prev) => {
        const diff = targetIntensity - prev;
        return prev + diff * 0.05; // Transition progressive
      });

      // Continuer l'animation
      animationFrameRef.current = requestAnimationFrame(updateAnimation);
    };

    // Démarrer l'animation
    animationFrameRef.current = requestAnimationFrame(updateAnimation);

    // Nettoyage
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Diviser le texte en phrases
  const splitTextIntoSentences = (text: string): string[] => {
    if (!text) return [];
    
    // Utiliser une regex plus robuste pour détecter les frontières de phrases
    const sentenceRegex = /[^.!?]+[.!?]+/g;
    const matches = text.match(sentenceRegex);
    
    if (!matches) {
      // Si aucune phrase n'est détectée, considérer tout le texte comme une phrase
      return [text.trim()];
    }
    
    // Nettoyer les phrases (enlever les espaces superflus)
    return matches.map(sentence => sentence.trim());
  };

  // Mise à jour du currentSentenceIndex dans la ref pour éviter les problèmes de dépendances
  useEffect(() => {
    currentSentenceRef.current = currentSentenceIndex;
  }, [currentSentenceIndex]);

  // Effet pour les sous-titres et l'animation harmonieuse
  useEffect(() => {
    if (currentScript === "") {
      setDisplayedSubtitle("");
      setIsTyping(false);
      setProgress(0);
      setSentences([]);
      setCurrentSentenceIndex(-1);

      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }

      // Nettoyer tous les timers
      wordTimers.current.forEach((timer) => clearTimeout(timer));
      wordTimers.current = [];

      return;
    }

    // Diviser le texte en phrases pour une meilleure gestion des sous-titres
    const scriptSentences = splitTextIntoSentences(currentScript);
    setSentences(scriptSentences);
    
    // Commencer par la première phrase
    setCurrentSentenceIndex(0);
    
    // Initialiser avec la première phrase
    if (scriptSentences.length > 0) {
      setDisplayedSubtitle(scriptSentences[0]);
    }
    
    setIsTyping(true);
    setProgress(0);

    // Nettoyer les timers précédents
    wordTimers.current.forEach((timer) => clearTimeout(timer));
    wordTimers.current = [];

    // Animation fluide pour toute la phrase
    setAnimationPhase(1); // Phase initiale

    // Progression de l'animation à travers différentes phases
    const phaseTimers = [
      setTimeout(() => setAnimationPhase(2), scriptSentences.join(' ').split(/\s+/).length * 100), // Phase intermédiaire
      setTimeout(() => setAnimationPhase(3), scriptSentences.join(' ').split(/\s+/).length * 250), // Phase finale
    ];

    wordTimers.current.push(...phaseTimers);

    // Calculer la durée totale de toutes les phrases
    const allWords = scriptSentences.join(' ').split(/\s+/);
    const totalDuration = allWords.length * 450 + 1000; // Augmenté de 350ms à 450ms par mot
    
    // Durée approximative par phrase (proportionnelle au nombre de mots)
    const sentenceDurations = scriptSentences.map(sentence => {
      const wordCount = sentence.split(/\s+/).length;
      return wordCount * 450; // 450ms par mot en moyenne (au lieu de 350ms)
    });
    
    // Temps cumulé pour chaque changement de phrase
    let cumulativeTime = 0;
    
    // Programmer le changement de phrase
    scriptSentences.forEach((sentence, index) => {
      if (index === 0) return; // Première phrase déjà affichée
      
      cumulativeTime += sentenceDurations[index - 1];
      
      const sentenceTimer = setTimeout(() => {
        setCurrentSentenceIndex(index);
        setDisplayedSubtitle(sentence);
      }, cumulativeTime);
      
      wordTimers.current.push(sentenceTimer);
    });

    // Animation pour l'intensité
    let timeOffset = 0;
    
    scriptSentences.forEach((sentence, sentenceIndex) => {
      const sentenceWords = sentence.split(/\s+/);
      const numAnimPoints = Math.max(12, sentenceWords.length * 2); // Augmenté de 10 à 12 points minimum
      const sentenceDuration = sentenceDurations[sentenceIndex];
      const animInterval = sentenceDuration / numAnimPoints;
      
      // Animer l'intensité avec une courbe organique
      for (let i = 0; i < numAnimPoints; i++) {
        const timer = setTimeout(() => {
          if (currentSentenceRef.current === sentenceIndex) {
            // Génération d'une intensité qui varie naturellement
            const progress = i / numAnimPoints;
            
            // Courbe sinusoïdale pour une variation naturelle
            const baseIntensity = 0.4; // Augmenté de 0.3 à 0.4
            const intensityVariation = Math.sin(progress * Math.PI) * 0.4; // Augmenté de 0.3 à 0.4
            
            // Ajouter une petite variation aléatoire
            const randomFactor = (Math.random() * 0.15) - 0.075; // Augmenté de 0.1 à 0.15
            
            // Intensité combinée
            intensityRef.current = baseIntensity + intensityVariation + randomFactor;
          }
        }, timeOffset + (i * animInterval));
        
        wordTimers.current.push(timer);
      }
      
      // Ajouter une petite pause entre les phrases
      const pauseBetweenSentences = 500; // Pause de 500ms entre les phrases
      timeOffset += sentenceDuration + pauseBetweenSentences;
    });

    // Barre de progression
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (totalDuration / 100);
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    // Fin de l'animation
    const endTimer = setTimeout(
      () => {
        setIsTyping(false);

        // Diminution progressive de l'intensité
        const fadeOutTimer = setTimeout(() => {
          intensityRef.current = 0.1;

          setTimeout(() => {
            setAnimationPhase(0);
            intensityRef.current = 0;
            setProgress(100);
            setCurrentSentenceIndex(-1);

            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current);
              progressIntervalRef.current = null;
            }
          }, 1000);
        }, 500);

        wordTimers.current.push(fadeOutTimer);
      },
      totalDuration
    );

    wordTimers.current.push(endTimer);

    return () => {
      wordTimers.current.forEach((timer) => clearTimeout(timer));
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [currentScript]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputText.trim() === "") return;

    // Démarrer l'animation
    setIsAnimating(true);
    intensityRef.current = 0.3;
    setInitialAnimationDone(true);

    // Utiliser le texte saisi comme script pour les sous-titres
    setCurrentScript(inputText);

    // Arrêter l'animation après un délai proportionnel à la longueur du texte
    if (animationRef.current) clearTimeout(animationRef.current);

    const words = inputText.split(/\s+/).length;
    const animationDuration = Math.max(words * 350 + 3000, 6000); // Augmenter la durée pour permettre de voir toutes les phrases

    animationRef.current = setTimeout(() => {
      setIsAnimating(false);
      intensityRef.current = 0;
      setCurrentScript("");
    }, animationDuration);

    // Réinitialiser l'input
    setInputText("");
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      {/* Zone de capture vidéo */}
      <div 
        ref={videoContainerRef} 
        className="video-container"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          height: '600px',
          background: 'linear-gradient(to bottom, rgba(20, 20, 30, 0.9), rgba(10, 10, 15, 0.95))',
          borderRadius: '16px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Message d'invite initial */}
        {!isAnimating && !initialAnimationDone && (
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              padding: '0 2rem'
            }}
          >
            <div style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'rgba(104, 213, 227, 0.9)' }}>
              HeySeeker
            </div>
            <p style={{ fontSize: '1.1rem', maxWidth: '280px', lineHeight: 1.5 }}>
              Enter text below and see the animation respond to your words
            </p>
          </div>
        )}

        {/* Barre de progression */}
        {isAnimating && (
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              zIndex: 5
            }}
          >
            <div 
              style={{
                height: '100%',
                background: 'linear-gradient(to right, rgba(104, 213, 227, 0.8), rgba(66, 185, 168, 0.8))',
                width: `${progress}%`,
                transition: 'width 0.1s linear'
              }}
            ></div>
          </div>
        )}

        {/* Cercles animés avec phases d'animation */}
        <div
          className={`animation-container ${isAnimating ? "active" : ""} phase-${animationPhase}`}
          style={{
            '--intensity': animationIntensity,
            position: 'relative',
            width: '300px',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 1s ease',
            marginTop: '80px',
            animation: isAnimating ? 'breathe 6s infinite ease-in-out' : 'none',
            opacity: isAnimating ? 1 : 0
          } as React.CSSProperties}
        >
          {/* Effet de lueur */}
          <div 
            className="glow-effect"
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: `radial-gradient(
                circle,
                rgba(104, 213, 227, ${0.25 + animationIntensity * 0.35}) 0%,
                rgba(66, 185, 168, ${0.15 + animationIntensity * 0.25}) 40%,
                rgba(0, 0, 0, 0) 70%
              )`,
              opacity: isAnimating ? 0.4 + animationIntensity * 0.8 : 0, // Augmenté l'opacité
              transform: `scale(${isAnimating ? 0.9 + animationIntensity * 0.6 : 0.8})`, // Augmenté l'échelle
              transition: 'all 0.8s ease', // Transition plus rapide
              filter: 'blur(15px)',
              zIndex: 1
            }}
          ></div>
          
          <div 
            className="circles-container"
            style={{
              position: 'relative',
              width: '150px',
              height: '150px',
              zIndex: 2
            }}
          >
            {/* Cercle 1 - Cyan */}
            <div 
              className="circle circle-1"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '150px',
                borderRadius: '55%',
                boxShadow: '0 0 20px 10px rgba(104, 213, 227, 0.05)',
                opacity: isAnimating ? 1 : 0,
                visibility: isAnimating ? 'visible' : 'hidden',
                transition: 'opacity 1s ease, visibility 1s ease',
                background: `radial-gradient(
                  circle,
                  rgba(10, 10, 10, 0.0) 0%,
                  rgba(10, 10, 10, 0.0) 67%,
                  rgba(104, 213, 227, 1) 73%,
                  rgba(104, 213, 227, 1) 100%
                )`,
                animation: isAnimating ? 'rotateShape 20s infinite linear' : 'none'
              }}
            ></div>
            
            {/* Cercle 2 - Teal */}
            <div 
              className="circle circle-2"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '150px',
                borderRadius: '55%',
                boxShadow: '0 0 20px 10px rgba(66, 185, 168, 0.05)',
                opacity: isAnimating ? 1 : 0,
                visibility: isAnimating ? 'visible' : 'hidden',
                transition: 'opacity 1s ease, visibility 1s ease',
                background: `radial-gradient(
                  circle,
                  rgba(10, 10, 10, 0.0) 0%,
                  rgba(10, 10, 10, 0.0) 67%,
                  rgba(66, 185, 168, 1) 75%,
                  rgba(66, 185, 168, 1) 100%
                )`,
                animation: isAnimating ? 'rotateShape 16s infinite linear reverse' : 'none'
              }}
            ></div>
            
            {/* Cercle 3 - Blanc/Purple */}
            <div 
              className="circle circle-3"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '150px',
                borderRadius: '55%',
                boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.05)',
                opacity: isAnimating ? 1 : 0,
                visibility: isAnimating ? 'visible' : 'hidden',
                transition: 'opacity 1s ease, visibility 1s ease',
                background: `radial-gradient(
                  circle,
                  rgba(10, 10, 10, 0.0) 0%,
                  rgba(10, 10, 10, 0.0) 70%,
                  rgba(108, 92, 231, 1) 73%,
                  rgba(108, 92, 231, 1) 100%
                )`,
                animation: isAnimating ? 'rotateShape 24s infinite linear' : 'none'
              }}
            ></div>
          </div>
        </div>

        {/* Zone de sous-titres style TikTok/Reels - Améliorée pour afficher phrase par phrase */}
        <div 
          className="subtitle-container"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1rem',
            zIndex: 10
          }}
        >
          <div 
            className={`tiktok-subtitle ${isTyping || displayedSubtitle ? "active" : ""}`}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(5px)',
              borderRadius: '16px',
              padding: '1.2rem 1.8rem',
              width: '90%',
              maxWidth: '90%',
              opacity: isTyping || displayedSubtitle ? 1 : 0,
              transform: isTyping || displayedSubtitle ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div 
              className="subtitle-text"
              style={{
                fontSize: '1.4rem',
                fontWeight: 500,
                color: 'white',
                lineHeight: 1.6,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                animation: 'textReveal 0.5s ease-out forwards'
              }}
            >
              {/* Afficher la phrase actuelle */}
              {currentSentenceIndex >= 0 && sentences[currentSentenceIndex]}
            </div>
          </div>
        </div>
      </div>

      {/* Contrôles d'édition */}
      <form onSubmit={handleSubmit} className="w-full mt-6">
        <div className="flex items-center gap-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text for HeySeeker to say... (e.g. This is a first sentence. And this is a second one.)"
            className="flex-1 p-3 rounded-lg bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[rgba(104,213,227,0.5)] min-h-[80px]"
            disabled={isAnimating}
          />
          <button
            type="submit"
            disabled={isAnimating || !inputText.trim()}
            className="p-3 rounded-lg bg-[rgba(66,185,168,0.7)] text-white hover:bg-[rgba(66,185,168,0.9)] transition-colors disabled:opacity-50 self-end"
          >
            <Send size={20} />
          </button>
        </div>
      </form>

      <style jsx>{`
        @keyframes rotateShape {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            border-radius: 55%;
          }
          25% {
            transform: translate(-50%, -50%) rotate(90deg) scale(calc(1 + var(--intensity) * 0.07)); // Augmenté de 0.05 à 0.07
            border-radius: calc(52% - var(--intensity) * 7%) calc(48% + var(--intensity) * 5%) 50% 50%; // Augmenté les variations
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(calc(1 + var(--intensity) * 0.15)); // Augmenté de 0.1 à 0.15
            border-radius: calc(45% - var(--intensity) * 9%) calc(55% + var(--intensity) * 7%) 50% 50%; // Augmenté les variations
          }
          75% {
            transform: translate(-50%, -50%) rotate(270deg) scale(calc(1 + var(--intensity) * 0.07)); // Augmenté de 0.05 à 0.07
            border-radius: calc(48% - var(--intensity) * 5%) calc(52% + var(--intensity) * 7%) 50% 50%; // Augmenté les variations
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
            border-radius: 55%;
          }
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(calc(1 + var(--intensity) * 0.08)); // Augmenté de 0.05 à 0.08
          }
        }
        
        @keyframes textReveal {
          0% {
            opacity: 0.3;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
} 