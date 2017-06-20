/**
 * Created by jim on 2017/6/19.
 */
import React from 'react';
import { view as Weather } from './weather/index';
import { view as CitySelector} from './citySelector/index';
import { view as Timer} from './timer/index';
const App = () => {
    return (
        <div>
            <Timer></Timer>
            <CitySelector></CitySelector>
            <Weather></Weather>
        </div>
    );
};


export default App;