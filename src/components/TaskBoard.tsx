import type { Task } from '../types';
import { TaskItem } from './TaskItem';

interface TaskBoardProps {
  tasks: Task[];
}

export function TaskBoard({ tasks }: TaskBoardProps) {
  return (
    <section>
      <h2>Список задач</h2>

      {tasks.length === 0 ? (
        <p style={{ color: '#999', fontStyle: 'italic' }}>Задач нет</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  );
}