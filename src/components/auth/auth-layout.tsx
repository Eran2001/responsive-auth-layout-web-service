import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '@/components/theme-toggle'
import { ResponsiveDebugIndicator } from '@/components/responsive-debug-indicator'

interface AuthLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Branding panel — desktop only */}
        <div className="relative hidden lg:flex flex-col justify-between border-r border-border bg-muted/30 p-fluid">
          <div
            className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                               linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: 'clamp(20px, 2vw, 40px) clamp(20px, 2vw, 40px)',
            }}
          />

          <div className="relative z-10 flex flex-col h-full max-w-[600px] 3xl:max-w-[800px] 5xl:max-w-[1000px]">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
                <span className="text-sm font-bold text-background">A</span>
              </div>
              <span className="text-fluid-lg font-semibold tracking-tight">Acme Inc</span>
            </Link>

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

            <div className="text-fluid-sm text-muted-foreground">
              <p>Secure • Fast • Scalable</p>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="relative flex flex-col min-h-screen lg:min-h-0">
          <header className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
            <Link to="/" className="flex items-center gap-2 lg:invisible">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground">
                <span className="text-xs font-bold text-background">A</span>
              </div>
              <span className="text-sm font-semibold tracking-tight">Acme Inc</span>
            </Link>
            <ThemeToggle />
          </header>

          <main className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 pb-8 lg:pb-0">
            <div
              className="w-full"
              style={{ maxWidth: 'clamp(320px, 85vw, 480px)' }}
            >
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

              {children}
            </div>
          </main>

          <footer className="p-4 sm:p-6 lg:p-8">
            <p className="text-center text-xs text-muted-foreground">
              By continuing, you agree to our{' '}
              <Link to="/terms" className="underline underline-offset-4 hover:text-foreground transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="underline underline-offset-4 hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </footer>
        </div>
      </div>

      <ResponsiveDebugIndicator />
    </div>
  )
}
