import React, { useState } from 'react'
import UserTables from '../tables/UserTables';
import AddUserForm from '../forms/AddUserForm';
import EditUserForm from '../forms/EditUserForm';

const HomeUser = () => {
const usersLocalStorage="users";
    const getItem = (itemName)=>{
return localStorage.getItem(itemName);
    }

    const setItem=(itemName, newValue)=>{
        localStorage.setItem(itemName, newValue);
    }
    
    const UserData = getItem(usersLocalStorage);

    const [users, setUsers] = useState(UserData)

    const addUser = user => {
        let temp = [user];
        if(users){
            user.id = users.length + 1;
            temp = [...users, user];
        }
        setItem(usersLocalStorage, temp);
        setUsers(temp)
    }

    const deleteUser = id => {
        
        let temp = users.filter(user => user.id !== id);
        setItem(usersLocalStorage, temp);
        setUsers(temp);
    }

    //user editing options
    const [editing, setEditing] = useState(false)

    const initialFormState = { id: null, name: '', username: ''}

    const [currentUser, setCuttentUser] = useState(initialFormState)

    const editRow = user => {
        setEditing(true)

        setCuttentUser({ id: user.id, name: user.name, username: user.username })
    }

    const updateUser = (id, updateUser) => {
        setEditing(false)
        let temp = users.map(user => (user.id === id ? updateUser: user));
        setItem(usersLocalStorage, temp);
        setUsers(temp)
    }

    return (
        <div className="container mt-3">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row ">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                            <div>
                                <h2>Add user</h2>
                                <AddUserForm addUser={addUser} />
                            </div>
                        )}
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <UserTables users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
            </div>
        </div>
    )
}

export default HomeUser;