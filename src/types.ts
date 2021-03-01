export interface stateInterface {
  filterValue: string,
  users: userInterface[],
  hiddenUsers: number[],
  isModalOpen: boolean,
  currentUser: userInterface
}

export interface userInterface {
  address: {
    city: string
    geo: {
      lat: string
      lng: string
    }
    street: string
    suite: string
    zipcode: string
  }
  company: {
    bs: string
    catchPhrase: string
    name: string
  }
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}