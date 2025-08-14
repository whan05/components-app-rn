import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { Card } from '../../components/ui/Card';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { useState } from 'react';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
        behavior={ Platform.OS === "ios" ? 'padding' : undefined}
    >
      <ScrollView>
        <CustomView margin>
          <Title text="Text Inputs" safe />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre Completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              value={form.name}
              onChangeText={value => setForm({ ...form, name: value })}
            />
          </Card>
          <View style={{ height: 10 }} />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Correo Electronico"
              autoCapitalize={'none'}
              autoCorrect={false}
              value={form.email}
              keyboardType="email-address"
              onChangeText={value => setForm({ ...form, email: value })}
            />
          </Card>
          <View style={{ height: 10 }} />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              value={form.phone}
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
          <View style={{ height: 10 }} />
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>
          <View style={{ height: 10 }} />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              value={form.phone}
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
          <View style={{ height: 20 }} />
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
