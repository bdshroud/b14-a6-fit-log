import WorkoutDetails from '@/components/shared/WorkoutDetails';
import { getData } from '@/lib/workoutData';
import { IWorkout } from '@/type/workoutType';
import { notFound } from 'next/navigation';

const WorkoutDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const workoutData: IWorkout[] = await getData();
    const workout = workoutData.find((work) => String(work.id) === String(id));

    if (!workout) {
        notFound();
    }

    return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsPage;
