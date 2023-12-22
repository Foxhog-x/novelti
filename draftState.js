 

const baseState = [
  {
    todo: 'Learn typescript',
    done: true,
  },
  {
    todo: 'Try immer',
    done: true,
  },
]
const newUser = {
  id: "1",
  ...baseState[0], // Spread the payload (empty object or other properties)
};

console.log(newUser)
//   const nextstate = (baseState.slice() )

//    nextstate[1] = {
//     ...nextstate[1], todo: "FUCKREDUX" ,done: false
//    }

const initialState = {
    usersData : [ {a: 1, b: 2, c:3},{
        a:4, b:5, c:6
    },
   ],
   newuserdata: [{
    a:4, b:5, c:7
},]
  }



 
console.log(initialState)
 
const newobj = [...initialState.usersData]
   
 const xnewobj = {...newobj[0], a:6, b:9, c:1}
 console.log(xnewobj)
 console.log(newobj)