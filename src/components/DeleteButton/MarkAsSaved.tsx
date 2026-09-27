'use client';

import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/type/workoutType';

interface MarkAsSavedProps {
    workout: IWorkout;
}

const MarkAsSaved = ({
    workout,
}: MarkAsSavedProps) => {
    const { removeFromSaved } = useContext(WorkoutContext);

    const handleRemove = () => {
        removeFromSaved(workout);
        toast.success('Removed from saved');
    };

    return (
        <button
            type="button"
            onClick={handleRemove}
            className="fitlog-btn-secondary w-full sm:w-auto"
        >
            <FiCheck size={18} />
            Remove
        </button>
    );
};

export default MarkAsSaved;