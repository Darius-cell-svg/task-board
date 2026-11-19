import type { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <li
      style={{
        padding: '8px 12px',
        margin: '6px 0',
        borderRadius: '6px',
        background: task.isCompleted ? '#e8f5e9' : '#fff',
        border: '1px solid #ddd',
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        color: task.isCompleted ? '#888' : '#000',
      }}
    >
      {task.title}
      {task.isCompleted && <span style={{ marginLeft: 8, color: '#2e7d32' }}>✓</span>}
    </li>
  );
}