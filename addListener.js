this.pubnub.addListener({
  status: (st) => {
    if (st.category === "PNUnknownCategory") {
      var newState = {new: 'error'};
      pubnub.setState({
        state: newState},
        function (status) {
          console.log(st.errorData.message);
        }
      );
    }
  },
  message: (message) => {
    console.log(message);
  }
});

this.pubnub.subscribe({ channels: ['my_channel'] });
