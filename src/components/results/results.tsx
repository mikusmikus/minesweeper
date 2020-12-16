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
      {results.length > 0 ? (
        <>
          <h5 className={style.heading}>RESULTS</h5>
          <Table tableData={results} />
        </>
      ) : (
        <h5 className={style.heading}>Results empty...</h5>
      )}
    </div>
  );
};

export default Results;
