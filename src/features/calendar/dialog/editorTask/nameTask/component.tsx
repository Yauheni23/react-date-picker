import React from 'react';
import { className, text } from '../../../../constants';

interface IProps {
    error: boolean;
    changeNameTask: any;
}

export class NameTask extends React.Component<IProps> {
    changeNameTask = (event: React.ChangeEvent<HTMLInputElement> ): void => {
        this.props.changeNameTask(event.currentTarget.value);
    };
    render(): React.ReactElement<React.JSXElementConstructor<HTMLElement>> {
        return (
            <div>
                <input className={className.NAME_TASK + ( this.props.error ? className.ERROR_INPUT : '' )}
                       placeholder={text.NAME_TASK_PLACEHOLDER}
                       onBlur={this.changeNameTask}
                       maxLength={100}
                       autoFocus
                />
            </div>
        );
    }
};

