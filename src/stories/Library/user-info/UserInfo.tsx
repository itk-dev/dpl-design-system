export type UserInfoProps = {
  name: string;
  address: string;
};

export const UserInfo = (props: UserInfoProps) => {
  const { name, address } = props;

  return (
    <div className="dpl-user-info">
      <div className="dpl-user-info__label">Navn</div>
      <div className="dpl-user-info__text">{name}</div>
      <div className="dpl-user-info__label">Adresse</div>
      <div className="dpl-user-info__text">{address}</div>
    </div>
  );
};
