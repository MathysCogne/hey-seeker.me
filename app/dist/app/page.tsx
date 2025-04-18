"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Send, Mic, Download, Maximize, Video, X, Pause } from "lucide-react"
import "./globals.css"

export default function Home() {
  const [inputText, setInputText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationIntensity, setAnimationIntensity] = useState(0)
  const [displayedSubtitle, setDisplayedSubtitle] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentScript, setCurrentScript] = useState("")
  const [highlightedWord, setHighlightedWord] = useState<number>(-1)
  const [words, setWords] = useState<string[]>([])
  const [animationPhase, setAnimationPhase] = useState(0)
  const [presentationMode, setPresentationMode] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [progress, setProgress] = useState(0)

  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const intensityRef = useRef<number>(0)
  const wordTimers = useRef<NodeJS.Timeout[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  // Animation fluide avec requestAnimationFrame
  useEffect(() => {
    const updateAnimation = () => {
      // Transition douce vers l'intensité cible
      const targetIntensity = intensityRef.current
      setAnimationIntensity((prev) => {
        const diff = targetIntensity - prev
        return prev + diff * 0.05 // Transition progressive
      })

      // Continuer l'animation
      animationFrameRef.current = requestAnimationFrame(updateAnimation)
    }

    // Démarrer l'animation
    animationFrameRef.current = requestAnimationFrame(updateAnimation)

    // Nettoyage
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Afficher brièvement l'animation au chargement
  useEffect(() => {
    setIsAnimating(true)
    intensityRef.current = 0.3
    setAnimationPhase(1)
    setCurrentScript("Bonjour, je suis HeySeeker!")

    const timer = setTimeout(() => {
      setIsAnimating(false)
      intensityRef.current = 0
      setCurrentScript("")
      setAnimationPhase(0)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Effet pour les sous-titres et l'animation harmonieuse
  useEffect(() => {
    if (currentScript === "") {
      setDisplayedSubtitle("")
      setIsTyping(false)
      setWords([])
      setHighlightedWord(-1)
      setProgress(0)

      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }

      return
    }

    // Diviser le texte en mots pour l'animation
    const scriptWords = currentScript.split(/\s+/)
    setWords(scriptWords)
    setDisplayedSubtitle(currentScript)
    setIsTyping(true)
    setProgress(0)

    // Nettoyer les timers précédents
    wordTimers.current.forEach((timer) => clearTimeout(timer))
    wordTimers.current = []

    // Animation fluide pour toute la phrase
    setAnimationPhase(1) // Phase initiale

    // Progression de l'animation à travers différentes phases
    const phaseTimers = [
      setTimeout(() => setAnimationPhase(2), scriptWords.length * 100), // Phase intermédiaire
      setTimeout(() => setAnimationPhase(3), scriptWords.length * 250), // Phase finale
    ]

    wordTimers.current.push(...phaseTimers)

    // Animer chaque mot séquentiellement
    scriptWords.forEach((word, index) => {
      const timer = setTimeout(() => {
        setHighlightedWord(index)

        // Variation subtile de l'intensité pour chaque mot
        const baseIntensity = 0.3
        const wordFactor = Math.sin((index / scriptWords.length) * Math.PI) * 0.3 + 0.2

        // Intensité qui varie organiquement à travers la phrase
        intensityRef.current = baseIntensity + wordFactor
      }, index * 350)

      wordTimers.current.push(timer)
    })

    // Barre de progression
    const totalDuration = scriptWords.length * 350 + 1000
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (totalDuration / 100)
        return newProgress > 100 ? 100 : newProgress
      })
    }, 100)

    // Fin de l'animation
    const endTimer = setTimeout(
      () => {
        setIsTyping(false)
        setHighlightedWord(-1)

        // Diminution progressive de l'intensité
        const fadeOutTimer = setTimeout(() => {
          intensityRef.current = 0.1

          setTimeout(() => {
            setAnimationPhase(0)
            intensityRef.current = 0
            setProgress(100)

            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current)
              progressIntervalRef.current = null
            }

            if (isRecording) {
              setIsRecording(false)
              // Simuler la fin de l'enregistrement
              alert("Enregistrement terminé ! La vidéo serait sauvegardée ici.")
            }
          }, 1000)
        }, 500)

        wordTimers.current.push(fadeOutTimer)
      },
      scriptWords.length * 350 + 500,
    )

    wordTimers.current.push(endTimer)

    return () => {
      wordTimers.current.forEach((timer) => clearTimeout(timer))
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
        progressIntervalRef.current = null
      }
    }
  }, [currentScript, isRecording])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (inputText.trim() === "") return

    // Démarrer l'animation
    setIsAnimating(true)
    intensityRef.current = 0.3

    // Utiliser le texte saisi comme script pour les sous-titres
    setCurrentScript(inputText)

    // Arrêter l'animation après un délai proportionnel à la longueur du texte
    if (animationRef.current) clearTimeout(animationRef.current)

    const words = inputText.split(/\s+/).length
    const animationDuration = Math.max(words * 350 + 1500, 4000)

    animationRef.current = setTimeout(() => {
      setIsAnimating(false)
      intensityRef.current = 0
      setCurrentScript("")
    }, animationDuration)

    // Réinitialiser l'input
    setInputText("")

    // Si en mode présentation, activer automatiquement l'enregistrement
    if (presentationMode) {
      startCountdown()
    }
  }

  const togglePresentationMode = () => {
    setPresentationMode(!presentationMode)
  }

  const startCountdown = () => {
    setCountdown(3)

    const countInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countInterval)
          setIsRecording(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const startRecording = () => {
    if (!isAnimating) {
      alert("Veuillez d'abord saisir un texte pour l'animation.")
      return
    }

    startCountdown()
  }

  const stopRecording = () => {
    setIsRecording(false)
    // Simuler la fin de l'enregistrement
    alert("Enregistrement arrêté ! La vidéo serait sauvegardée ici.")
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[rgb(10,10,10)] p-4">
      <div className="w-full max-w-md flex flex-col items-center">
        {!presentationMode && (
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-[rgb(255,120,0)]">Hey</span>
              <span className="text-[rgb(0,20,255)]">Seeker</span>
            </h1>
            <p className="text-[rgba(255,255,255,0.7)] text-sm">Créateur de vidéos TikTok & Reels</p>
          </div>
        )}

        {/* Zone de capture vidéo */}
        <div ref={videoContainerRef} className={`video-container ${presentationMode ? "presentation-mode" : ""}`}>
          {/* Indicateur d'enregistrement */}
          {isRecording && (
            <div className="recording-indicator">
              <div className="recording-dot"></div>
              <span>REC</span>
            </div>
          )}

          {/* Compte à rebours */}
          {countdown > 0 && (
            <div className="countdown">
              <span>{countdown}</span>
            </div>
          )}

          {/* Barre de progression */}
          {isAnimating && (
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          )}

          {/* Cercles animés avec phases d'animation */}
          <div
            className={`animation-container ${isAnimating ? "active" : ""} phase-${animationPhase}`}
            style={
              {
                "--intensity": animationIntensity,
              } as React.CSSProperties
            }
          >
            <div className="glow-effect"></div>
            <div className="circles-container">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </div>

          {/* Zone de sous-titres style TikTok/Reels */}
          <div className="subtitle-container">
            <div className={`tiktok-subtitle ${isTyping || displayedSubtitle ? "active" : ""}`}>
              <div className="subtitle-words-container">
                {words.map((word, index) => (
                  <span key={index} className={`subtitle-word ${index === highlightedWord ? "highlighted" : ""}`}>
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Boutons de contrôle en mode présentation */}
          {presentationMode && (
            <div className="presentation-controls">
              <button onClick={togglePresentationMode} className="control-button" title="Quitter le mode présentation">
                <X size={18} />
              </button>

              {isRecording ? (
                <button onClick={stopRecording} className="control-button recording" title="Arrêter l'enregistrement">
                  <Pause size={18} />
                </button>
              ) : (
                <button onClick={startRecording} className="control-button" title="Démarrer l'enregistrement">
                  <Video size={18} />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Contrôles d'édition (masqués en mode présentation) */}
        {!presentationMode && (
          <>
            <form onSubmit={handleSubmit} className="w-full mt-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Texte pour votre vidéo..."
                  className="flex-1 p-3 rounded-lg bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)] focus:outline-none focus:border-[rgba(255,120,0,0.5)]"
                />
                <button
                  type="button"
                  className="p-3 rounded-lg bg-[rgba(255,120,0,0.7)] text-white hover:bg-[rgba(255,120,0,0.9)] transition-colors"
                  title="Enregistrer votre voix (fonctionnalité à venir)"
                >
                  <Mic size={20} />
                </button>
                <button
                  type="submit"
                  className="p-3 rounded-lg bg-[rgba(0,20,255,0.7)] text-white hover:bg-[rgba(0,20,255,0.9)] transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={togglePresentationMode}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(0,20,255,0.8)] to-[rgba(0,100,255,0.8)] text-white hover:from-[rgba(0,20,255,0.9)] hover:to-[rgba(0,100,255,0.9)] transition-all shadow-lg"
                title="Passer en mode présentation"
              >
                <Maximize size={16} />
                <span>Mode Présentation</span>
              </button>

              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(255,120,0,0.8)] to-[rgba(255,60,0,0.8)] text-white hover:from-[rgba(255,120,0,0.9)] hover:to-[rgba(255,60,0,0.9)] transition-all shadow-lg"
                title="Télécharger la vidéo (fonctionnalité à venir)"
              >
                <Download size={16} />
                <span>Exporter</span>
              </button>
            </div>

            <div className="mt-4 text-center text-[rgba(255,255,255,0.5)] text-xs">
              <p>Saisissez votre texte, puis passez en mode présentation pour enregistrer</p>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
