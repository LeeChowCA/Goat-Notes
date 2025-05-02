"use client"

import { Button } from './ui/button'
import { useState } from 'react'
// import { useToast } from '@/hooks/use-toast'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner';

const LogoutButton = () => {
    // const {toast} = useToast();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        setLoading(true)

        await new Promise((resolve) => setTimeout(resolve, 2000))
        // Simulate a logout request

        const errorMessage = null // Replace with actual error message if any

        if (!errorMessage) {
            toast.success('Logout successful', {
                description: 'You have been logged out successfully.',
            });
            router.push('/');
        } else {
            toast.error('Logout failed', {
                description: errorMessage,
            });
        }

        setLoading(false)

    }


    return (
        <Button
            variant="outline"
            onClick={handleLogout}
            disabled={loading}
            className='w-24'
        >
            {loading ? <Loader2 className="animate-spin" /> : 'Logout'}
        </Button>
    )
}

export default LogoutButton
