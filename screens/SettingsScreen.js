import React from "react";
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";

// var appUser = this.props.navigation.dangerouslyGetParent().getParam('user')

const chatClient = new StreamChat('f8wwud5et5jd');
var result = '';
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for (var i = 0; i < charactersLength; i++) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
var userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaWN5LXVuaXQtMCJ9.R36ZrlzX149D5srpNC3_ge2CYEAFgesp60kgbS0rw5w';

var date = new Date().getSeconds().toString();
var user = {
  id: date,
  name: 'a',
  image:
    'https://getstream.io/random_svg/?name=John',
};

chatClient.setGuestUser({ id: date });

export default class SettingsScreen extends React.Component {

  random(){
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < charactersLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  render() {
    const channel = chatClient.channel("messaging", "result");
    channel.watch();

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel channel={channel}>
            <View style={{ display: "flex", height: "100%" }}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Investment Group Chat',
};

