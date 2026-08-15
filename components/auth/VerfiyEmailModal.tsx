// components/auth/VerifyEmailModal.tsx
"use client";

import Image from "next/image";

interface VerifyEmailModalProps {
    onClose: () => void;
}

export function VerifyEmailModal({ onClose }: VerifyEmailModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={onClose}
        >
            <div
                className="flex w-full max-w-md flex-col items-center gap-4 rounded-2xl bg-white p-10 text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <Image src="/assets/headerLogo.svg" alt="Filernow" width={58} height={58} />
                
                <h2 className="text-xl font-bold text-text-dark">Verify your Email</h2>
                <p className="text-gray-500">
                    Check your email for <span className="font-semibold text-primary">Reset Link</span> to continue.
                </p>
                <button className="w-full rounded-md bg-primary py-3 font-semibold text-white">
                    Go to Inbox
                </button>
                <p className="text-sm text-gray-500">
                    Don&apos;t receive an email?{" "}
                    <button className="font-semibold text-primary">Resend</button>
                </p>
            </div>
        </div>
    );
}