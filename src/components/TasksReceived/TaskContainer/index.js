import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
// -----------------------------------------------------------------------------
import { Container } from './styles';
import EmptyContainer from '~/components/_EmptyContainer'
import TasksEdit from '../../TasksEdit';
import TaskList from '../TaskList'
import TaskDetails from '../TaskDetails';
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function TaskContainer({ setHeaderMenu }) {
  const user_id = useSelector(state => state.user.profile.id)
  const worker_id = useSelector(state => state.user.profile.id)

  const [defaultTasks, setDefaultTasks] = useState([]);
  const [listState, setListState] = useState(1);
  const [selectedTaskId, setSelectedTaskId] = useState();
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState();
  const [toggleContainer, setToggleContainer] = useState(1);

  let response = null

  useEffect(() => {
    load('', worker_id, 1);
  }, []);

  async function load(workerNameFilter, workerID, listState) {
    switch(listState) {
      case(1):
        response = await api.get(`tasks/unfinished`, {
          params: { workerID },
        });
        setTasks(response.data); setDefaultTasks(response.data);
        setTask(response.data[0]); setSelectedTaskId(response.data[0] && response.data[0].id);
        break
      case(2):
        response = await api.get(`tasks/finished`, {
          params: { workerID }
        })
        setTasks(response.data); setDefaultTasks(response.data);
        setTask(response.data[0]); setSelectedTaskId(response.data[0] && response.data[0].id);
        break
      case(3):
        response = await api.get(`tasks/canceled`, {
          params: { workerID }
        })
        setTasks(response.data); setDefaultTasks(response.data);
        setTask(response.data[0]); setSelectedTaskId(response.data[0] && response.data[0].id);
        break
      default:
        response = await api.get(`tasks/unfinished`, {
          params: { workerID },
        });
        setTasks(response.data); setDefaultTasks(response.data);
        setTask(response.data[0]);
    }
  }

  async function handleTaskDetails(t) {
    setSelectedTaskId(t.id)
    let editedSubTaskList = t.sub_task_list;

    if (editedSubTaskList) {
      await editedSubTaskList.map((s) => {
        if(s.user_read === false) {
          s.user_read = true;
        }
        return s
      })
    }

    await api.put(`tasks/${t.id}`, {
      sub_task_list: editedSubTaskList,
    })
    setTask(t);
    setToggleContainer(2)
  }

  // ---------------------------------------------------------------------------
  return (
    <Container toggleContainer={toggleContainer}>
      { editTask
        ? (
          <TasksEdit
            load={load}
            task={task}
            setEditTask={setEditTask}
            worker_id={worker_id}
          />
        )
        : (
          <>
            <TaskList
              defaultTasks={defaultTasks}
              handleTaskDetails={handleTaskDetails}
              listState={listState}
              load={load}
              selectedTaskId={selectedTaskId}
              setHeaderMenu={setHeaderMenu}
              setListState={setListState}
              setSelectedTaskId={setSelectedTaskId}
              setTask={setTask}
              setTasks={setTasks}
              task={task}
              tasks={tasks}
              toggleContainer={toggleContainer}
              user_id={user_id}
            />

            { task
              ? (
                <TaskDetails
                  listState={listState}
                  load={load}
                  setEditTask={setEditTask}
                  setToggleContainer={setToggleContainer}
                  task={task}
                  toggleContainer={toggleContainer}
                  user_id={user_id}
                />
              )
              : (
                <EmptyContainer/>
              )
            }
          </>
        )
      }
    </Container>
  )
}
