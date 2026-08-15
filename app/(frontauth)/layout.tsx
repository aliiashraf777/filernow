// app/(auth)/layout.tsx
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            <div
                className="hidden items-center justify-center p-12 lg:flex"
                style={{
                    background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #C8102E 100%)",
                }}
            >
                <Image
                    src="/assets/auth/authIllustration.png"
                    alt="Filernow secure tax filing"
                    width={520}
                    height={480}
                    priority
                    className="capsule-breathe arc-breathex orbit-pingx loader-breathex icon-pulsex"
                />
            </div>

            <div className="flex flex-col justify-center px-6 py-12 sm:px-16">
                <div className="mx-auto w-full max-w-md">
                    <Link href="/">
                        <Image src="/assets/headerLogo.svg" alt="Filernow" width={58} height={58}
                            className="mb-6"
                        />
                    </Link>
                    {children}
                </div>
                <p className="mt-auto pt-12 text-center text-sm text-gray-500">
                    Powered by Filernow© {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
}