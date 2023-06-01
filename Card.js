import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableHighlight
} from 'react-native';

function Card({ title, desc, img }) {
  const handlePress = () => {
    console.log('Card Pressed!');
  };

  return (
    <TouchableHighlight onPress={handlePress}>
    <View style={styles.card}>
      <View style={styles.img_container}>
        <Image source={{uri: img}} style={styles.image} resizeMode="cover"/>
      </View>
      <View style={styles.profile}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
    </TouchableHighlight>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  img_container: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },

  profile: {
    padding: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  desc: {
    fontSize: 16,
  },
});

