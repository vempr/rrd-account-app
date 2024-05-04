import { useAccountContext } from "./Account";
import AccountLabelAtt from "./AccountLabelAtt";
import AccountHr from "./AccountHr";
import { useGetCityGeoQuery } from "../../services/locationApi";
import AccountDetailsSkeletonLoader from "./AccountDetailsSkeletonLoader";

export default function AccountGeneral() {
  const { account, loading } = useAccountContext();

  // NOTE: mock accounts' coordinates are invalid
  // const lat = account.address.geo.lat;
  // const lon = account.address.geo.lng;
  // const { data, isLoading } = useGetCityGeoQuery({ lat, lon });

  const { data, isLoading } = useGetCityGeoQuery({ lat: "40.69", lon: "-74" }); // NY

  if (!loading && !isLoading && data)
    return (
      <div>
        <AccountLabelAtt label="Street" attribute={account.address.street} />
        <AccountHr />
        <AccountLabelAtt label="Suite" attribute={account.address.suite} />
        <AccountHr />
        <AccountLabelAtt label="City" attribute={account.address.city} />
        <AccountHr />
        <AccountLabelAtt label="Zipcode" attribute={account.address.zipcode} />
        <AccountHr />
        <AccountLabelAtt label="Location" attribute={data.address.city} />
      </div>
    );

  return <AccountDetailsSkeletonLoader />;
}
