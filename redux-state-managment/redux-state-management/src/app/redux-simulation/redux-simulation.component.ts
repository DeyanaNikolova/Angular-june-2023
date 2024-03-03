import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-simulation',
  templateUrl: './redux-simulation.component.html',
  styleUrls: ['./redux-simulation.component.css']
})
export class ReduxSimulationComponent implements OnInit {
  ngOnInit(): void {
    this.demoTest();
  }
  demoTest() {
    // Redux => Design Pattern => Single Source of Truth - State
    // How we change State?
    // we do not mutate it directly, we dispatch an Action
    // Reducer captures the Action amd does something

    // **Synchronous simulation of redux patttern
    // type
    interface AppState {
      str: string;
      obj: any;
      bool: boolean;
    }

    // default state
    const initialState: AppState = {
      str: '',
      obj: null,
      bool: false,
    };

    // actions
    const EVENT_ONE = 'EVENT_1';
    const EVENT_TWO = 'EVENT_2';
    const EVENT_THREE = 'EVENT_3';

    // reducer
    function reducer(state: AppState, action: any) {
      switch (action.type) {
        case EVENT_ONE:
          return { ...state, str: action.value };
        case EVENT_TWO:
          return { ...state, obj: action.value };
        case EVENT_THREE:
          return { ...state, bool: action.value };
        default:
          return state;
      }
    }

    // combine actiuons/events with reducer and initial state
    const actionsCollection = [
      { type: EVENT_ONE, value: 'test123' },
      { type: EVENT_TWO, value: { name: 'Pesho', age: 21 } },
      { type: EVENT_THREE, value: true },
    ];
    
    // simulate dispatching action
    const result = actionsCollection.reduce(reducer, initialState);
    // console.log(result);
  }
}
