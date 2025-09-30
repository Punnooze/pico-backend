export interface Task{
    id?: string;
    title: string;
    description?: string;
    status: string;
    boardId: string;
    dueDate: Date;
    createdAt: Date;
    priority: string;
    assignedTo?: string;
    relation?: TaskRelation;
    type: string;
}

export interface TaskRelation {
    relation: string;
    relationId: string;
}