import React from 'react'
import { ServicesInDepartment } from '../components/department/services-department'
import { MainLayout } from '../components/layouts/main-layout'

export function ServicesPage() {
    return (
        <MainLayout>
            <ServicesInDepartment />
        </MainLayout>
    )
}
