...

componentWillMount() {
  this.pubnub.init(this);

  this.pubnub.getStatus((status) => {
    console.log(status);
  });

  ...
}

render() {
  const status = this.pubnub.getStatus();
  return (
    <div>
      <p>{status.category}</p>
    </div>
  );
}

...
