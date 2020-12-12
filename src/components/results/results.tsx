import React, { FC } from 'react';
import style from './results.module.scss';
import { timeConvertor } from '../../helpers/helperFunctions';
import type { typeResults } from '../../helpers/types';

const Results: FC<typeResults> = ({ showResults, results }) => {
  results.sort((a, b) => a.time - b.time).splice(10);

  return (
    <div className={`${style.results} ${showResults && style.active}`}>
      <h5 className={style.heading}>Results</h5>
      <table className={style.table}>
        <thead>
          <tr className={style.tableTh}>
            <th>#</th>
            <th>name</th>
            <th>time</th>
            <th>grid size</th>
            <th>difficulty</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ id, name, time, size, difficulty }, index) => (
            <tr key={id} className={style.tableTr}>
              <td>{index + 1}</td>
              <td>{name.substring(0, 12)}</td>
              <td>{timeConvertor(time)}</td>
              <td>{size}</td>
              <td>{difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
