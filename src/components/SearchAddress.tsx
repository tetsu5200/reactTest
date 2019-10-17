import * as React from "react";
import {Button,TextField} from "@material-ui/core"

interface State {
	postCode: string;
	address: string;
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
                <div>
                    <TextField value={this.state.postCode} onChange={e => this.changePostCode(e)}/>
                    <Button onClick={this.searchAddress.bind(this)}>郵便番号から検索</Button>
                </div>
                <div>
                    <TextField value={this.state.address}></TextField>
                </div>
            </div>
        )
    }
}

export default SearchAddress