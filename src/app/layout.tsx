import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import NoteProvider from "@/providers/NoteProvider";
import { Analytics } from "@vercel/analytics/next"


export const metadata: Metadata = {
  title: "Gorilla Notes",
  description: "A note-taking application for gorillas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NoteProvider>
            <SidebarProvider>
              <AppSidebar />
              <div className="flex min-h-screen w-full flex-col">
                <Header />

                <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                  {children}
                </main>
              </div>
            </SidebarProvider>
            <Toaster />
          </NoteProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
