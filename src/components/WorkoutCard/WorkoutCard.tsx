<Link
    href={`/exercise/${workout.id}`}
    className="group block"
>
    <article className="fitlog-card">
        <div className="overflow-hidden">
            <Image
                src={workout.image}
                alt={workout.name}
                width={450}
                height={350}
                className="fitlog-card-image"
            />
        </div>

        <div className="space-y-4 p-5">

            <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((group) => (
                    <span
                        key={group}
                        className="fitlog-tag"
                    >
                        {group}
                    </span>
                ))}
            </div>

            <h2 className="fitlog-card-title">
                {workout.name}
            </h2>

            <p className="text-sm text-gray-400">
                {workout.equipment}
            </p>

            <div className="border-t border-gray-700" />

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span>
                    ⏱ {workout.duration} min
                </span>

                <span>
                    🔥 {workout.caloriesBurned} Kcal
                </span>

                <span>
                    ⭐ {workout.rating}
                </span>
            </div>

        </div>
    </article>
</Link>