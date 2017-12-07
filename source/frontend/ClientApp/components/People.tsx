import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

export class People extends React.Component<RouteComponentProps<{}>> {
    
    public render() {
        return <div>
            Hello World
        </div>;
    }

}