import Image from 'next/image';
import Link from 'next/link';

import bannerImg from '@/assets/banner.png';

const Banner = () => {
    return (
        <header className="mt-6">
            <div className="flex flex-col items-center justify-between rounded-xl bg-[#15171D] p-6 sm:p-8 md:flex-row md:p-10">

                {/* Content */}
                <div className="mx-auto flex w-full flex-col justify-start space-y-4 text-center sm:max-w-xl md:w-1/2 md:text-left">

                    <p className="font-semibold text-[#C2F800]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-2xl font-bold uppercase leading-tight sm:text-3xl md:text-4xl">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="text-sm leading-6 text-gray-400 sm:text-base">
                        FitLog is a dark, no-nonsense gym companion:
                        pick a lift, lock it into today&apos;s plan,
                        and watch the week&apos;s work add up.
                    </p>

                    {/* CTA */}
                    <div className="pt-2">
                        <Link
                            href="#library"
                            className="fitlog-btn-primary"
                        >
                            BROWSE WORKOUTS

                            <span className="fitlog-arrow">
                                ↓
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Banner Image */}
                <div className="flex w-full justify-center pt-8 md:w-[350px] md:justify-end md:pt-0">
                    <Image
                        src={bannerImg}
                        alt="FitLog workout"
                        width={350}
                        height={350}
                        priority
                        className="fitlog-hero-image"
                    />
                </div>
            </div>
        </header>
    );
};

export default Banner;