import React from 'react';
import { MdError} from "react-icons/md";
import { TiDelete } from "react-icons/ti";

class InputElement extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    clearInput(name) {
       this.props.clearInput(name)
    }

    onChange(e){
        this.props.onChange(e.target.value, e.target.name)
    } 

    onFocus(name) {
       this.props.onFocus(name);
    }

    onBlur(name) {
        this.props.onBlur(name);
    }

    render(){

        return (
            <div className="input-container">
                <input type="text" 
                        className={this.props.fieldInputclassName} 
                        onChange={this.onChange} 
                        value={this.props.value} 
                        onBlur={() => this.onBlur(this.props.name)} 
                        onFocus={() => this.onFocus(this.props.name)}
                        name= {this.props.name}
                        disabled={this.props.disabled}
                        />
                <span className={this.props.boxClass}>
                        {this.props.text}
                </span>
                {this.props.deleteInputIcon ? 
                    <span className={this.props.spanClassName} 
                            onMouseDown={() => this.clearInput(this.props.name)}
                            >
                            <TiDelete size="30px" style={{position:"absolute", top: "33%", right: "13px", zIndex:"6"}}/>
                    </span> : null}
                {this.props.Error ? 
                    <span className="input-container--error-icon">
                        <MdError size="24px" color="rgb(170, 0, 0)" 
                                    style={{position:"absolute", 
                                    top: "40%", right: "16px"}}/>
                    </span> : null}
                <span className={this.props.borderClass}></span>
                <p className={this.props.pClassName}>{this.props.message}</p>
            </div>
        )
    }
}

export default InputElement;