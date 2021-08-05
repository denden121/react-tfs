import React from "react";
import {getOperations} from "../services/requestMock";
import {IAccountOperation} from "../interfaces/account";
import {Timeline} from "../components";
interface ITimelinePageProps {
    match: {
        params: {
            accountId: number | string;
        };
    };
}

interface ITimelinePageState {
    loading: boolean;
    operations: Array<IAccountOperation>;
}

export class TimelinePage extends React.Component<ITimelinePageProps, ITimelinePageState> {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            operations: [],
        };
    }
    componentDidMount(){
        document.title = '';
        this.fetchOperations();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.accountId !== prevProps.match.params.accountId) {
            this.fetchOperations();
        }
    }

    async fetchOperations() {
        const accountId = this.props.match.params.accountId.toString();
        this.setState({
            ...this.state,
            loading: true,
        });
        const operations = await getOperations(accountId);
        this.setState({
            operations: operations,
            loading: false,
        });
    }

    render() {
        return (
            <div>
                <h2>Список операций</h2>
                {this.state.loading ? (
                    <img width={'60px'} height={'60px'} src="https://i.gifer.com/ZZ5H.gif" alt="loading"/>
                ) : (
                    this.state.operations?.length ? <Timeline items={this.state.operations} /> : <h4>Нет операции  по данному счёту</h4>
                )}
            </div>
        );
    }
}


