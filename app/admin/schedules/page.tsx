'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import SchedulesList from '@/components/ScheduleList'

export default function AdminSchedulesPage() {
    const { user, isLoading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isLoading && (!user || user.role !== 'ADMIN')) {
            router.push('/')
        }
    }, [user, isLoading, router])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
                <div className="text-white">Carregando...</div>
            </div>
        )
    }

    if (!user || user.role !== 'ADMIN') {
        return null
    }

    return (
        <div className="min-h-screen bg-neutral-900">
            <SchedulesList />
        </div>
    )
}