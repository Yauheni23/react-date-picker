export const loadTasksFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('tasks');
        if (serializedState === null){
            return [];
        }
        const tasks = JSON.parse(serializedState)
        return tasks.map((element: any) => {
            return {
                ...element,
                startDate: new Date(element.startDate),
                endDate: new Date(element.endDate),
            }
        });
    } catch ( err ) {
        return [];
    }
}

export const saveTasksInLocalStorage = (tasks: any) => {
    try {
        const serializedState = JSON.stringify(tasks);
        localStorage.setItem('tasks', serializedState);
    } catch (err) {
        console.log(err)
    }
}