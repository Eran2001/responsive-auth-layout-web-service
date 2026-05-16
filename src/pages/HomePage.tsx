import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'
import { ResponsiveDebugIndicator } from '@/components/responsive-debug-indicator'

const breakpoints = [
  { name: 'xs', width: '480px', description: 'Small mobile devices' },
  { name: 'sm', width: '640px', description: 'Large mobile devices' },
  { name: 'md', width: '768px', description: 'Tablets' },
  { name: 'lg', width: '1024px', description: 'Small laptops' },
  { name: 'xl', width: '1280px', description: 'Desktops' },
  { name: '2xl', width: '1536px', description: 'Large desktops' },
  { name: '3xl', width: '1920px', description: 'Full HD displays' },
  { name: '4xl', width: '2560px', description: '2K/QHD displays' },
  { name: '5xl', width: '3840px', description: '4K/UHD displays' },
  { name: '6xl', width: '5120px', description: '5K displays' },
  { name: '7xl', width: '7680px', description: '8K displays' },
  { name: '8xl', width: '10000px', description: 'Ultra-wide displays' },
]

export default function HomePage() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width >= 10000) setCurrentBreakpoint('8xl')
      else if (width >= 7680) setCurrentBreakpoint('7xl')
      else if (width >= 5120) setCurrentBreakpoint('6xl')
      else if (width >= 3840) setCurrentBreakpoint('5xl')
      else if (width >= 2560) setCurrentBreakpoint('4xl')
      else if (width >= 1920) setCurrentBreakpoint('3xl')
      else if (width >= 1536) setCurrentBreakpoint('2xl')
      else if (width >= 1280) setCurrentBreakpoint('xl')
      else if (width >= 1024) setCurrentBreakpoint('lg')
      else if (width >= 768) setCurrentBreakpoint('md')
      else if (width >= 640) setCurrentBreakpoint('sm')
      else if (width >= 480) setCurrentBreakpoint('xs')
      else setCurrentBreakpoint('base')
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container-ultra flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <span className="text-sm font-bold text-background">A</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Acme Inc</span>
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="py-fluid">
          <div className="container-ultra">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-fluid-4xl font-bold tracking-tight text-balance mb-6">
                Ultra Responsive Auth System
              </h1>
              <p className="text-fluid-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
                A modern authentication layout designed to scale beautifully from mobile devices
                to ultra-wide 10000px displays. Test responsive breakpoints with ease.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/login">
                  <Button size="lg" className="h-12 px-8">
                    View Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    View Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="sm:hidden px-4 pb-8">
          <div className="flex flex-col gap-3">
            <Link to="/login">
              <Button className="w-full">Sign in</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" className="w-full">Create account</Button>
            </Link>
          </div>
        </div>

        <section className="py-fluid border-t border-border">
          <div className="container-ultra">
            <div className="mb-8">
              <h2 className="text-fluid-2xl font-semibold tracking-tight mb-2">
                Custom Breakpoints
              </h2>
              <p className="text-fluid-base text-muted-foreground">
                Extended breakpoints configured for ultra-responsive design testing
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 3xl:grid-cols-12 gap-fluid">
              {mounted && breakpoints.map((bp) => (
                <Card
                  key={bp.name}
                  className={`transition-all duration-300 ${
                    currentBreakpoint === bp.name
                      ? 'ring-2 ring-foreground bg-foreground text-background'
                      : 'hover:bg-muted/50'
                  }`}
                >
                  <CardHeader className="p-4">
                    <CardTitle className={`text-lg font-mono ${
                      currentBreakpoint === bp.name ? 'text-background' : ''
                    }`}>
                      {bp.name}
                    </CardTitle>
                    <CardDescription className={`text-xs ${
                      currentBreakpoint === bp.name ? 'text-background/70' : ''
                    }`}>
                      ≥{bp.width}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className={`text-xs ${
                      currentBreakpoint === bp.name ? 'text-background/70' : 'text-muted-foreground'
                    }`}>
                      {bp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-fluid border-t border-border bg-muted/30">
          <div className="container-ultra">
            <div className="mb-8">
              <h2 className="text-fluid-2xl font-semibold tracking-tight mb-2">
                Responsive Philosophy
              </h2>
              <p className="text-fluid-base text-muted-foreground">
                Key techniques implemented for true responsive mastery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-fluid">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fluid Typography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Using <code className="bg-muted px-1 rounded">clamp()</code> for smooth
                    text scaling between breakpoints, preventing abrupt size jumps.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Max-Width Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Content containers use intelligent max-widths to prevent
                    infinite stretching on ultra-wide displays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Adaptive Spacing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Spacing scales fluidly with viewport using <code className="bg-muted px-1 rounded">clamp()</code>
                    and viewport units for natural proportions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Graceful Scaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Layout remains visually balanced at any size, from 320px mobile
                    to 10000px ultra-wide displays.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-fluid border-t border-border">
          <div className="container-ultra">
            <div className="mb-8">
              <h2 className="text-fluid-2xl font-semibold tracking-tight mb-2">
                Ultra-Wide Layout Test
              </h2>
              <p className="text-fluid-base text-muted-foreground">
                Resize your browser to see how the layout adapts across all breakpoints
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-dashed border-border bg-muted/20">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>container-ultra:</strong> max-width: min(100% - 4rem, 2400px)
                </p>
                <div className="h-4 bg-foreground/10 rounded relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-foreground/30 rounded"
                    style={{ width: 'min(100%, 2400px)' }}
                  />
                </div>
              </div>

              <div className="container-responsive p-6 rounded-lg border border-dashed border-border bg-muted/20">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>container-responsive:</strong> max-width: min(100% - 2rem, 1400px)
                </p>
                <div className="h-4 bg-foreground/10 rounded relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-foreground/30 rounded"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container-ultra text-center text-sm text-muted-foreground">
          <p>
            Built with React, Vite, Tailwind CSS v4, and shadcn/ui.
            Designed for responsive testing from 320px to 10000px.
          </p>
        </div>
      </footer>

      <ResponsiveDebugIndicator />
    </div>
  )
}
