import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import postApi from '../api/postApi'

const Block5 = () => {
  const [posts, setPosts] = useState([])
    useEffect(() => {

        const getTopPost = async () => {
            try {
                const res = await postApi.getTopPost()
                setPosts(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getTopPost()    
    }, [])
  return (
    <View style={{height: 2000}}>
      <ImageBackground source={{uri: 'http://192.168.234.1//images/bg-news-front.png'}} style={[{width: '100%', height: null, aspectRatio: 1258/641}, styles.block5]}>
        <View style={styles.block5Header}>
          <Text style={{fontSize: 24, fontWeight: '500', lineHeight: 24, marginTop: 15, marginBottom: 15, width: 150,}}>Blog</Text>
          <View style={{marginRight: 12, fontSize: 14, fontWeight: 400, color: '#2998dd', width: 150,}}>
            <Button
              title='Xem thêm'
              // onPress={}
            />
          </View>
        </View>
        <View style={styles.block5Content}>
          {
            posts ? posts.map((item,index) => (
              <View key={index} style={styles.postItem}>
                <View style={styles.postImage}>
                  <Image 
                    style={{width: '100%', height: 205, resizeMode: 'cover',}}
                    source={{uri: item.picture}}
                  />
                </View>
                <View style={styles.postContent}>
                  <Text style={styles.postName}>{item.username}</Text>
                  <Text style={styles.postTitle}>{item.title}</Text>
                  <Text style={styles.postPublishedAt}>{item.published_at}</Text>
                </View>
              </View>
            )) : null
          }
        </View>
      </ImageBackground>
    </View>
  )
}

export default Block5

const styles = StyleSheet.create({
  block5: {
    borderTopWidth: 1,
    borderTopColor: '#dadada',
    borderStyle: 'solid',
    paddingTop: 20,
    paddingBottom: 40,
  },
  block5Header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  block5Content: {
    marginBottom: 20,
  },
  postItem: {

  },
  postImage: {
    overflow: 'hidden',

  },
  postContent: {
    marginTop: -5,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  postName: {
    fontSize: 12,
    fontWeight: '600',
  },
  postTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 6,
    height: 42,
    overflow: 'hidden',
  },
  postPublishedAt: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '400',
  },
})