"use client"

import { useEffect } from "react"
import Script from "next/script"

export function TallyForm() {
  useEffect(() => {
    // This will run after the script loads to ensure iframes are properly handled
    const loadEmbeds = () => {
      // @ts-ignore - Tally is injected by the script
      if (typeof window.Tally !== "undefined") {
        // @ts-ignore
        window.Tally.loadEmbeds()
      }
    }

    // Run once on mount
    loadEmbeds()
  }, [])

  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/w5pQZd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="282"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Join the waitlist"
      ></iframe>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore - Tally is injected by the script
          if (typeof window.Tally !== "undefined") {
            // @ts-ignore
            window.Tally.loadEmbeds()
          }
        }}
      />
    </>
  )
}

