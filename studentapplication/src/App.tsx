import { useState} from 'react';
import './App.css';
import { AppName, Student, Level } from './interfaces';
import { studentList, coursesList } from "./data";
import { DisplayData } from "./DisplayData";
function App({name}: AppName) {
const [student,setStudent] = useState<Student | null>(null);

const addStudent = () => {
  setStudent({
    name: 'Ibrahim',
    age:33,
    level:'postgraduate'
  })
}
  return (
    <div className="App">
     <h1>{name}</h1>
     <p>{student?.name} {student?.age} </p>
     {student?.level === Level.Undergraduate &&
        <p><b>Age: {student.age}</b></p>
      }
      
     <button onClick={addStudent}>Add</button>
     <h3>List of Students</h3>
      <div>
        <DisplayData items={studentList} />
      </div>
      <h3>List of Courses</h3>
      <div>
        <DisplayData items={coursesList} />
      </div>
    </div>
  );
}

export default App;
