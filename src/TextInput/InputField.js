import React from 'react';
import { MdError} from "react-icons/md";
import { TiDelete } from "react-icons/ti";

class InputField extends React.Component {

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

    onFocus() {
       this.props.onFocus();
    }

    onBlur() {
        this.props.onBlur();
    }

    render(){
   
        return (
            <div className="input-container" onBlur={this.onBlur} onFocus={this.onFocus}>
                <input type="text" 
                        className={this.props.fieldInputclassName} 
                        onChange={this.onChange} 
                        value={this.props.value} 
                        onBlur={this.onBlur} 
                        onFocus={this.onFocus}
                        name= {this.props.name}
                        disabled={this.props.disabled}
                        />
                <span className={this.props.boxClass}>
                        {this.props.text}
                </span>
                {this.props.deleteInputIcon ? 
                    <span className={this.props.spanClassName} 
                            onMouseDown={() => this.clearInput(this.props.name)}>
                                <TiDelete size="30px" style={{position:"absolute", top: "36%", right: "13px", zIndex:"6"}}/>
                    </span> : null}
                {this.props.Error ? 
                    <span className="input-container--error-icon">
                        <MdError size="24px" color="rgb(170, 0, 0)" 
                                    style={{position:"absolute", 
                                    top: "40%", right: "16px"}}/>
                    </span> : null}
                <span className="input-container__border"></span>
                <p className={this.props.pClassName}>{this.props.message}</p>
            </div>
        )
    }
}

export default InputField;