...

componentWillMount() {
  this.pubnub.getMessage('channel1');

  ...
}

render() {
  const messages = this.pubnub.getMessage('channel1');
  return (
    <div>
      <ul>
        {messages.map((m, index) => <li key={'message' + index}>{m.message}</li>)}
      </ul>
    </div>
  );
}

...
