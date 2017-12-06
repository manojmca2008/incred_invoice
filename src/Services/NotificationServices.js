import { pubnubPublishKey,pubnubSubscribeKey } from '../Config/Constants';
import PubNubReact from 'pubnub-react';

this.pubnub = new PubNubReact({
  publishKey: pubnubPublishKey,
  subscribeKey: pubnubSubscribeKey
});
this.pubnub.init(this);
export function userDetails(channel) {
  this.pubnub.getMessage(channel, (msg) => {
    return msg;
    console.log(msg);
});
}


