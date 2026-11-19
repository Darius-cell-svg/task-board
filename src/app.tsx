import { TaskBoard } from './components/TaskBoard';
import type { Task } from './types';

const tasks: Task[] = [
  { id: 1, title: 'Изучить JSX и типизацию props', isCompleted: true },
  { id: 2, title: 'Разобраться с условным рендерингом', isCompleted: true },
  { id: 3, title: 'Сделать рендеринг списка через map()', isCompleted: false },
  { id: 4, title: 'Сдать практическое задание ', isCompleted: false },
];

export default function App() {
  return (
    <main style={{ maxWidth: 560, margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>TaskBoard</h1>
      <TaskBoard tasks={tasks} />

      <h2 style={{ marginTop: 32 }}>Пустой список (проверка пустого состояния)</h2>
      <TaskBoard tasks={[]} />
    </main>
  );
}