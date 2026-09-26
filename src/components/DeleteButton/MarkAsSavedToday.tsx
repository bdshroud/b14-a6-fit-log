'use client'
import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/type/workoutType';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

interface MarkAsSavedProps{
    workout: IWorkout;
}

const MarkAsSavedToday = ({workout}:MarkAsSavedProps) => {
    const { markTodayAsDone } = useContext(WorkoutContext);

    const handleDone = () => {
        markTodayAsDone(workout);
        toast.success('Marked as done');
    }

    return (
        <button
            type="button"
            onClick={handleDone}
            className="flex items-center justify-center gap-1 w-full sm:w-auto rounded-4xl cursor-pointer bg-[#C2F800] px-4 py-2 text-xs md:text-sm font-bold text-black">
            <FiCheck className="flex text-lg" /> Mark as Done
        </button>
    );
};

export default MarkAsSavedToday;
