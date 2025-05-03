"use client"

import { Button } from './ui/button'
import { useState } from 'react'
// import { useToast } from '@/hooks/use-toast'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner';
import { logOutAction } from '@/actions/users' // Adjust the import path as necessary

const LogOutButton = () => {
    // const {toast} = useToast();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    

    const handleLogout = async () => {
        setLoading(true)

        const {errorMessage} = await logOutAction() // Replace with actual logout action
        // Simulate a logout request

         // Replace with actual error message if any

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

export default LogOutButton
