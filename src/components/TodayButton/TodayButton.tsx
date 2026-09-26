'use client';

import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/type/workoutType';
import { useContext } from 'react';
import { toast } from 'react-toastify';

interface TodayButtonProps {
    workout: IWorkout;
}

const TodayButton = ({ workout }: TodayButtonProps) => {
    const { addWorkout, addToToday } = useContext(WorkoutContext);

    const alreadyAdded = addWorkout.some(
        (item) => item.id === workout.id
    );

    const planFull = addWorkout.length >= 5;

    const handleAddToday = () => {
        if (alreadyAdded) {
            toast.info("This workout is already in today's plan.");
            return;
        }

        if (planFull) {
            toast.error("Today's plan is full. Maximum 5 workouts.");
            return;
        }

        const success = addToToday(workout);

        if (success) {
            toast.success("Added to today's plan");
        }
    };

    return (
        <button
            type="button"
            onClick={handleAddToday}
            disabled={alreadyAdded || planFull}
            className="w-full rounded-lg bg-[#C2F800] px-6 py-3 text-sm font-bold text-black disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
            {alreadyAdded
                ? "Added to today's plan"
                : planFull
                ? 'Plan is full'
                : "Add to today's plan"}
        </button>
    );
};

export default TodayButton;