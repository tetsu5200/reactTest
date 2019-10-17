import * as React from "react";
import {withRouter,RouteComponentProps,BrowserRouter} from "react-router-dom"
import {Button,TextField} from "@material-ui/core"

interface State {
	loginId: string;
	password: string;
}

class Login extends React.Component<RouteComponentProps,State>{
    constructor(prop: RouteComponentProps){
        super(prop)
    }

    public componentWillMount(): void{
        this.setState({loginId:'',password:''})
    }

    private loginIdChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const loginId = e.target.value;
        this.setState({loginId: loginId})
    }

    private passwordChange(e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const password = e.target.value;
        this.setState({password: password})
    }

    private login(): void{
        if(this.state.loginId === '' || this.state.password === ''){
            alert('入力されていない項目があります。')
            return
        }
        this.props.history.push('/SearchAddress')
    }

    render(){
         return (
            <BrowserRouter>
                <div style={{padding:'30px'}}>
                    <div>
                         <TextField value={this.state.loginId} onChange={e => this.loginIdChange(e)}/>
                    </div>
                    <div>
                        <TextField type="password" value={this.state.password} onChange={e => this.passwordChange(e)} />
                    </div>
                    <div>
                        <Button onClick={this.login.bind(this)}>ログイン</Button>
                    </div>
                </div>
            </BrowserRouter>
         )}
 };

 export default withRouter(Login);