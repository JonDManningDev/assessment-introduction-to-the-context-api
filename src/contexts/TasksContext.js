import { createContext } from "react";
export const TasksContext = createContext([{
    id: null,
    complete: false,
    content: ""
}]);