import React from 'react'
import { MainLayout } from '../components/layouts/main-layout'
import { DoctorGrid } from '../components/department/doctor-grid'
import { useParams } from 'react-router-dom'
import { useGetDoctorQuery } from '../api/public/public-api'

export function DoctorCard() {
  
  const {id} = useParams();
  const {data: doctor, isLoading: isDoctorLoading} = useGetDoctorQuery(id);
  if(isDoctorLoading){
    return(
      <>Loading...</>
    )
  }
  return (
    <MainLayout>
        <DoctorGrid doctor = {doctor}/>
    </MainLayout>
  )
}
