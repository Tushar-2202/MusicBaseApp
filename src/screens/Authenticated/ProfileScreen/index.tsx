import React from 'react';
import {View} from 'react-native';
import {Label} from 'src/component';

interface ProfileProps {
  // Add your props with type
}
const Profile: React.FC<ProfileProps> = props => (
  <View>
    <View>
      <Label>Home Screen</Label>
    </View>
  </View>
);
export default Profile;
