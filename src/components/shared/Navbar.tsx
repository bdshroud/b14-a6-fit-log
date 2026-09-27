'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '@/assets/logo.png';
import { WorkoutContext } from '@/context/workoutContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        addWorkout,
        addSave,
    } = useContext(WorkoutContext);

    const pathName = usePathname();

    const planCount = addWorkout.length;
    const savedCount = addSave.length;

    const isHomeActive = pathName === '/';
    const isMyPlanActive = pathName === '/my-plan';

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 border border-white/10 bg-[#0C0D10]">
            <div className="container mx-auto max-w-280 px-4">
                <div className="relative flex min-h-[72px] items-center justify-between">

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="
                            flex items-center justify-center
                            rounded-lg p-2
                            text-gray-300
                            transition-colors duration-300
                            hover:bg-white/5
                            hover:text-[#C2F800]
                            md:hidden
                        "
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <FiX size={22} />
                        ) : (
                            <GiHamburgerMenu size={22} />
                        )}
                    </button>

                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="fitlog-logo flex items-center gap-2"
                    >
                        <Image
                            src={logo}
                            alt="FitLog Logo"
                            width={30}
                            height={30}
                            priority
                        />

                        <h2 className="font-semibold text-white">
                            FITLOG
                        </h2>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center gap-3 md:flex">
                        <li>
                            <Link
                                href="/"
                                className={
                                    isHomeActive
                                        ? 'fitlog-nav-link-active'
                                        : 'fitlog-nav-link'
                                }
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-plan"
                                className={
                                    isMyPlanActive
                                        ? 'fitlog-nav-link-active'
                                        : 'fitlog-nav-link'
                                }
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>

                    {/* Plan & Saved Counters */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/my-plan"
                            className="flex items-center gap-2 text-sm text-gray-300"
                        >
                            <span>Plan</span>

                            <span className="fitlog-badge fitlog-badge-plan">
                                {planCount}
                            </span>
                        </Link>

                        <Link
                            href="/my-plan"
                            className="flex items-center gap-2 text-sm text-gray-300"
                        >
                            <span>Saved</span>

                            <span className="fitlog-badge fitlog-badge-saved">
                                {savedCount}
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="
                            absolute
                            left-0
                            right-0
                            top-full
                            z-50
                            border-t border-white/10
                            bg-[#0C0D10]
                            p-4
                            shadow-lg
                            md:hidden
                        ">
                            <ul className="flex flex-col gap-2">

                                <li>
                                    <Link
                                        href="/"
                                        onClick={closeMenu}
                                        className={
                                            isHomeActive
                                                ? 'fitlog-nav-link-active block'
                                                : 'fitlog-mobile-link'
                                        }
                                    >
                                        Workouts
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/my-plan"
                                        onClick={closeMenu}
                                        className={
                                            isMyPlanActive
                                                ? 'fitlog-nav-link-active block'
                                                : 'fitlog-mobile-link'
                                        }
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