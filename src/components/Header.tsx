import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { shadow } from "@/styles/utils";
import { Button } from './ui/button'
import { DarkModeToggle } from './ui/DarkModeToggle'
import LogOutButton from './LogoutButton';
import { getUser } from '@/auth/server';
import { SidebarTrigger } from './ui/sidebar';

const Header = async () => {
    console.log("in header")
  const user = await getUser();
  console.log("after get user in header component")

    return (
        <header
            className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
            style={{
                boxShadow: shadow,
            }}
        >
            <SidebarTrigger className='absolute left-1 top-1'/>
            <Link className="flex items-end gap-2" href="/">
                <Image
                    src="/LanguageCosmos.png"
                    height={60}
                    width={60}
                    alt="logo"
                    className="rounded-full"
                    priority
                />

                <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
                Gorilla <span>Note</span>
                </h1>
            </Link>

            <div className='flex gap-4'>
            {
                user? (
                    <LogOutButton />
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
