import * as React from 'react';

interface IProps {
    setDialogInitialState: any;
    selectedDate: Date;
    startDate: Date;
    endDate: Date;
    closeDialog: any;
    nameTask: string;
}

export class viewTask extends React.Component<IProps> {
    componentWillMount() {
        document.addEventListener( 'keyup', this.closeDialogWithHelpEscape );
        document.addEventListener( 'keyup', (event: KeyboardEvent) => {
            event.stopPropagation()
        } );
    }

    closeDialog = () => {
        this.props.closeDialog();
        document.removeEventListener( 'keyup', this.closeDialogWithHelpEscape );
    };

    closeDialogWithHelpEscape = ( event: KeyboardEvent ) => {
        if ( event.key === 'Escape' ) {
            this.closeDialog();
        }
    };

    clickStop = ( event: any ) => {
        event.stopPropagation();
    };

    render() {
        return (
            <div className="outsideDialog" onMouseDown={this.closeDialog}>
                <div className="dialog" onMouseDown={this.clickStop}>
                    <div className="close" onClick={this.closeDialog}>
                        <i className="fas fa-times"/>
                    </div>
                    <div>
                        <span>{this.props.nameTask}</span>
                    </div>
                    <div>
                        <span>Start:{new Date(this.props.startDate).toString()}</span>
                    </div>
                    <div>
                        <span>End: {new Date(this.props.endDate).toString()}</span>
                    </div>
                </div>
            </div>
        );
    }
};

