'use client'
import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/type/workoutType';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { FiCheck } from 'react-icons/fi';

interface MarkAsSavedProps{
    workout: IWorkout;
}

const MarkAsSaved = ({workout}:MarkAsSavedProps) => {
    const { removeFromSaved } = useContext(WorkoutContext);

    const handleRemove = () => {
        removeFromSaved(workout);
        toast.success('Removed from saved');
    }

    return (
        <button
            type="button"
            onClick={handleRemove}
            className="flex items-center justify-center gap-1 w-full sm:w-auto rounded-4xl cursor-pointer border border-gray-600 px-4 py-2 text-xs md:text-sm font-semibold">
            <FiCheck className="flex text-lg" /> Remove
        </button>
    );
};

export default MarkAsSaved;
