"use client"

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface HowToDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

type Language = 'english' | 'hindi'
type Platform = 'android' | 'ios'

export function HowToDownloadModal({ isOpen, onClose }: HowToDownloadModalProps) {
  const [activeTab, setActiveTab] = useState<Platform>('android')
  const [language, setLanguage] = useState<Language>('hindi')

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
                        onClick={() => setLanguage('hindi')}
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
                        onClick={() => setLanguage('english')}
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
                        className="text-xl md:text-2xl font-semibold mb-5 md:mb-6"
                        style={{ 
                          fontFamily: 'var(--font-playfair)', 
                          color: '#1a1a1a',
                          fontWeight: 600,
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
                            {currentInstructions.map((instruction, index) => (
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
                                <span className="text-gray-700 flex-1">{instruction}</span>
                              </div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* YouTube Video */}
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-semibold mb-4 md:mb-5"
                        style={{ 
                          fontFamily: 'var(--font-playfair)', 
                          color: '#1a1a1a',
                          fontWeight: 600,
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

