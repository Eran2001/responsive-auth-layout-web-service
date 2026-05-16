import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication | Ultra Responsive Auth',
  description: 'Sign in or create an account',
}

export default function AuthGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
