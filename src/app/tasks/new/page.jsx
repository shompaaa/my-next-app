'use client'
import { newTaskAction } from "@/lib/actions";
import { FieldError } from "@heroui/react";
import {
  Button,
  Input,
  Label,
  Modal,
  TextField,
  ListBox,
  Select,
} from "@heroui/react";
const NewTask = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-bold text-center py-2">Add a new task</h2>
      <div className="w-1/2 mx-auto">
        <form action={newTaskAction} className="flex flex-col gap-4">
          <TextField
            isRequired
            minLength={5}
            validate={(value)=>{
                if(value.length < 5){
                    return "Title must be 5 characters or longer!"
                }
            }}
            className="w-full"
            name="title"
            type="text"
            variant="secondary"
          >
            <Label>Title</Label>
            <Input placeholder="Enter your task title" />
          <FieldError></FieldError>
          </TextField>
          <TextField
            className="w-full"
            name="description"
            type="text"
            variant="secondary"
          >
            <Label>Description</Label>
            <Input placeholder="Enter your task description" />
          </TextField>
          <Select
            name="priority"
            className="w-[256px]"
            placeholder="Select one"
          >
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low" textValue="Low">
                  Low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="Medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="high" textValue="High">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <Select name="status" className="w-[256px]" placeholder="Select one">
            <Label>Status</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="pending" textValue="Pending">
                  Pending
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="in-progress" textValue="In Progress">
                  In Progress
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="completed" textValue="Completed">
                  Completed
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <TextField className="w-full" name="assignedTo" variant="secondary">
            <Label>Assigned To</Label>
            <Input placeholder="Task Assigned To" />
          </TextField>

          <Modal.Footer>
            <Button variant="secondary">Cancel</Button>
            <Button type="submit">Submit Task</Button>
          </Modal.Footer>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
