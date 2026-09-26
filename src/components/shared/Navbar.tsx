'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiX } from 'react-icons/fi';

import logo from '@/assets/logo.png';
import { WorkoutContext } from '@/context/workoutContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { addWorkout, addSave } = useContext(WorkoutContext);

    const pathname = usePathname();

    const planCount = addWorkout?.length ?? 0;
    const savedCount = addSave?.length ?? 0;

    const isWorkoutsActive = pathname === '/';
    const isMyPlanActive = pathname === '/my-plan';

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0C0D10]">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="relative flex min-h-[68px] items-center justify-between">

                    {/* Mobile Menu + Logo */}
                    <div className="flex items-center gap-2">

                        {/* Mobile hamburger */}
                        <button
                            type="button"
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="flex items-center justify-center rounded-md p-2 text-gray-300 transition hover:bg-white/5 hover:text-white md:hidden"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <FiX size={22} />
                            ) : (
                                <GiHamburgerMenu size={21} />
                            )}
                        </button>

                        {/* Logo */}
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className="flex items-center gap-2"
                        >
                            <Image
                                src={logo}
                                alt="FitLog Logo"
                                width={30}
                                height={30}
                                priority
                            />

                            <span className="text-lg font-bold tracking-wide text-white">
                                FITLOG
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
                        <ul className="flex items-center gap-2">
                            <li>
                                <Link
                                    href="/"
                                    className={`rounded-full px-4 py-2 text-sm transition ${
                                        isWorkoutsActive
                                            ? 'bg-[#3c4226] text-[#ccff00]'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-plan"
                                    className={`rounded-full px-4 py-2 text-sm transition ${
                                        isMyPlanActive
                                            ? 'bg-[#3c4226] text-[#ccff00]'
                                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Counters */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/my-plan"
                            className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
                        >
                            <span>Plan</span>

                            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-xs font-bold text-black">
                                {planCount}
                            </span>
                        </Link>

                        <Link
                            href="/my-plan"
                            className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
                        >
                            <span>Saved</span>

                            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-600 px-1.5 text-xs font-medium text-gray-300">
                                {savedCount}
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="absolute left-0 top-[68px] w-full border-b border-white/10 bg-[#0C0D10] px-4 py-4 md:hidden">
                            <ul className="flex flex-col gap-2">

                                <li>
                                    <Link
                                        href="/"
                                        onClick={closeMenu}
                                        className={`block rounded-lg px-4 py-3 text-sm transition ${
                                            isWorkoutsActive
                                                ? 'bg-[#3c4226] text-[#ccff00]'
                                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                    >
                                        Workouts
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/my-plan"
                                        onClick={closeMenu}
                                        className={`block rounded-lg px-4 py-3 text-sm transition ${
                                            isMyPlanActive
                                                ? 'bg-[#3c4226] text-[#ccff00]'
                                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                    >
                                        My Plan
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;