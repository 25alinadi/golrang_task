export interface IUserData{
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
}

export interface IUserListData extends IUserData{
    address: IUserAddressData,
    company: IUserCompanyData
}

export interface IUserAddressData{
    street: string,
    suite : string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

export interface IUserCompanyData{
    name: string,
    catchPhrase: string,
    bs: string
}