import React from 'react';

interface Props {}

interface State {}

export default class Index extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div>
        Index
      </div>
    );
  }
}