import * as React from "react";

import { RootState } from '../../../store';
import { counterModels, counterActions, counterSelectors } from '../';
import Counter from "./counter";


export default (props:{name:string}) => (
    <React.Fragment>
        <Counter name={props.name} />
    </React.Fragment>
    );
      