import React, { FC } from 'react';
import style from './results.module.scss';
import Table from '../../commonComponents/table/table';
import type { typeResults } from '../../helpers/types/types';
import Button from '../../commonComponents/button/button';

const Results: FC<typeResults> = ({ showResults, results, handleShowResults }) => {
  results.sort((a, b) => a.time - b.time).splice(10);

  return (
    <div className={`${style.results} ${showResults && style.active}`} data-testid="results">
      <Button handleClick={handleShowResults} className="cancelResultsOptions" label="X" />
      <h5 className={style.heading}>Results</h5>
      <Table tableData={results} />
    </div>
  );
};

export default Results;
