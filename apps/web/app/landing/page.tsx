'use client'

import React from 'react'
import {
    ArrowRight,
    Zap,
    Shield,
    BarChart3,
    Download,
    Target,
    Network,
    CheckCircle2,
    Sparkles
} from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
    const features = [
        {
            icon: Zap,
            title: 'Automated Extraction',
            description: 'AI-powered scraping engine extracts B2B leads in seconds',
        },
        {
            icon: Network,
            title: 'Proxy Rotation',
            description: 'Distributed proxy network ensures 99.8% success rate',
        },
        {
            icon: BarChart3,
            title: 'Real-time Analytics',
            description: 'Monitor extraction progress with live dashboards',
        },
        {
            icon: Download,
            title: 'Data Export',
            description: 'Export leads to CSV, Excel, or JSON formats',
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Bank-grade encryption and data protection',
        },
        {
            icon: Target,
            title: 'Smart Targeting',
            description: 'Advanced filters to find your ideal prospects',
        },
    ]

    const stats = [
        { value: '10M+', label: 'Leads Extracted' },
        { value: '99.8%', label: 'Success Rate' },
        { value: '5,000+', label: 'Active Users' },
        { value: '24/7', label: 'Uptime' },
    ]

    const steps = [
        { number: '01', title: 'Define Target', description: 'Enter your search criteria and location' },
        { number: '02', title: 'Launch Scrape', description: 'Our AI workers start extracting data' },
        { number: '03', title: 'Export Leads', description: 'Download verified leads instantly' },
    ]

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-mono font-bold text-emerald-500 glow-pulse">
                        LEAD HUNTER v1.0
                    </h1>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="text-sm font-mono text-zinc-400 hover:text-emerald-500 transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/register"
                            className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-mono font-bold px-4 py-2 rounded transition-all duration-200"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="text-emerald-500" size={16} />
                            <span className="text-xs font-mono text-emerald-500 uppercase tracking-wider">
                                Next-Gen B2B Lead Extraction
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 leading-tight">
                            Extract <span className="text-emerald-500 glow-pulse">Thousands</span> of B2B Leads
                            <br />
                            in <span className="text-emerald-500">Minutes</span>
                        </h1>

                        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-mono">
                            Automated lead generation powered by AI. Find decision-makers, extract contact data,
                            and grow your business with our distributed scraping engine.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/register"
                                className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-mono font-bold px-8 py-4 rounded flex items-center gap-2 transition-all duration-200 glow-pulse group"
                            >
                                Start Extracting Now
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                            <Link
                                href="/dashboard"
                                className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-100 font-mono font-bold px-8 py-4 rounded transition-all duration-200"
                            >
                                View Live Demo
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-8 text-sm font-mono text-zinc-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-emerald-500" size={16} />
                                No credit card required
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-emerald-500" size={16} />
                                Free trial included
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 border-y border-zinc-800 bg-zinc-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl md:text-5xl font-mono font-bold text-emerald-500 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-zinc-500 font-mono uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
                            Built for <span className="text-emerald-500">Performance</span>
                        </h2>
                        <p className="text-xl text-zinc-400 font-mono max-w-2xl mx-auto">
                            Enterprise-grade features designed to extract leads at scale
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-200 group"
                            >
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                    <feature.icon className="text-emerald-500" size={24} />
                                </div>
                                <h3 className="text-xl font-mono font-bold mb-2 text-zinc-100">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-400 text-sm font-mono">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-6 bg-zinc-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-mono font-bold mb-4">
                            How It <span className="text-emerald-500">Works</span>
                        </h2>
                        <p className="text-xl text-zinc-400 font-mono">
                            Three simple steps to start generating leads
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-200">
                                    <div className="text-6xl font-mono font-bold text-emerald-500/20 mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-mono font-bold mb-3 text-zinc-100">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-400 font-mono">
                                        {step.description}
                                    </p>
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="text-emerald-500/30" size={32} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
                        Ready to <span className="text-emerald-500">10x</span> Your Lead Generation?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 font-mono">
                        Join thousands of businesses using LeadHunter to automate their prospecting
                    </p>
                    <Link
                        href="/register"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-mono font-bold px-8 py-4 rounded transition-all duration-200 glow-pulse group"
                    >
                        Get Started Free
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-800 py-12 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-mono font-bold text-emerald-500 mb-4">
                                LEAD HUNTER
                            </h3>
                            <p className="text-sm text-zinc-500 font-mono">
                                Next-generation B2B lead extraction platform
                            </p>
                        </div>
                        <div>
                            <h4 className="font-mono font-bold mb-4 text-zinc-300">Product</h4>
                            <ul className="space-y-2 text-sm font-mono text-zinc-500">
                                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Features</Link></li>
                                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Pricing</Link></li>
                                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Demo</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-mono font-bold mb-4 text-zinc-300">Company</h4>
                            <ul className="space-y-2 text-sm font-mono text-zinc-500">
                                <li><Link href="/" className="hover:text-emerald-500 transition-colors">About</Link></li>
                                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Blog</Link></li>
                                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-mono font-bold mb-4 text-zinc-300">Legal</h4>
                            <ul className="space-y-2 text-sm font-mono text-zinc-500">
                                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Privacy</Link></li>
                                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Terms</Link></li>
                                <li><Link href="/" className="hover:text-emerald-500 transition-colors">Security</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-zinc-800 pt-8 text-center">
                        <p className="text-sm text-zinc-600 font-mono">
                            © 2026 LeadHunter. All systems operational. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
