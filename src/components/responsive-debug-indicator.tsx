import { useEffect, useState } from 'react'

export function ResponsiveDebugIndicator() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (!mounted) return null

  const getBreakpoint = (width: number): string => {
    if (width >= 10000) return '8xl'
    if (width >= 7680) return '7xl'
    if (width >= 5120) return '6xl'
    if (width >= 3840) return '5xl'
    if (width >= 2560) return '4xl'
    if (width >= 1920) return '3xl'
    if (width >= 1536) return '2xl'
    if (width >= 1280) return 'xl'
    if (width >= 1024) return 'lg'
    if (width >= 768) return 'md'
    if (width >= 640) return 'sm'
    if (width >= 480) return 'xs'
    return 'base'
  }

  const breakpoint = getBreakpoint(dimensions.width)

  const getBreakpointColor = (bp: string): string => {
    switch (bp) {
      case 'base':
      case 'xs':
        return 'bg-red-500'
      case 'sm':
      case 'md':
        return 'bg-orange-500'
      case 'lg':
      case 'xl':
        return 'bg-yellow-500'
      case '2xl':
      case '3xl':
        return 'bg-green-500'
      case '4xl':
      case '5xl':
        return 'bg-blue-500'
      case '6xl':
      case '7xl':
      case '8xl':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg border border-border bg-background/95 px-3 py-2 text-xs font-mono shadow-lg backdrop-blur-sm">
      <div className={`h-2 w-2 rounded-full ${getBreakpointColor(breakpoint)}`} />
      <span className="font-semibold text-foreground">{breakpoint}</span>
      <span className="text-muted-foreground">|</span>
      <span className="text-muted-foreground">
        {dimensions.width} × {dimensions.height}
      </span>
    </div>
  )
}
