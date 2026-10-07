import { AddTask } from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Tasks",
  description: "...",
};

const TasksPage = () => {
  const tasks = getTasks();
  return (
    <div className="mt-5 text-center">
      <AddTask createATask={createATask}></AddTask>
      <Link href="/tasks/new">
      <Button variant="secondary">Add Task</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-11/12 mx-auto pt-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
