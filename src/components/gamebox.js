import React from 'react';

import Inputbox from './inputbox';
import Notifier from './notifier';
import Numberholder from './numberholder';
import Guessbutton from './guessbutton';
import Counter from './counter';

export default class Gamebox extends React.Component {
   
        render() {
        return (
            <div className='containerThree'>

                <Notifier />
                <Inputbox />
                <Guessbutton />
                <Counter />
                <Numberholder />
               
            </div>

        
        );
    }
}
