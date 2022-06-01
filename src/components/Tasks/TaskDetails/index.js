import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { HiEmojiHappy } from 'react-icons/hi';
import { MdAssignment } from 'react-icons/md';
import { toast } from 'react-toastify';
import { format, parseISO, isBefore } from 'date-fns';
import {
  // ptBR,
  enUS
} from 'date-fns/locale';
import Button from '../../Buttons'
//------------------------------------------------------------------------------
import { Container } from './styles'
import api from '~/services/api';
//------------------------------------------------------------------------------
function TaskDetails({
  listState,
  load,
  setEditTask, setToggleContainer,
  task, toggleContainer,
  user_id,
}) {
  const [ toggleEvaluate, setToggleEvaluate ] = useState();
  const [ scoreValue, setScoreValue] = useState();

  const { register, handleSubmit } = useForm();

  const selectArray = [
    { id: 1, tag: 'low' },
    { id: 2, tag: 'medium' },
    { id: 3, tag: 'high' },
    { id: 4, tag: '' },
  ]

  const formattedDate = fdate =>
  fdate == null
    ? ''
    : format(parseISO(fdate), "MMM'/'dd'/'yyyy H:mm", {
      locale:
      enUS
      // ptBR
    });

  async function handleSelect(e, id, taskAttributes, radioType) {
    let editedTaskAttributes = []
    if(radioType === 'Prior') {
      editedTaskAttributes = [
        e.target.value,
        taskAttributes[1],
        taskAttributes[2],
      ]
    } else {
      editedTaskAttributes = [
        taskAttributes[0],
        e.target.value,
        taskAttributes[2],
      ]
    }

    await api.put(`tasks/${id}`, {
      task_attributes: editedTaskAttributes
    });

    load('', user_id, 1);
  }

  async function handleEditTask(task) {
    setEditTask(true)
  }

  function handleCancelConfirm() {
    let test = window.confirm("Confirm Cancel Task?")
    if(test === true) {
      handleCancelTask(task)
    }
  }

  async function handleCancelTask(task) {
    try {
      await api.put(`tasks/${task.id}/cancel`, {
        status: {
          status: 4,
          comment: `Canceled on ${new Date()}`,
        },
      });

      load('', user_id, 1);
      toast.success('Task Canceled');
    }
    catch(error) {
      toast.error('Error: Task was not canceled');
    }
  }

  async function handleReviveTask(task) {
    await api.put(`tasks/${task.id}`, {
      initiated_at: null,
      canceled_at: null,
      status: {
        status: 1,
        comment: `Restored on ${new Date()}`,
      },
    });
    load('', user_id, 3);
    toast.success('Tarefa ressucitada com sucesso!');
  }

  async function handleDestroyTask() {
    await api.delete(`tasks/${task.id}`);
    load('', user_id, 3);
    toast.success('Tarefa apagada com sucesso!');
  }

  function handleEvaluateTask() {
    setToggleEvaluate(!toggleEvaluate)
    setScoreValue(task.score || null)
    // console.log(toggleEvaluate)
  }

  const onSubmit = ({ score }) => {
    api.put(`tasks/${task.id}`, {
      score: score,
    })
  }
  //----------------------------------------------------------------------------
  return (
    <>
    <Container toggleContainer={toggleContainer}>
      <header className="details-header-div">
        <div className="details-title-div">
          <MdAssignment size={20} color={'#34A0A4'}/>
          <strong className="details-title-strong">{task && task.name}</strong>
        </div>
        {listState === 1 && (
          <div className="sub-tasks-buttons-div">
            <Button
              type="02"
              onClick={() => handleEditTask(task)}
            >Edit</Button>
            <Button
              type="03"
              onClick={() => handleCancelConfirm()}
            >Cancel</Button>
            <div className="back-button">
              <Button
                type="03"
                onClick={() => setToggleContainer(1)}
              >Back</Button>
            </div>
          </div>
        )}
        {listState === 2 && (
          <div className="sub-tasks-buttons-div">
            <Button
              type="02"
              onClick={() => handleEvaluateTask(task)}
            >Score</Button>
            <Button
              type="03"
              onClick={() => handleDestroyTask(task)}
            >Delete</Button>
            <div className="back-button">
              <Button
                type="03"
                onClick={() => setToggleContainer(1)}
              >Back</Button>
            </div>
          </div>
        )}
        {listState === 3 && (
          <div className="sub-tasks-buttons-div">
            <Button
              type="02"
              onClick={() => handleReviveTask(task)}
            >Recover</Button>
            <Button
              type="03"
              onClick={() => handleDestroyTask(task)}
            >Delete</Button>
            <div className="back-button">
              <Button
                type="03"
                onClick={() => setToggleContainer(1)}
              >Back</Button>
            </div>
          </div>
        )}
        {listState === 4 && (
          <div className="sub-tasks-buttons-div">
            <HiEmojiHappy size={24} color={'#ccc'}/>
          </div>
        )}
      </header>

      <div className="details-body">
        <div className="sub-tasks-div">
          <strong className="details-strong">Sub-items</strong>
          <div className="sub-tasks-list-div">
            { task
              ? ( task.sub_task_list.map((s, index) => (
                <>
                  <div className="sub-tasks-checkbox-div" key={index}>
                    <label className="sub-tasks-checkbox-label" key={s.description}>
                      <input
                        className="sub-tasks-checkbox-input"
                        type="checkbox"
                        // defaultChecked={s.complete}
                        checked={s.complete}
                        disabled={true}
                      />
                      <span className="sub-tasks-checkbox-span">{s.description}</span>
                    </label>
                    <span className="sub-task-checkbox-weige-span">Weige:
                      { s.weige_percentage
                        ? ` ${JSON.stringify(s.weige_percentage).replace(".",",")}%`
                        : ' n/a'
                      }
                    </span>
                  </div>
                  <div className="sub-task-border-bottom"></div>
                </>
              )))
              : null
            }
          </div>

          <div className="details-mid-div">
            <strong className="details-strong">Confirmation with photo?</strong>
            { task.confirm_photo
              ? <label className="details-label">Yes</label>
              : <label className="details-label">No</label>
            }
          </div>

          <div className="details-mid-div">
            <strong className="details-strong">Sent:</strong>
            <label className="details-label">{formattedDate(task.start_date)}</label>
          </div>

          <div className="details-mid-div">
            <strong className="details-strong">Started:</strong>
            { task.initiated_at
              ? (
                <label className="duedate green">{formattedDate(task.initiated_at)}</label>
              )
              : (
                <label className="details-label">pending</label>
                )
            }
          </div>

          <div className="details-mid-div">
            <strong className="details-strong">Due:</strong>
            { isBefore(parseISO(task.due_date), new Date())
              ? (
                <label className="duedate red">{formattedDate(task.due_date)}</label>
              )
              : (
                <label className="duedate green">{formattedDate(task.due_date)}</label>
              )
            }
          </div>

          {/* Task selects */}
          <div className="details-mid-div">
            <strong className="details-strong">Priority:</strong>
            <select
              className={`list-select-${task.task_attributes[0]}`}
              onChange={e => handleSelect(e, task.id, task.task_attributes, 'Prior')}
              value={task.task_attributes[0]}
            >
              {selectArray.map(s =>
                <option key={s.id} className="list-option" value={s.id}>{s.tag}</option>
              )}
            </select>
          </div>

          <strong className="details-strong">Comments:</strong>
          <pre className="details-description-pre">
            {task && task.description}
          </pre>

          { toggleEvaluate && (
            <form className="score-div" onSubmit={handleSubmit(onSubmit)}>
              <strong className="task-details-strong">Score</strong>
              <label className="task-details-label">Comment</label>
              <textarea
                className="task-details-comment-input"
                name="score-comment"
                type="text"
                ref={register}
              />
              {/* <div className="score-div"> */}
                <label className="task-details-label">{'Nota (0-10):'}</label>
                <div className="score-date-div">
                  <input
                    className="score-input"
                    name="score"
                    type="number"
                    min="0"
                    max="10"
                    value={scoreValue}
                    onChange={e => setScoreValue(e.target.value)}
                    ref={register}
                  />
                  { scoreValue
                    ? (
                      <div>Avaliada 14/dez/2020 14:00</div>
                    )
                    : null
                  }

                </div>
              {/* </div> */}
              <button className="task-button send-score">Send</button>
            </form>
          )}
          { task.signature &&
            <div className="task-details-img-div">
              <strong className="details-strong">Confirmation Photo</strong>
              <img
                className="task-details-img"
                src={task.signature.url}
                alt="confirm-img"
              />

            </div>
          }
        </div>
      </div>
    </Container>

    </>
  )
}

export default TaskDetails
