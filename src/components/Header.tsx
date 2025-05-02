import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { shadow } from "@/styles/utils";
import { Button } from './ui/button'
import { DarkModeToggle } from './ui/DarkModeToggle'
import LogoutButton from './LogoutButton';
import { getUser } from '@/auth/server';

const Header = async () => {
    const user = await getUser(); // Replace with actual user authentication logic

    return (
        <header
            className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
            style={{
                boxShadow: shadow,
            }}
        >
            <Link className="flex items-end gap-2" href="/">
                <Image
                    src="/goatius.png"
                    height={60}
                    width={60}
                    alt="logo"
                    className="rounded-full"
                    priority
                />

                <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
                    GOAT <span>Notes</span>
                </h1>
            </Link>

            <div className='flex gap-4'>
            {
                user? (
                    <LogoutButton />
                ):(
                    <>
                        <Button asChild >
                            <Link href="/sign-up" className='hidden sm:block'>Sign Up</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/login">Login</Link>
                        </Button>
                    </>
                    
                )
            }

            <DarkModeToggle></DarkModeToggle>
            </div>
        </header>
    )
}

export default Header
