import React, { useState } from 'react'
// import { useForm } from 'react-hook-form';
// import { HiEmojiHappy } from 'react-icons/hi';
import { MdAssignment } from 'react-icons/md';
import { format, parseISO, isBefore } from 'date-fns';
import {
  // ptBR,
  enUS
} from 'date-fns/locale';
//------------------------------------------------------------------------------
import { Container } from './styles'
import Button from '../../Buttons'

function TaskDetails({
  listState,
  load,
  setEditTask, setToggleContainer,
  task, toggleContainer,
  user_id,
}) {
  // const { register, handleSubmit } = useForm();

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
  //----------------------------------------------------------------------------
  return (
    <Container toggleContainer={toggleContainer}>
      <header className="details-header-div">
        <div className="details-title-div">
          <MdAssignment size={20} color={'#334466'}/>
          <strong className="details-title-strong">{task && task.name}</strong>
        </div>
        {listState === 1 && (
          <div className="sub-tasks-buttons-div">
            <label className="received-task-label">
              To Update Received Tasks, please download the mobile app.
            </label>
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
            <label className="received-task-label">
              To Update Received Tasks, please download the mobile app.
            </label>
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
            <label className="received-task-label">
              To Update Received Tasks, please download the mobile app.
            </label>
            <div className="back-button">
              <Button
                type="03"
                onClick={() => setToggleContainer(1)}
              >Back</Button>
            </div>
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
              disabled
              value={task.task_attributes[0]}>
              {selectArray.map(s =>
                <option key={s.id} className="list-option" value={s.id}>{s.tag}</option>
              )}
            </select>
          </div>

          <strong className="details-strong">Comments:</strong>
          <pre className="details-description-pre">
            {task && task.description}
          </pre>
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
  )
}

export default TaskDetails
