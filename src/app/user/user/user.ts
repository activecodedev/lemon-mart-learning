import { Role } from '../../auth/auth.enum'

export class User implements IUser {
  constructor(
    public _id = '',
    public email = '',
    public name = { first: '', middle: '', last: '' } as IName,
    public picture = '',
    public role = Role.None,
    public userStatus = false,
    public dateOfBirth: Date | null = null,
    public level = 0,
    public address = { line1: '', city: '', state: '', zip: '' },
    public phones: IPhone[] = []
  ) {}

  static Build(user: IUser) {
    if (!user) {
      return new User()
    }

    return new User(
      user._id,
      user.email,
      user.name,
      user.picture,
      user.role as Role,
      user.userStatus,
      typeof user.dateOfBirth === 'string'
        ? new Date(user.dateOfBirth)
        : user.dateOfBirth,
      user.level,
      user.address,
      user.phones
    )
  }

  public get fullName(): string {
    if (!this.name) {
      return ''
    }

    if (this.name.middle) {
      return `${this.name.first} ${this.name.middle} ${this.name.last}`
    }

    return `${this.name.first} ${this.name.last}`
  }

  toJSON(): object {
    const serialized = Object.assign(this)
    delete serialized._id
    delete serialized.fullName

    return serialized
  }
}

export interface IUser {
  _id: string
  email: string
  name: IName
  picture: string
  role: Role | string
  userStatus: boolean
  dateOfBirth: Date | null | string
  level: number
  address: {
    line1: string
    line2?: string
    city: string
    state: string
    zip: string
  }
  phones: IPhone[]

  readonly fullName?: string
}

export interface IName {
  first: string
  middle?: string
  last: string
}

export enum PhoneType {
  None = 'none',
  Mobile = 'mobile',
  Home = ' home',
  Work = 'work',
}

export interface IPhone {
  type: PhoneType
  digits: string
  id: number
}
