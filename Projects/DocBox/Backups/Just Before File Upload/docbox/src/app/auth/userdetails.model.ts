export class UserDetails {
  id: number | undefined;
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  status: boolean | undefined;
  enabled: boolean | undefined;
  authorities: any|undefined;
  credentialsNonExpired: boolean | undefined;
  accountNonExpired: boolean | undefined;
  accountNonLocked: boolean | undefined;
}
