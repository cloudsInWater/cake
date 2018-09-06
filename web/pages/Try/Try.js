import './index.less'
import { Button, Input } from 'antd';
const {inject,observer}=MobxReact;

@inject('try','type')
@observer
export default class Try extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputI:''
        }
    }
    makeChange=(e)=>{
        let value=e.target.value;
        this.setState({
            inputI:value
        })
    }
    makeEnter=(e)=>{
        if(e.which===13 ){
            this.addChange()
        }
    }
    addChange=()=>{
        if(this.state.inputI==''){
            return;
        }
        let InputA=this.state.inputI;
        let {list,listAdd}=this.props.type;        
        let id=list.length+1;
        
        listAdd({
            title:InputA,
            completed: true,
            id:id
        })
        this.setState({
            inputI:''
        })
    }
    liThing=(id)=>{
        let {list}=this.props.type;
        console.log(id)
        let now=id-1;
        list[now].completed=!list[now].completed;
    }
    render(){
        let {add,less,num}=this.props.try;
        let {list,listAdd,listCompleted}=this.props.type;
        let {inputI}=this.state
            return(
                <div className="all">
                    <h4>YES , I AM HERE</h4>
                    <div>
                        <button onClick={less}>-</button>
                        <span>{num}</span>
                        <button  onClick={add}>+</button>
                    </div>
                    <div>
                        <input type="text" value={inputI} onChange={(e)=>this.makeChange(e)} onKeyDown={this.makeEnter} />
                        <button className={inputI==''?'canNot':''}  onClick={this.addChange}>add</button>
                    </div>
                    <div>
                        <ul>
                            {list.map(m=>{
                                let ida=m.id
                                return(
                                    <li onClick={()=>listCompleted(ida)} className={m.completed?'':'lia'}  key={m.id}>{m.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                   
                </div>
            )
    }
}

