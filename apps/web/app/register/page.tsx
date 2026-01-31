'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { UserPlus, Mail, Lock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const registerSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
})

type RegisterFormData = z.infer<typeof registerSchema>

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.fullName,
                    email: data.email,
                    password: data.password,
                }),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Registration failed')
            }

            setSuccess(true)
            // Redirect to login page after 1.5 seconds
            setTimeout(() => {
                window.location.href = '/login?registered=true'
            }, 1500)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred during registration')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-mono font-bold text-emerald-500 glow-pulse mb-2">
                        LEAD HUNTER v1.0
                    </h1>
                    <p className="text-zinc-400 font-mono text-sm">
                        Initialize New User Account
                    </p>
                </div>

                {/* Registration Form */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-2xl">
                    <div className="flex items-center gap-2 mb-6">
                        <UserPlus className="text-emerald-500" size={24} />
                        <h2 className="text-xl font-mono font-bold text-zinc-100 uppercase tracking-wider">
                            Create Account
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500 rounded p-3">
                                <p className="text-red-500 text-sm font-mono">{error}</p>
                            </div>
                        )}

                        {/* Success Message */}
                        {success && (
                            <div className="bg-emerald-500/10 border border-emerald-500 rounded p-3">
                                <p className="text-emerald-500 text-sm font-mono">
                                    Account created successfully! Redirecting to login...
                                </p>
                            </div>
                        )}

                        {/* Full Name */}
                        <div>
                            <label className="block text-xs text-zinc-500 font-mono mb-2 uppercase tracking-widest">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                <input
                                    {...register('fullName')}
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded pl-11 pr-4 py-3 text-emerald-500 font-mono text-sm placeholder-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                                />
                            </div>
                            {errors.fullName && (
                                <p className="text-red-500 text-xs font-mono mt-1">
                                    {errors.fullName.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xs text-zinc-500 font-mono mb-2 uppercase tracking-widest">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="user@example.com"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded pl-11 pr-4 py-3 text-emerald-500 font-mono text-sm placeholder-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-xs font-mono mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-xs text-zinc-500 font-mono mb-2 uppercase tracking-widest">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                <input
                                    {...register('password')}
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded pl-11 pr-4 py-3 text-emerald-500 font-mono text-sm placeholder-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs font-mono mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-xs text-zinc-500 font-mono mb-2 uppercase tracking-widest">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                                <input
                                    {...register('confirmPassword')}
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded pl-11 pr-4 py-3 text-emerald-500 font-mono text-sm placeholder-zinc-600 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                                />
                            </div>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-xs font-mono mt-1">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-zinc-950 font-mono font-bold py-3 rounded flex items-center justify-center gap-2 transition-all duration-200 glow-pulse disabled:opacity-50"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                                    INITIALIZING...
                                </>
                            ) : (
                                <>
                                    CREATE ACCOUNT
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-zinc-500 font-mono text-xs">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="text-emerald-500 hover:text-emerald-400 transition-colors underline"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-zinc-600 font-mono text-xs">
                        © 2026 LeadHunter. All systems operational.
                    </p>
                </div>
            </div>
        </div>
    )
}
