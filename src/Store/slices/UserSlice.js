import{createSlice} from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem('users')) || [];

const userSlice = createSlice({
  name:'user',
  id:1,
  initialState,
  reducers:{
    addUser(state,action){
      state.push(action.payload);
      localStorage.setItem('users', JSON.stringify(state));

    },
    removeUser(state, action) {
      // const filteredUsers = state.filter(user => user.id !== action.payload);
      // localStorage.setItem('users', JSON.stringify(filteredUsers));
      // return filteredUsers;
      state.splice(action.payload,1);
      // const userIdToRemove = action.payload;
      // const filteredUsers = state.filter(user => user.id !== userIdToRemove);
      // localStorage.setItem('users', JSON.stringify(filteredUsers));
      // return filteredUsers;

console.log(action.payload)   

},
    deleteUser(state,action){
    return [];
    }
  },
})
// console.log(userSlice.actions.addUser());
export default userSlice;
export const {addUser,deleteUser,removeUser} = userSlice.actions;

