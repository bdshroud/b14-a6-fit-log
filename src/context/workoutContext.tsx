'use client';

import { IWorkout } from '@/type/workoutType';
import React, {
    createContext,
    useEffect,
    useState,
} from 'react';

interface IWorkoutContext {
    addWorkout: IWorkout[];
    addSave: IWorkout[];

    activeTab: 'today' | 'saved';
    setActiveTab: React.Dispatch<
        React.SetStateAction<'today' | 'saved'>
    >;

    addToToday: (workout: IWorkout) => boolean;
    saveForLater: (workout: IWorkout) => boolean;

    removeFromToday: (workout: IWorkout) => void;
    removeFromSaved: (workout: IWorkout) => void;

    markTodayAsDone: (workout: IWorkout) => void;
}

export const WorkoutContext = createContext<IWorkoutContext>({
    addWorkout: [],
    addSave: [],

    activeTab: 'today',
    setActiveTab: () => {},

    addToToday: () => false,
    saveForLater: () => false,

    removeFromToday: () => {},
    removeFromSaved: () => {},

    markTodayAsDone: () => {},
});

const WorkoutProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [addWorkout, setAddWorkout] = useState<IWorkout[]>([]);
    const [addSave, setAddSave] = useState<IWorkout[]>([]);

    const [activeTab, setActiveTab] =
        useState<'today' | 'saved'>('today');

    const [hydrated, setHydrated] = useState(false);

    // Load localStorage
    useEffect(() => {
        try {
            const savedPlan = localStorage.getItem('fitlog-plan');
            const savedItems = localStorage.getItem('fitlog-saved');

            if (savedPlan) {
                setAddWorkout(JSON.parse(savedPlan));
            }

            if (savedItems) {
                setAddSave(JSON.parse(savedItems));
            }
        } catch (error) {
            console.error(
                'Failed to load FitLog data:',
                error
            );
        } finally {
            setHydrated(true);
        }
    }, []);

    // Save today's plan
    useEffect(() => {
        if (!hydrated) return;

        localStorage.setItem(
            'fitlog-plan',
            JSON.stringify(addWorkout)
        );
    }, [addWorkout, hydrated]);

    // Save saved workouts
    useEffect(() => {
        if (!hydrated) return;

        localStorage.setItem(
            'fitlog-saved',
            JSON.stringify(addSave)
        );
    }, [addSave, hydrated]);

    // ADD TO TODAY'S PLAN
    const addToToday = (workout: IWorkout) => {
        if (addWorkout.some((item) => item.id === workout.id)) {
            return false;
        }

        if (addWorkout.length >= 5) {
            return false;
        }

        setAddWorkout((current) => [
            ...current,
            workout,
        ]);

        return true;
    };

    // SAVE FOR LATER
    const saveForLater = (workout: IWorkout) => {
        if (addSave.some((item) => item.id === workout.id)) {
            return false;
        }

        setAddSave((current) => [
            ...current,
            workout,
        ]);

        return true;
    };

    // REMOVE FROM PLAN
    const removeFromToday = (workout: IWorkout) => {
        setAddWorkout((current) =>
            current.filter(
                (item) => item.id !== workout.id
            )
        );
    };

    // REMOVE FROM SAVED
    const removeFromSaved = (workout: IWorkout) => {
        setAddSave((current) =>
            current.filter(
                (item) => item.id !== workout.id
            )
        );
    };

    // MARK AS DONE
    const markTodayAsDone = (workout: IWorkout) => {
        removeFromToday(workout);
    };

    return (
        <WorkoutContext.Provider
            value={{
                addWorkout,
                addSave,

                activeTab,
                setActiveTab,

                addToToday,
                saveForLater,

                removeFromToday,
                removeFromSaved,

                markTodayAsDone,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;