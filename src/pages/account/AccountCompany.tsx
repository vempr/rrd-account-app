import { useAccountContext } from "./Account";
import AccountLabelAtt from "./AccountLabelAtt";
import AccountHr from "./AccountHr";

export default function AccountCompany() {
  const { account, loading } = useAccountContext();
  if (!loading)
    return (
      <div>
        <AccountLabelAtt
          label="Company Name"
          attribute={account.company.name}
        />
        <AccountHr />
        <AccountLabelAtt
          label="Business Description"
          attribute={account.company.bs}
        />
        <AccountHr />
        <AccountLabelAtt
          label="Catch Phrase"
          attribute={`"${account.company.catchPhrase}"`}
        />
      </div>
    );
}
