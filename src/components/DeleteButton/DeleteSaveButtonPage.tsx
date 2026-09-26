'use client'
import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/type/workoutType';
import React, { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface DeleteSaveButtonPageProps{
    workout: IWorkout;
}

const DeleteSaveButtonPage = ({workout}:DeleteSaveButtonPageProps) => {
    const { removeFromSaved } = useContext(WorkoutContext);

    const handleDelete = () => {
        removeFromSaved(workout);
        toast.success('Removed from saved');
    }

    return (
        <button
            type="button"
            onClick={handleDelete}
            aria-label={`Remove ${workout.name} from saved`}
            className="flex text-lg cursor-pointer">
            <RxCross2/>
        </button>
    );
};

export default DeleteSaveButtonPage;
