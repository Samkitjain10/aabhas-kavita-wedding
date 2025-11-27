"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sparkles, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Login failed')
      }

      router.push('/')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'You are not authorized')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/Aabhas and Kavita wedding logo.png")',
          backgroundSize: '60% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.05',
        }}
      ></div>
      <div className="absolute inset-0 gradient-wedding"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-md w-full"
      >
        <div 
          className="glass-strong rounded-3xl p-8 md:p-10 shadow-2xl overflow-visible"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          }}
        >
          <div className="text-center mb-8 overflow-visible">
            <div className="flex justify-center mb-6">
              <Sparkles className="h-8 w-8 text-[#D4AF37] animate-pulse" />
            </div>
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 whitespace-nowrap"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Aabhas & Kavita
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="h-5 w-5 text-[#D4A5A5] fill-[#D4A5A5]" />
              <h2 
                className="text-2xl font-semibold"
                style={{ 
                  fontFamily: 'var(--font-cormorant)',
                  color: '#2C2C2C',
                }}
              >
                Wedding Gallery
              </h2>
              <Heart className="h-5 w-5 text-[#D4A5A5] fill-[#D4A5A5]" />
            </div>
            <p 
              className="text-gray-600 mb-8"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}
            >
              Enter your phone number to continue
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium mb-2"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', color: '#2C2C2C' }}
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="9413078947"
                required
                className="w-full px-5 py-4 rounded-xl border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white/80 backdrop-blur-sm"
                style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif', fontSize: '1.1rem', letterSpacing: '0.5px' }}
              />
            </div>
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm"
              >
                {error}
              </motion.div>
            )}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full py-4 text-lg font-semibold rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  color: 'white',
                  border: 'none',
                }}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Enter Gallery'}
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
