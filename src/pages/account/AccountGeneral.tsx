import { useAccountContext } from "./Account";
import AccountLabelAtt from "./AccountLabelAtt";
import AccountHr from "./AccountHr";

export default function AccountGeneral() {
  const { account, loading } = useAccountContext();
  if (!loading)
    return (
      <div>
        <AccountLabelAtt label="Username" attribute={account.username} />
        <AccountHr />
        <AccountLabelAtt label="Full Name" attribute={account.name} />
        <AccountHr />
        <AccountLabelAtt label="Id" attribute={account.id} />
        <AccountHr />
        <AccountLabelAtt label="Email" attribute={account.email} />
        <AccountHr />
        <AccountLabelAtt label="Phone Number" attribute={account.phone} />
        <AccountHr />
        <AccountLabelAtt label="Website" attribute={account.website} />
      </div>
    );
}
