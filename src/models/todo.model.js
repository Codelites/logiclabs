// import dependencies

import { Schema, model } from 'mongoose';
import pkg from 'joi';
const { string } = pkg;

// define handler
const TodoSchema = new Schema( {
    id: {
       type: String 
    },

    title: {
        type: String,
        required: true
    
    },
    body: {
        type: String,
        default: 'your  name' 
        
        

    },
    createdAt: {
        type: Date,
        default: Date.now,
     },
     
     
        
    


    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = model("Todo", TodoSchema);

// export handler
export default Todo;