import propTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

function Statistics({ stats, title }) {
  const statArray = stats.map(oneItem => (
    <li className={s.item} key={oneItem.id}>
      <span className={s.label}>{oneItem.label}</span>
      <span className={s.percentage}>{oneItem.percentage.toString()} %</span>
    </li>
  ));
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statArray}>{statArray}</ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: propTypes.array,
  title: propTypes.string,
};

export default Statistics;
