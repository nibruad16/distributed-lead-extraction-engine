'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { LogIn, Mail, Lock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
    rememberMe: z.boolean().optional(),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true)
        setError(null)

        try {
            const result = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false,
                callbackUrl: '/dashboard',
            })

            if (result?.error) {
                setError('Invalid email or password')
            } else if (result?.ok) {
                // Redirect to dashboard or callback URL
                window.location.href = result.url || '/dashboard'
            }
        } catch (err) {
            setError('An error occurred during login. Please try again.')
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
                        Access Control System
                    </p>
                </div>

                {/* Login Form */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 shadow-2xl">
                    <div className="flex items-center gap-2 mb-6">
                        <LogIn className="text-emerald-500" size={24} />
                        <h2 className="text-xl font-mono font-bold text-zinc-100 uppercase tracking-wider">
                            Sign In
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500 rounded p-3">
                                <p className="text-red-500 text-sm font-mono">{error}</p>
                            </div>
                        )}

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

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    {...register('rememberMe')}
                                    type="checkbox"
                                    className="w-4 h-4 bg-zinc-950 border border-zinc-800 rounded text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
                                />
                                <span className="text-xs text-zinc-400 font-mono">
                                    Remember me
                                </span>
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-xs text-emerald-500 hover:text-emerald-400 font-mono transition-colors"
                            >
                                Forgot password?
                            </Link>
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
                                    AUTHENTICATING...
                                </>
                            ) : (
                                <>
                                    SIGN IN
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Register Link */}
                    <div className="mt-6 text-center">
                        <p className="text-zinc-500 font-mono text-xs">
                            Don't have an account?{' '}
                            <Link
                                href="/register"
                                className="text-emerald-500 hover:text-emerald-400 transition-colors underline"
                            >
                                Create Account
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
