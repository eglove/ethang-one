import { formatList, sortStringArray } from '@ethang/util-typescript';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../store/global-store';
import styles from './build-run-projects.module.css';

export const BuildRunProjectsLayout = observer((): JSX.Element => {
  const state = useContext(GlobalContext);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const addRemoveProject = (project: string): void => {
    if (selectedProjects.includes(project)) {
      setSelectedProjects(selectedProjects_ => {
        return selectedProjects_.filter(value => {
          return value !== project;
        });
      });
    } else {
      setSelectedProjects(selectedProjects_ => {
        return sortStringArray([...selectedProjects_, project]);
      });
    }
  };

  const runProjects = (target: string): void => {
    state.socket.emit('run-projects', {
      projects: selectedProjects,
      target,
    });
  };

  useEffect(() => {
    if (
      typeof state.socket !== 'undefined' &&
      typeof state.nxProjects === 'undefined'
    ) {
      state.socket?.emit('nx-projects');
    }
  }, [state.nxProjects, state.socket]);

  useEffect(() => {
    state.socket?.emit('get-project-targets', selectedProjects);
  }, [selectedProjects, state.socket]);

  return (
    <>
      <div className={styles.FlexContainer}>
        {state.nxProjects?.map(project => {
          return (
            <label key={project} htmlFor={project}>
              <input
                id={project}
                name={project}
                type="checkbox"
                onClick={(): void => {
                  addRemoveProject(project);
                }}
                onKeyPress={(): void => {
                  addRemoveProject(project);
                }}
              />
              {project}
            </label>
          );
        })}
      </div>
      <div className={styles.CategoryHeader}>Selected Projects:</div>
      <div>{formatList(selectedProjects)}</div>
      <div className={styles.CategoryHeader}>Select a Target:</div>
      <div className={styles.FlexContainer}>
        {state.projectTargets?.map(target => {
          return (
            <button
              key={target}
              type="button"
              onClick={(): void => {
                runProjects(target);
              }}
            >
              {target}
            </button>
          );
        })}
      </div>
      <div className={styles.CategoryHeader}>Terminal:</div>
      {state.terminalMessages?.map(message => {
        return <div key={message}>{message}</div>;
      })}
    </>
  );
});
