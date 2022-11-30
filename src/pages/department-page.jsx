import React from 'react'
import { Department } from '../components/department/department'
import { MainLayout } from '../components/layouts/main-layout'

export function DepartmentPage() {
    return (
        <MainLayout>
            <Department />
        </MainLayout>
    )
}
