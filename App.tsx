import { useEffect, useState,} from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState <Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        photo:
          ' https://www.shutterstock.com/image-photo/panda-eating-shoots-bamboo-rare-260nw-2359089287.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 9.99,
        photo:
          ' https://rukminim2.flixcart.com/image/850/1000/kkwwu4w0/poster/i/j/i/large-doraemon-cartoon-waterproof-vinyl-sticker-poster-can2490-2-original-imagy5enhzahmevc.jpeg?q=20&crop=false',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 12.99,
        photo:
          ' https://www.shutterstock.com/image-photo/panda-eating-shoots-bamboo-rare-260nw-2359089287.jpg',
      },
      {
        id: 4,
        name: 'Product 4',
        price: 12.99,
        photo:
          'https://i.pinimg.com/564x/99/da/2e/99da2eabe8d81779e9aa4a0dc39739be.jpg',
      },
      {
        id: 5,
        name: 'Product 5',
        price: 12.99,
        photo:
          ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJDQWDHAQ1zoal55X8JLjV12ejDai71EthNmN8c-_EsYfFINZAR5yqiyEDz7Cqvc5h0s&usqp=CAU',
      },
      {
        id: 6,
        name: 'Product 6',
        price: 12.99,
        photo:
          'https://i.pinimg.com/564x/99/da/2e/99da2eabe8d81779e9aa4a0dc39739be.jpg',
      },
      {
        id: 7,
        name: 'Product 7',
        price: 12.99,
        photo:
          ' https://www.shutterstock.com/image-photo/panda-eating-shoots-bamboo-rare-260nw-2359089287.jpg',
      },
      {
        id: 8,
        name: 'Product 8',
        price: 12.99,
        photo:
          ' https://www.shutterstock.com/image-photo/panda-eating-shoots-bamboo-rare-260nw-2359089287.jpg',
      },
      {
        id: 9,
        name: 'Product 9',
        price: 12.99,
        photo:
          ' https://www.shutterstock.com/image-photo/panda-eating-shoots-bamboo-rare-260nw-2359089287.jpg',
      },
      {
        id: 10,
        name: 'Product 10',
        price: 12.99,
        photo:
          ' https://www.shutterstock.com/image-photo/panda-eating-shoots-bamboo-rare-260nw-2359089287.jpg',
      },
      {
        id: 11,
        name: 'Product 11',
        price: 12.99,
        photo:
          ' https://image.made-in-china.com/202f0j00vVtuGWmROKrp/Cute-Panda-Plush-Pillow-Soft-Panda-Stuffed-Animals-Toys-for-Kids-Boys-Girls.webp',
      },
      {
        id: 12,
        name: 'Product 12',
        price: 12.99,
        photo:
          'https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg',
      },
      {
        id: 13,
        name: 'Product 13',
        price: 12.99,
        photo:
          'https://i.pinimg.com/564x/99/da/2e/99da2eabe8d81779e9aa4a0dc39739be.jpg',
      },
      {
        id: 14,
        name: 'Product 14',
        price: 12.99,
        photo:
          ' https://radarbanyumas.disway.id/upload/2022/04/fakta-Doraemon.jpg',
      },
      {
        id: 15,
        name: 'Product 15',
        price: 12.99,
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/800px-Red_Panda_%2824986761703%29.jpg',
      },
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              anekaragam
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'aqua',
                maxWidth: '45%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 110, height: 120, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20 }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20 }}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;