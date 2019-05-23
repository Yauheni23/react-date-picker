import React from 'react';

interface IProps {
    error: boolean;
    changeNameTask: any;
}

export class NameTask extends React.Component<IProps> {
    changeNameTask = (event: React.ChangeEvent<HTMLInputElement> ) => {
        this.props.changeNameTask(event.currentTarget.value);
    };

    render() {
        return (
            <div>
                <input className={'nameTask' + ( this.props.error ? ' errorInput' : '' )}
                       placeholder="Add name"
                       onChange={this.changeNameTask}
                       maxLength={100}
                       autoFocus
                />
            </div>
        );
    }
};

