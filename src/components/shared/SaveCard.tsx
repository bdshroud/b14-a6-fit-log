import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock, FaRegStar } from 'react-icons/fa';

import { IWorkout } from '@/type/workoutType';

import DeleteSaveButtonPage from '../DeleteButton/DeleteSaveButtonPage';

interface SaveCardProps {
    workout: IWorkout;
}

const SaveCard = ({ workout }: SaveCardProps) => {
    return (
        <article className="fitlog-card p-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                {/* Workout information */}
                <div className="flex w-full flex-col items-center gap-4 text-center sm:flex-row sm:text-left md:w-auto">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={100}
                        height={100}
                        className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-[100px] sm:w-[100px]"
                    />

                    <div className="min-w-0">
                        <h2 className="truncate text-lg font-bold uppercase sm:text-xl">
                            {workout.name}
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                            {workout.equipment}
                        </p>

                        {/* Stats */}
                        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-[#C2F800] sm:justify-start">
                            <span className="flex items-center gap-1 font-semibold">
                                <FaRegClock />
                                {workout.duration} min
                            </span>

                            <span className="flex items-center gap-1 font-semibold">
                                <span aria-hidden="true">🔥</span>
                                {workout.caloriesBurned} Kcal
                            </span>

                            <span className="flex items-center gap-1 font-semibold">
                                <FaRegStar />
                                {workout.rating}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                    <Link
                        href={`/exercise/${workout.id}`}
                        className="fitlog-btn-secondary w-full sm:w-auto"
                    >
                        View Details
                    </Link>

                    <DeleteSaveButtonPage workout={workout} />
                </div>
            </div>
        </article>
    );
};

export default SaveCard;