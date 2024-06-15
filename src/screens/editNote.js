import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const EditNote = ({ setCurrentPage, editNote, currentNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDesc(currentNote.desc);
    }
  }, [currentNote]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Ubah Note</Text>
        <CustomTextInput
          text={title}
          onChange={setTitle}
          label="Judul"
          placeholder="Judul"
          numberOfLines={1}
          multiline={false}
        />
        <CustomTextInput
          text={desc}
          onChange={setDesc}
          label="Deskripsi"
          placeholder="Deskripsi"
          multiline
          numberOfLines={4}
        />
        <View style={styles.spacerTop}>
          <CustomButton
            backgroundColor="#4895ef"
            color="#fff"
            text="Simpan Perubahan"
            width="100%"
            iconName="save"
            onPress={() => {
              editNote(currentNote.id, title, desc);
              setCurrentPage('home');
            }}
          />
        </View>
        <View style={styles.spacerTop}>
          <CustomButton
            backgroundColor="#e9ecef"
            color="#000"
            text="Home"
            width="100%"
            iconName="home"
            onPress={() => {
              setCurrentPage('home');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 10,
  },
});

export default EditNote;
