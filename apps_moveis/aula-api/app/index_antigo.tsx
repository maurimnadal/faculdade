import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, TextInput } from "react-native";
import Aguarde from "../components/aguarde"

import axios from "axios"


export default function Index() {
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [posts, setPosts] = useState<{ id: number, title: string, body: string }[] | null>(null)


  useEffect(() => {
    const loadPosts = async () => {
      // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      // const data = await response.json()
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
      setPosts(data)
      setLoading(false)
    }

    loadPosts()
  }, [])

  // if (posts === null) return <Aguarde />

  if(loading){
    return (
      <View>
        <ActivityIndicator size="large"/>
        <Text>Carregando...</Text>
      </View>
    )
  }
  const filteredPosts = posts?.filter(p => p.title.includes(search))


  return (
    <View>
      <Text>Consumindo uma API</Text>
      <TextInput placeholder="Buscar..." value={search} onChangeText={setSearch}/>  
      <FlatList data={filteredPosts} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
          <View>
          <Text style={{fontWeight:"bold"}}>{item.title}</Text>
          <Text>{item.body}</Text>
          </View>
      )}/>
      {/* <FlatList 
        data={posts} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View>
            <Text style={{fontWeight:"bold"}}>{item.title}</Text>
            <Text>{item.body}</Text>
            </View>
        )}/> */}
      {/* {posts.map(post => (
        <Text key={post.id}>{post.title}</Text>
      ))} */}
    </View>
  );
}
