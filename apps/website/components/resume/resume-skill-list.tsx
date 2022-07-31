import styles from './resume-layout.module.css';

type ResumeSkillListProperties = {
  skills: string[];
};

export function ResumeSkillList({
  skills,
}: ResumeSkillListProperties): JSX.Element {
  return (
    <ul className={styles.SkillList}>
      {skills.map(skill => {
        return <li key={skill}>{skill}</li>;
      })}
    </ul>
  );
}
