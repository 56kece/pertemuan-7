import './TaskList.css';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Card className="mb-3" key={index}>
          <Card.Body className="card-body">
            {/* Table header for columns */}
            <div className="header-row">
              <div>kegiatan</div>
              <div>prioritas</div>
              <div>Status</div>
              <div>aksi</div>
            </div>
            {/* Data row for task details */}
            <div className="data-row">
              <div>{task.name}</div>
              <div>{task.priority}</div>
              <div>{task.status}</div>
              <div className="action-buttons">
                <Button variant="outline-primary" onClick={() => showEditForm(task)}>Edit</Button>
                <Button variant="outline-danger" onClick={() => deleteTask(task.id)}>Hapus</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
