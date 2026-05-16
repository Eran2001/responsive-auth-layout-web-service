'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { ResponsiveDebugIndicator } from '@/components/responsive-debug-indicator'

/**
 * Auth Layout Component
 * 
 * RESPONSIVE PHILOSOPHY:
 * - Mobile: Single column, form centered, compact spacing
 * - Tablet: Larger container, better spacing, adaptive typography
 * - Desktop: Split layout with branding on left, form on right
 * - Ultra-wide: max-width containers prevent infinite stretching
 * 
 * KEY TECHNIQUES:
 * - clamp() for fluid typography and spacing
 * - max-w-* containers to prevent ultra-wide stretching
 * - CSS Grid with responsive columns
 * - Adaptive padding using min() and clamp()
 */

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* 
        RESPONSIVE GRID LAYOUT
        - Mobile/Tablet: Single column (grid-cols-1)
        - Desktop (lg+): Two columns with branding panel
        - Uses min-h-screen to ensure full viewport coverage
      */}
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* 
          BRANDING PANEL (Desktop only)
          - Hidden on mobile/tablet for focused form experience
          - Uses fluid padding that scales with viewport
          - max-w container prevents content from stretching on ultra-wide
        */}
        <div className="relative hidden lg:flex flex-col justify-between border-r border-border bg-muted/30 p-fluid">
          {/* Subtle grid pattern overlay for visual interest */}
          <div 
            className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                               linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: 'clamp(20px, 2vw, 40px) clamp(20px, 2vw, 40px)',
            }}
          />
          
          {/* Content container with max-width for ultra-wide support */}
          <div className="relative z-10 flex flex-col h-full max-w-[600px] 3xl:max-w-[800px] 5xl:max-w-[1000px]">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <span className="text-sm font-bold text-background">A</span>
              </div>
              <span className="text-fluid-lg font-semibold tracking-tight">Acme Inc</span>
            </Link>

            {/* Main branding content - centered vertically */}
            <div className="flex flex-1 flex-col justify-center py-fluid">
              <blockquote className="space-y-4">
                <p className="text-fluid-2xl font-medium leading-snug text-balance">
                  &ldquo;This authentication system has saved me countless hours of development time. 
                  The responsive design works flawlessly across all my devices.&rdquo;
                </p>
                <footer className="text-fluid-base text-muted-foreground">
                  <cite className="not-italic font-medium">Sofia Davis</cite>
                  <span className="mx-2">—</span>
                  <span>Engineering Lead at TechCorp</span>
                </footer>
              </blockquote>
            </div>

            {/* Footer info */}
            <div className="text-fluid-sm text-muted-foreground">
              <p>Secure • Fast • Scalable</p>
            </div>
          </div>
        </div>

        {/* 
          FORM PANEL
          - Takes full width on mobile/tablet
          - Right side on desktop
          - Uses adaptive padding that scales with viewport
          - Centers content both horizontally and vertically
        */}
        <div className="relative flex flex-col min-h-screen lg:min-h-0">
          {/* Header with logo (mobile only) and theme toggle */}
          <header className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
            {/* Mobile logo - hidden on desktop where branding panel shows */}
            <Link href="/" className="flex items-center gap-2 lg:invisible">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground">
                <span className="text-xs font-bold text-background">A</span>
              </div>
              <span className="text-sm font-semibold tracking-tight">Acme Inc</span>
            </Link>
            <ThemeToggle />
          </header>

          {/* 
            FORM CONTAINER
            - Flexible growth to center content vertically
            - Adaptive horizontal padding using clamp()
            - max-w container prevents form from stretching on ultra-wide
          */}
          <main className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 pb-8 lg:pb-0">
            <div 
              className="w-full"
              style={{
                /* 
                  Fluid max-width that grows with viewport but caps reasonably
                  - Mobile: Nearly full width (minus padding)
                  - Tablet: 400px optimal form width
                  - Desktop+: 440px comfortable reading width
                  - Ultra-wide: Still capped at 480px to maintain readability
                */
                maxWidth: 'clamp(320px, 85vw, 480px)',
              }}
            >
              {/* Title section with fluid typography */}
              <div className="flex flex-col gap-2 text-center mb-6 sm:mb-8">
                <h1 className="text-fluid-2xl font-semibold tracking-tight text-balance">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-fluid-sm text-muted-foreground text-balance">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Form content */}
              {children}
            </div>
          </main>

          {/* Footer with legal links */}
          <footer className="p-4 sm:p-6 lg:p-8">
            <p className="text-center text-xs text-muted-foreground">
              By continuing, you agree to our{' '}
              <Link href="/terms" className="underline underline-offset-4 hover:text-foreground transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </footer>
        </div>
      </div>

      {/* Debug indicator for responsive testing */}
      <ResponsiveDebugIndicator />
    </div>
  )
}
