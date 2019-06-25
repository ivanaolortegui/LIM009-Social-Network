
const firebase = () => {
  return {
    auth: () => {
      return {
        createUserWithEmailAndPassword: (email, password) => {
          return new Promise((relsolved) => {
            relsolved({
              email: email,
              password: password
            })
          })
        }
      }
    },
    firestore: () => {
      return {
        collection: () => {
          return {
            add: () => {
              return new Promise((resolved) => {
                resolved('El post fue agregado')
              })
            },
          }
        }
      }
    },
    storage: () => {
      return {
        ref: () => {
          return {
            child: () => {
              return {
                put: (imageFile) => {
                 return new Promise((resolved) => {
                    resolved(`https://firebasestorage.googleapis.com/${imageFile}`)
                  })
                },
              }
            }
          }
        }
      }
    }
  }
};


export default jest.fn(() => {
  return firebase();
})
