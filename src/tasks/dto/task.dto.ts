export class TaskDto {
  readonly title: String;
  readonly description: String;
  readonly status: String;
  readonly boardId: String;
  readonly dueDate: Date;
  readonly createdAt: Date;
  readonly priority: String;
  readonly assignedTo: String;
  readonly relation: TaskRelationDto;
  readonly type: String;
}

export class TaskRelationDto {
  readonly relation: String;
  readonly relationId: String;
}
