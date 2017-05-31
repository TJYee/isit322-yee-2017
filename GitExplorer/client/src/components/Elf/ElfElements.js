import React, {Component} from 'react';
import '../../css/App.css';
import ElfLogger from '../Debug/elf-logger';
const logger = new ElfLogger('elements');


class ElfElements extends Component {
    constructor(props) {
        logger.log('FORM INPUT', 'constructor called', props);
        super(props);
        logger.log('FORM PROPS', this.props);
    }


    render() {
        const common = {
            id: this.props.id,
            value: this.props.defaultValue,
            onChange: this.props.onChange
        };

        switch (this.props.type) {

            case 'year':
                return (
                    <input
                        {...common}
                        type='number'
                        value={this.props.value || new Date().getFullYear()}
                    />
                );

            case 'paragraph':
                return <p
                    id={this.props.id}

                    onChange={this.props.onChange}
                >{this.props.value}</p>;

            case 'textarea':
                return <textarea {...common} value={this.props.value}/>;

            case 'text': {
                return <input
                    id={this.props.id}
                    value={this.props.value}
                    type={this.props.type}
                    onChange={this.props.onChange}
                />;
            }

            default:
                return <input {...common} type='text'/>;
        }
    }
}

export default ElfElements;