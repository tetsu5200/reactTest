import * as React from 'react'
import {Toolbar} from '@material-ui/core'

class Header extends React.Component{

    render(){
        return(
            <div>
                <Toolbar style={{backgroundColor:'lightGreen'}}>
                    <h1>Sample</h1>
                </Toolbar>
            </div>
        )
    }


}

export default Header