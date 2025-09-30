import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async createTask(taskDto: TaskDto): Promise<Task> {
    const newTask = new this.taskModel(taskDto);
    return newTask.save();
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.taskModel.find();
  }

  async getTaskById(id: string): Promise<Task | null> {
    return await this.taskModel.findOne({_id: id});
  }

  async updateTask(id: String, taskDto: TaskDto): Promise<Task | null> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(id, taskDto, {new: true});
    return updatedTask;
  }

  async deleteTask(id: String): Promise<Task | null>{
    const deleteTask = await this.taskModel.findOneAndDelete(id);
    return deleteTask;
  }
}
