import React, { FC } from 'react';
import style from './results.module.scss';
import Table from '../../commonComponents/table/table';
import type { typeResults } from '../../helpers/types/types';

const Results: FC<typeResults> = ({ showResults, results }) => {
  results.sort((a, b) => a.time - b.time).splice(10);

  return (
    <div className={`${style.results} ${showResults && style.active}`} data-testid="results">
      <h5 className={style.heading}>Results</h5>
      <Table tableData={results} />
    </div>
  );
};

export default Results;
