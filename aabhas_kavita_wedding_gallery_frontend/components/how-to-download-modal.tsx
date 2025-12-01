"use client"

import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface HowToDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

type ModalLanguage = 'english' | 'hindi'
type GlobalLanguage = 'en' | 'hi'
type Platform = 'android' | 'ios'

export function HowToDownloadModal({ isOpen, onClose }: HowToDownloadModalProps) {
  const [activeTab, setActiveTab] = useState<Platform>('android')
  const [globalLanguage, setGlobalLanguage] = useState<GlobalLanguage>('hi')
  
  // Convert global language (en/hi) to modal language (english/hindi)
  const language: ModalLanguage = globalLanguage === 'en' ? 'english' : 'hindi'

  useEffect(() => {
    // Load language preference from localStorage
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('wedding-gallery-language') as GlobalLanguage | null
      if (savedLang === 'en' || savedLang === 'hi') {
        setGlobalLanguage(savedLang)
      }
    }

    // Listen for language changes from the global language switcher
    const handleLanguageChange = (e: CustomEvent<GlobalLanguage>) => {
      setGlobalLanguage(e.detail)
    }

    window.addEventListener('language-changed' as any, handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener('language-changed' as any, handleLanguageChange as EventListener)
    }
  }, [])

  // Handle language change from modal buttons
  const handleLanguageChange = (newLang: ModalLanguage) => {
    const globalLang: GlobalLanguage = newLang === 'english' ? 'en' : 'hi'
    setGlobalLanguage(globalLang)
    
    // Update localStorage and dispatch event to sync with other components
    if (typeof window !== 'undefined') {
      localStorage.setItem('wedding-gallery-language', globalLang)
      window.dispatchEvent(new CustomEvent('language-changed', { detail: globalLang }))
    }
  }

  const instructions = {
    english: {
      android: [
        "Click the 'Download Photo' or 'Download Video' button",
        "The file will automatically download to your device",
        "Open your 'Files' or 'Downloads' app to find the file",
        "The file will be saved in your Downloads folder",
        "You can move it to your Gallery/Photos app if needed"
      ],
      ios: [
        "Click the 'Download Photo' or 'Download Video' button",
        "The file will open in a new browser tab",
        "Long-press (tap and hold) on the image or video",
        "Select 'Save to Photos' from the menu that appears",
        "The file will be saved to your Photos app",
        "Alternatively, tap the Share button and choose 'Save to Files'"
      ]
    },
    hindi: {
      android: [
        "'Download Photo' या 'Download Video' बटन पर क्लिक करें",
        "फ़ाइल आपके डिवाइस पर अपने आप डाउनलोड हो जाएगी",
        "फ़ाइल खोजने के लिए अपना 'Files' या 'Downloads' ऐप खोलें",
        "फ़ाइल आपके Downloads फ़ोल्डर में सेव हो जाएगी",
        "आप इसे अपने Gallery/Photos ऐप में ले जा सकते हैं यदि आवश्यक हो"
      ],
      ios: [
        "'Download Photo' या 'Download Video' बटन पर क्लिक करें",
        "फ़ाइल एक नए ब्राउज़र टैब में खुलेगी",
        "छवि या वीडियो पर लंबे समय तक दबाएं (long-press)",
        "दिखाई देने वाले मेनू से 'Save to Photos' चुनें",
        "फ़ाइल आपके Photos ऐप में सेव हो जाएगी",
        "वैकल्पिक रूप से, Share बटन पर टैप करें और 'Save to Files' चुनें"
      ]
    }
  }

  const titles = {
    english: {
      title: "How to Download Photos & Videos",
      videoTitle: "Video Tutorial",
      android: "Android",
      ios: "iPhone / iOS"
    },
    hindi: {
      title: "फ़ोटो और वीडियो कैसे डाउनलोड करें",
      videoTitle: "वीडियो ट्यूटोरियल",
      android: "Android",
      ios: "iPhone / iOS"
    }
  }

  // YouTube video ID - replace with your actual tutorial video ID
  // To get the video ID: from a YouTube URL like https://www.youtube.com/watch?v=VIDEO_ID
  // Use just the VIDEO_ID part (e.g., if URL is https://www.youtube.com/watch?v=abc123, use "abc123")
  const youtubeVideoId = "YOUR_VIDEO_ID_HERE" // TODO: Replace with actual video ID

  const currentInstructions = instructions[language][activeTab]
  const currentTitles = titles[language]

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Premium Blur Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div 
            className="fixed inset-0"
            style={{
              background: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 md:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel 
                className="w-full max-w-[720px] transform overflow-hidden rounded-[24px] text-left align-middle shadow-2xl transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(16px) brightness(1.15)',
                  WebkitBackdropFilter: 'blur(16px) brightness(1.15)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                }}
              >
                <div className="p-5 md:p-8">
                  {/* Top Bar with Close Button and Language Toggles */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/60">
                    {/* Language Selector */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleLanguageChange('hindi')}
                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                          language === 'hindi'
                            ? 'bg-[#D4AF37] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                      >
                        हिंदी
                      </button>
                      <button
                        onClick={() => handleLanguageChange('english')}
                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                          language === 'english'
                            ? 'bg-[#D4AF37] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        style={{ fontFamily: 'var(--font-cormorant)' }}
                      >
                        English
                      </button>
                    </div>
                    
                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                  </div>

                  {/* Platform Tabs - Instagram Style */}
                  <div className="flex justify-center gap-8 mb-8 border-b border-gray-200/60">
                    <button
                      onClick={() => setActiveTab('android')}
                      className={`px-4 py-3 font-semibold transition-all relative ${
                        activeTab === 'android'
                          ? 'text-gray-900 font-bold'
                          : 'text-gray-400 font-medium hover:text-gray-600'
                      }`}
                      style={{ fontFamily: 'var(--font-cormorant)', fontSize: '15px' }}
                    >
                      {currentTitles.android}
                      {activeTab === 'android' && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab('ios')}
                      className={`px-4 py-3 font-semibold transition-all relative ${
                        activeTab === 'ios'
                          ? 'text-gray-900 font-bold'
                          : 'text-gray-400 font-medium hover:text-gray-600'
                      }`}
                      style={{ fontFamily: 'var(--font-cormorant)', fontSize: '15px' }}
                    >
                      {currentTitles.ios}
                      {activeTab === 'ios' && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 md:space-y-8">
                    {/* Instructions */}
                    <div>
                      <h3 
                        className={`text-xl md:text-2xl mb-5 md:mb-6 ${language === 'english' ? 'font-bold' : 'font-semibold'}`}
                        style={{ 
                          fontFamily: 'var(--font-playfair)', 
                          color: '#1a1a1a',
                          fontWeight: language === 'english' ? 700 : 600,
                          fontSize: '24px',
                        }}
                      >
                        {currentTitles.title}
                      </h3>
                      <div className="space-y-3 md:space-y-4">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`${activeTab}-${language}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {currentInstructions.map((instruction, index) => {
                              // Function to render text with English words in bold
                              const renderInstruction = (text: string) => {
                                if (language === 'english') {
                                  return <span className="font-bold">{text}</span>
                                }
                                
                                // For Hindi, detect and bold English words/phrases
                                // Match English words, phrases in quotes, or common English terms
                                const parts = text.split(/(['"]?[A-Za-z][A-Za-z\s/]*['"]?)/g)
                                
                                return (
                                  <>
                                    {parts.map((part, i) => {
                                      // Check if part contains English letters
                                      const hasEnglish = /[A-Za-z]/.test(part)
                                      if (hasEnglish && part.trim().length > 0) {
                                        return (
                                          <span key={i} className="font-bold">
                                            {part}
                                          </span>
                                        )
                                      }
                                      return <span key={i}>{part}</span>
                                    })}
                                  </>
                                )
                              }
                              
                              return (
                                <div
                                  key={index}
                                  className="flex items-start gap-3"
                                  style={{ 
                                    fontFamily: 'var(--font-cormorant)',
                                    fontSize: '17px',
                                    lineHeight: '1.6',
                                    paddingLeft: '12px',
                                  }}
                                >
                                  <span 
                                    className="text-[#D4AF37] font-semibold flex-shrink-0"
                                    style={{ opacity: 0.6 }}
                                  >
                                    {index + 1}.
                                  </span>
                                  <span className="text-gray-700 flex-1">
                                    {renderInstruction(instruction)}
                                  </span>
                                </div>
                              )
                            })}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* YouTube Video */}
                    <div>
                      <h3 
                        className={`text-xl md:text-2xl mb-4 md:mb-5 ${language === 'english' ? 'font-bold' : 'font-semibold'}`}
                        style={{ 
                          fontFamily: 'var(--font-playfair)', 
                          color: '#1a1a1a',
                          fontWeight: language === 'english' ? 700 : 600,
                          fontSize: '24px',
                        }}
                      >
                        {currentTitles.videoTitle}
                      </h3>
                      <div 
                        className="w-full rounded-2xl overflow-hidden"
                        style={{
                          aspectRatio: '16/9',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                          title="How to Download Photos and Videos"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

