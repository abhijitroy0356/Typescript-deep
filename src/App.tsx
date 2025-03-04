
import './App.css'

function App() {
  
  return (
    <>
     <Todo title="Abhijit" description='idk' done={false}/>
       
    </>
  )
}
interface Todoprop{
  title:string;
  description:string;
  done:boolean;

}

function Todo(props:Todoprop){
    return (
      <div>
        <div>{props.title}</div>
        <div>{props.description}</div>
        <div>{props.done}</div>
        
      </div>
    )
}
enum keys{
  Up='up',Down='down',Left='left',Right='right'
}
function doshit(mousemove:keys):void{
  if(mousemove==keys.Down){
      console.log(keys.Down)
  }
}
doshit(keys.Down)
function getelelmet<T>(arr:T[]):T{
  return arr[0];
}
let vall=getelelmet(['aH','10'])
let vall1=getelelmet([1,2])
let vall2=getelelmet([true,false])
console.log(vall.toUpperCase());

export default App
