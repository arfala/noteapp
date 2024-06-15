import React from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import CustomButton from '../components/customButton';

const NoteCard = ({ item, index, setCurrentPage, setCurrentNote, deleteNote }) => {
  const colors = ['#dda15e', '#98c1d9', '#94d2bd'];
  const backgroundColor = colors[index % colors.length];

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.buttons}>
        <CustomButton
          backgroundColor="#FFC300"
          color="#151D3B"
          text="Ubah"
          fontSize={12}
          width={100}
          iconName="edit"
          onPress={() => {
            setCurrentNote(item);
            setCurrentPage('edit');
          }}
        />
        <CustomButton
          backgroundColor="#D82148"
          color="#fff"
          text="Hapus"
          fontSize={12}
          width={100}
          iconName="trash"
          onPress={() => {
            deleteNote(item.id);
          }}
        />
      </View>
    </View>
  );
};

const Home = ({ noteList, setCurrentPage, setCurrentNote, deleteNote }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerText}>My Notes</Text>
    </View>
    <View style={styles.awal}>
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeText}>
          <Text style={{ fontSize: 30 }}>Selamat</Text>
          <Text style={{ fontSize: 30 }}>Datang</Text>
        </View>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 100, height: 100, borderRadius: 50,
            resizeMode: 'cover', }}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <CustomButton
          backgroundColor="#8338ec"
          color="#fff"
          text="Tambahkan Note"
          width="100%"
          iconName="plus"
          onPress={() => {
            setCurrentPage('add');
          }}
        />
      </View>
    </View>
    <FlatList
      style={{ marginTop: 10 }}
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item, index }) => (
        <NoteCard
          item={item}
          index={index}
          setCurrentPage={setCurrentPage}
          setCurrentNote={setCurrentNote}
          deleteNote={deleteNote}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edede9',
  },
  header: {
    backgroundColor: '#8338ec',
    marginBottom: 20,
    height: 120,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  headerText: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  awal: {
    margin: 20,
    marginTop: 0,
    marginBottom:0,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  welcomeText: {
    flex: 1,
  },
  addButtonContainer: {
    marginTop: 10,
  },
  card: {
    margin: 20,
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default Home;
