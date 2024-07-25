import {useMemo} from "react";

const useSortedTasks = (tasks, sort) => {
    return useMemo(() => {
        if (sort) {
            return [...tasks].sort((a, b) => {
                if (typeof a[sort] === 'string' && typeof b[sort] === 'string') {
                    return a[sort].localeCompare(b[sort]);
                } else if (typeof a[sort] === 'number' && typeof b[sort] === 'number') {
                    return b[sort] - a[sort];
                } else {
                    return 0;
                }
            });
        }
        return tasks;
    }, [tasks, sort]);
}
export const useTasks = (tasks,sort,query) => {
    const sortedTasks = useSortedTasks(tasks,sort);

    return useMemo(()=>{
        return sortedTasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()));
    },[query,sortedTasks]);
}