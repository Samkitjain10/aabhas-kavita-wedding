"use client"

import { useEffect } from 'react'

export function HideErrorOverlay() {
  useEffect(() => {
    function hideErrorOverlay() {
      const selectors = [
        '#__next-build-watcher',
        '#__next-dev-overlay',
        '[data-nextjs-dialog]',
        '[data-nextjs-dialog-overlay]',
        '.next-error-overlay',
        'iframe[src*="__nextjs"]',
        'div[id*="__nextjs"]',
        '[class*="error-overlay"]',
        '[class*="ErrorOverlay"]',
        '[data-error]',
        '[data-issue]',
        '[class*="issue"]',
        '[class*="Issue"]',
      ]
      
      selectors.forEach(selector => {
        try {
          const elements = document.querySelectorAll(selector)
          elements.forEach(el => {
            if (el instanceof HTMLElement) {
              el.style.display = 'none'
              el.style.visibility = 'hidden'
              el.style.opacity = '0'
              el.style.pointerEvents = 'none'
              el.style.position = 'fixed'
              el.style.zIndex = '-9999'
            }
          })
        } catch (e) {
          // Ignore errors
        }
      })
    }

    // Run immediately
    hideErrorOverlay()

    // Run after a short delay
    setTimeout(hideErrorOverlay, 100)

    // Run periodically to catch dynamically added overlays
    const interval = setInterval(hideErrorOverlay, 1000)

    // Observe DOM changes
    const observer = new MutationObserver(hideErrorOverlay)
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return null
}

