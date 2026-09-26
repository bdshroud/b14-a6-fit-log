'use client';

import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/type/workoutType';
import { useContext } from 'react';
import { toast } from 'react-toastify';

interface SaveButtonProps {
    workout: IWorkout;
}

const SaveButton = ({ workout }: SaveButtonProps) => {
    const { addSave, saveForLater } = useContext(WorkoutContext);

    const alreadySaved = addSave.some(
        (item) => item.id === workout.id
    );

    const handleSave = () => {
        if (alreadySaved) {
            toast.info('This workout is already saved.');
            return;
        }

        const success = saveForLater(workout);

        if (success) {
            toast.success('Saved for later');
        }
    };

    return (
        <button
            type="button"
            onClick={handleSave}
            disabled={alreadySaved}
            className="w-full rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
            {alreadySaved ? 'Saved' : 'Save for later'}
        </button>
    );
};

export default SaveButton;