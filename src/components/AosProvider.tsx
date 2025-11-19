'use client'
import { useLayoutEffect, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AosProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useLayoutEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 0,
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom'
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [pathname])

  return <>{children}</>
}