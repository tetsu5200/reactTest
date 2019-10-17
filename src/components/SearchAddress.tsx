import * as React from "react";
import {Button,TextField,Card,CardHeader} from "@material-ui/core"

interface State {
	postCode: string;
	address: string;
}

const styles = {
    line :{
        padding : '20px'
    }
}

class SearchAddress extends React.Component<{},State>{

    constructor(props:{}){
        super(props)
    }

    public componentWillMount(): void{
        this.setState({postCode:'',address:''})
    }

    private changePostCode(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const postCode = e.target.value;
        this.setState({postCode:postCode})
    }

    searchAddress(): void{
        const postCode = this.state.postCode
        const requestUrl = 'https://api.zipaddress.net/?zipcode=' + postCode
        fetch(requestUrl)
            .then(res => res.json())
            .then(
              (result) => {
                  var address = result.data.fullAddress
                  this.setState({
                      address:address
                });
              },
              (error) => {
                  console.log(error)
              })
        }     

    render(){
        return(
            <div style={{padding:'30px'}}>
                <Card style={{ margin: 'auto', width: '80vw' }}>
                    <CardHeader title='住所検索' />
                    <div style={styles.line}>
                        <TextField value={this.state.postCode} onChange={e => this.changePostCode(e)}/>
                        <Button onClick={this.searchAddress.bind(this)}>郵便番号から検索</Button>
                    </div>
                    <div style={styles.line}>
                        <TextField value={this.state.address}></TextField>
                    </div>
                </Card>
            </div>
        )
    }
}

export default SearchAddress