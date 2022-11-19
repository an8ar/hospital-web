import React from 'react'
import { MainLayout } from '../../components/layouts/main-layout'
import { RegisterPatient } from '../../components/admin-patient/register-patient'

export function RegisterPatientPage() {
  return (
    <MainLayout>
        <RegisterPatient/>
    </MainLayout>
  )
}
