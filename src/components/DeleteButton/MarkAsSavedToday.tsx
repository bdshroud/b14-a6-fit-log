'use client';

import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/type/workoutType';

interface MarkAsDoneProps {
    workout: IWorkout;
}

const MarkAsSavedToday = ({
    workout,
}: MarkAsDoneProps) => {
    const { markTodayAsDone } = useContext(WorkoutContext);

    const handleDone = () => {
        markTodayAsDone(workout);
        toast.success('Marked as done');
    };

    return (
        <button
            type="button"
            onClick={handleDone}
            className="fitlog-btn-primary w-full sm:w-auto"
        >
            <FiCheck size={18} />
            Mark as Done
        </button>
    );
};

export default MarkAsSavedToday;