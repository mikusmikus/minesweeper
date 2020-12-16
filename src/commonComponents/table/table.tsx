import React, { FC } from 'react';
import style from './table.module.scss';
import { timeConvertor } from '../../helpers/helperFunctions/helperFunctions';
import type { TypeTable } from '../../helpers/types/types';

const Table: FC<TypeTable> = ({ tableData }) => {
  return (
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
        {tableData.map(({ id, name, time, size, difficulty, newResult }, index) => (
          <tr key={id} className={`${style.tableTr} ${newResult && style.newResult}`}> 
            <td>{index + 1}</td>
            <td>{name.substring(0, 12)}</td>
            <td>{timeConvertor(time)}</td>
            <td>{size}</td>
            <td>{difficulty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
