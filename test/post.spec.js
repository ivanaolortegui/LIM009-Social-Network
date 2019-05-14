import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        abc123: {
          title: 'Me encanta'
        },
        abc124: {
          title: 'Me encanta reciclar'
        }
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

  import {

    addPost,
    getPost,
    editPost
  } from "../src/controller/controller-Firebase.js";

  describe('addPost', () => {
  it('addPost aregar un post', (done) => {
    return addPost('Hola amigos', '12345', 'chiquinquira@gmail.com', 'public').then(() => {
      const callback = (post) => {
        const postAdded = post.find(ele => ele.post === 'Hola amigos')
        expect(postAdded.post).toBe('Hola amigos')
        done()
      }
      getPost(callback)
    })
  })
})

describe('editPost', () => {
  it('editPost aregar un post', (done) => {
    return editPost('abc123', 'hi','public').then(() => {
      const callback = (post) => {
        const postAdded = post.find(ele => ele.id === 'abc123')
        expect(postAdded.post).toBe('hi')
        done()
      }
      getPost(callback)
    })
  })
})