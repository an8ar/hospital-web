import React from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import { Login } from '../../components/auth/login'

export function LoginPage() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  )
}
