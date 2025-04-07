import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks',
  standalone: true
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: string[], query: string): string[] {
    if (!query) {
      return tasks; // Agar query bo‘sh bo‘lsa, barcha tasklarni qaytar
    }
    return tasks.filter(task => task.toLowerCase().includes(query.toLowerCase()));
  }
}