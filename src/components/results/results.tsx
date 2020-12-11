import React, { FC } from 'react';
import style from './results.module.scss';

type Props = {
  showResults: boolean;
};

const Results: FC<Props> = ({ showResults }) => {

  return (
    <div className={`${style.results} ${showResults && style.active}`}>
      <h5 className={style.heading}>Results</h5>
      <table className={style.table}>
        <thead>
          <tr className={style.tableTh}>
            <th>#</th>
            <th>name</th>
            <th>score</th>
            <th>speed level</th>
            <th>grid size</th>
          </tr>
        </thead>
        <tbody>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          <tr className={style.tableTr}>
            <td>1</td>
            <td>janios</td>
            <td>22</td>
            <td>44</td>
            <td>42</td>
          </tr>
          {/* {results.map(({ id, name, score, speedLevel, gridSize }, index) => ( */}
          {/* <tr key={id} className={style.resultTr}>
            <td>{index + 1}</td>
            <td>{name.substring(0, 12)}</td>
            <td>{score}</td>
            <td>{speedLevel}</td>
            <td>{gridSize}</td>
          </tr> */}
          {/* ))} */}
        </tbody>
      </table>
      {/* <button type="button" className={style.button}>
          BACK TO GAME
        </button>
        <button type="button" className={style.button2}>
          X
        </button> */}
    </div>
  );
};

export default Results;
