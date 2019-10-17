import * as React from "react";
import {withRouter,RouteComponentProps} from "react-router-dom"
import {Button,TextField,Card,CardHeader} from "@material-ui/core"

const styles = {
    line :{
        padding : '20px'
    }
}

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
            <div style={{padding:'100px',textAlign:'center'}}>
                <Card style={{ margin: 'auto', width: '50vw' }}>
                    <CardHeader title='ログイン' />
                    <div style={styles.line}>
                         <TextField value={this.state.loginId} 
                            onChange={e => this.loginIdChange(e)}/>
                    </div>
                    <div style={styles.line}>
                        <TextField type="password" value={this.state.password} 
                            onChange={e => this.passwordChange(e)} />
                    </div>
                    <div style={styles.line}>
                        <Button onClick={this.login.bind(this)}>ログイン</Button>
                    </div>
                </Card>
            </div>
         )}
 };

 export default withRouter(Login);