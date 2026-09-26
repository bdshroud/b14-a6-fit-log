'use client';

import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/type/workoutType';
import { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface DeleteTodayButtonPageProps {
    workout: IWorkout;
}

const DeleteTodayButtonPage = ({
    workout,
}: DeleteTodayButtonPageProps) => {
    const { removeFromToday } = useContext(WorkoutContext);

    const handleDelete = () => {
        removeFromToday(workout);
        toast.success("Removed from today's plan");
    };

    return (
        <button
            type="button"
            onClick={handleDelete}
            aria-label={`Remove ${workout.name} from today's plan`}
            className="flex cursor-pointer text-lg"
        >
            <RxCross2 />
        </button>
    );
};

export default DeleteTodayButtonPage;