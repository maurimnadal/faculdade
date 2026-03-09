import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { estados } from '../dados';

export default function Index() {
  const router = useRouter()

  console.log(estados)
  const onPress = () => {
    router.push ({
      pathname: "/[id]",
      params: {id: 58}
    })
  }

  return (
    <View
      style={style.container}
    >
      <Text style={[style.text, {fontWeight: "bold"}]}>Tela Principal</Text>

      {estados.map(estado => (
        <Link 
          key={estado.id} 
          href={`/${estado.id}`}>
            {estado.uf}
        </Link>
      ))}



      {/* <Link  
        href="/list"
        style={style.button}
      >List</Link>
      <Link  
        href="/"
        style={style.button}
      >página que não existe</Link>
      <Link  
        href="/1"
        style={style.button}
      >Registro 1</Link>


      <Link  
        href="/2"
        style={style.button}
      >Registro 2</Link>

      <Link  
        href={{
          pathname: "/[id]",
          params: {id: 53, color: 'yellow',
            color2: 'blue'
            
          }
        }}
        style={style.button}
      >Registro 1</Link>

      <Button
        title="Clique para detalhes"
        onPress={onPress}
      /> */}


    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: 'blue'
  },
  button: {
    backgroundColor: "blue",
    color: "whitesmoke",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10
  }
})