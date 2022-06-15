export type UserInfoProps = {
  name: string;
  address: string;
};

export const UserInfo = (props: UserInfoProps) => {
  const { name, address } = props;

  return (
    <div className="dpl-user-info bg-global-secondary color-secondary-gray">
      <div className="text-label-semiBold ml-32 pt-32">Navn</div>
      <div className="text-body-large ml-32">{name}</div>
      <div className="text-label-semiBold ml-32 mt-16">Adresse</div>
      <div className="text-body-large ml-32 pb-32">{address}</div>
    </div>
  );
};
