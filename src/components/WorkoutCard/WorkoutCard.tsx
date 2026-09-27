import Image from 'next/image';
import Link from 'next/link';
import { FaRegClock, FaRegStar } from 'react-icons/fa';

import { IWorkout } from '@/type/workoutType';

interface WorkoutCardProps {
    workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link
            href={`/exercise/${workout.id}`}
            className="group block"
        >
            <article className="fitlog-card">
                {/* Image */}
                <div className="overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={450}
                        height={350}
                        className="fitlog-card-image"
                    />
                </div>

                {/* Content */}
                <div className="space-y-4 p-5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                            <span
                                key={group}
                                className="fitlog-tag"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Name */}
                    <h2 className="fitlog-card-title">
                        {workout.name}
                    </h2>

                    {/* Equipment */}
                    <p className="text-sm text-gray-400">
                        {workout.equipment}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-700" />

                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                            <FaRegClock />
                            {workout.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <span aria-hidden="true">🔥</span>
                            {workout.caloriesBurned} Kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <FaRegStar />
                            {workout.rating}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default WorkoutCard;