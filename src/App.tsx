import { GradeCalculator } from "./components/GradeCalculator";
import { UserList } from "./components/UserList";


function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className='text-4xl mb-5'>KATIA SILVA </h1>

       {/*  <UserList/> */}
        <GradeCalculator/>        
 
      </div>

    </>
  );
}

export default App;