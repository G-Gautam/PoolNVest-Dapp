import React from "react";
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";

import UsernameContext from './LoginScreen';


export default class SettingsScreen extends React.Component {
  render() {
    <UsernameContext.Consumer>
      {(username) => {
        var user = {
          id: username,
          name: 'a',
          image:
            'https://getstream.io/random_svg/?name=John',
        };
      }}
    </UsernameContext.Consumer>

    const chatClient = new StreamChat('f8wwud5et5jd');
    var userToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaWN5LXVuaXQtMCJ9.R36ZrlzX149D5srpNC3_ge2CYEAFgesp60kgbS0rw5w';

    chatClient.setGuestUser({ id: this.props.username });
    const channel = chatClient.channel("messaging", "b");
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

