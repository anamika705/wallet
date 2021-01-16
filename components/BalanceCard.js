import * as React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import { View } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const imgUri =
  "https://cdn4.vectorstock.com/i/1000x1000/12/03/wallet-with-money-vector-19141203.jpg";
const BalanceCard = () => (
  <View
    style={{
      padding: 24,
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Card>
      <Card.Cover
        source={{
          uri: imgUri,
        }}
        resizeMode="contain"
        style={{
          flexDirection: "column",
          height: 300,
        }}
      />
      <Card.Actions>
        <Button>Available balance 1000 $</Button>
      </Card.Actions>
    </Card>
  </View>
);

export default BalanceCard;
