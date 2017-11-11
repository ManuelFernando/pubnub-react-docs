import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({ publishKey: 'YOUR PUBLISH KEY', subscribeKey: 'YOUR SUBSCRIBE KEY' });
    this.pubnub.init(this);
  }

  componentWillMount() {
    this.pubnub.subscribe({ channels: ['channel1'], withPresence: true });

    this.pubnub.getMessage('channel1', (msg) => {
      console.log(msg);
    });

    this.pubnub.getStatus((st) => {
      this.pubnub.publish({ message: 'hello world from react', channel: 'channel1' });
    });
  }

  componentWillUnmount() {
    this.pubnub.unsubscribe({ channels: ['channel1'] });
  }

  render() {
    const messages = this.pubnub.getMessage('channel1');
    return (
      <View>
        {messages.map((m, index) => <Text key={'message' + index}>{m.message}</Text>)}
      </View>
    );
  }
}
