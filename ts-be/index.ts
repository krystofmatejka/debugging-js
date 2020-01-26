interface User {
  id: number,
  name: string,
  email?: string
}

function getUsers () {
  const users: User[] = [
    {
      id: 13,
      name: 'John',
      email: 'john@gmail.com'
    },
    {
      id: 37,
      name: 'Doe'
    }
  ]

  return users
}

function filterUsers (users: User[]) {
  return users.filter(user => user.email)
}

function serializeUsers (users: User[]) {
  return users.map(user => `id: ${user.id}, name: ${user.name}, email: ${user.email}\n`)
}

function main () {
  const users = getUsers()
  const filteredUsers = filterUsers(users)
  const serializedUsers = serializeUsers(filteredUsers)

  return serializedUsers
}

console.log(main())
