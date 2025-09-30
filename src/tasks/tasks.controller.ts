import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/task.dto';
import { Task } from './interfaces/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() taskDto: TaskDto) {
    return this.tasksService.createTask(taskDto);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id' ) id) : Promise<Task | null> {
    return this.tasksService.getTaskById(id);
  }

  @Put(':id')
  updateTask(@Body() updatedTask: TaskDto, @Param('id') id): Promise<Task | null> {
    return this.tasksService.updateTask(id, updatedTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id) : Promise<Task | null> {
    return this.tasksService.deleteTask(id);
  }
}
