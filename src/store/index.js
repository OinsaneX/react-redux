import {createStore} from 'redux';

const INITIAL_STATE = {
    data:[{
        id:1,
        title: 'Hello World',
        description: 'This is a simple note'
    },
    {
        id:2,
        title: 'That is insanex',
        description: 'This not is a simple note'
    },{
        id:3,
        title: 'Unlimited falses',
        description: 'This is a ultimate Task but yds a weqw csa dsad wqe asdou none scnpq shhw coiasiwefs lorem asdjbasjdhv qw euiqw kd qwiu gqwkjm ekqwvewejkqbouivn sah'
    }]
}

function tasks(state=INITIAL_STATE,action) {
    switch(action.type) {
        case 'ADD_TASK':
            return {...state, data: [...state.data, action.newTask]};

        case "DELETE_TASK":
               {
                  var newTasks = state.data
                  
                  newTasks.splice(action.pos,1)
                  return {...state, data: [...newTasks]}
               }
        default:
            return state;

    }
    
}

const store = createStore(tasks)

export default store