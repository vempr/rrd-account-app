import AccountHr from "./AccountHr";

export default function AccountSkeletonLoader() {
  return (
    <div className="flex w-screen animate-pulse flex-col items-center opacity-70">
      <div className="mb-2 h-[20px] w-[140px] rounded-xl border bg-white"></div>
      <div className="flex flex-col items-center gap-y-2">
        <div className="h-[32px] w-[106px] rounded-xl border bg-white"></div>
        <div className="h-[24px] w-[150px] rounded-xl border bg-white"></div>
      </div>
      <div className="my-2 flex flex-row gap-x-2">
        <div className="h-[34px] w-[73px] rounded-xl border bg-white"></div>
        <div className="h-[34px] w-[73px] rounded-xl border bg-white"></div>
        <div className="h-[34px] w-[73px] rounded-xl border bg-white"></div>
      </div>
      <div className="flex h-64 items-center">
        <div>
          <div className="flex w-[90vw] flex-row justify-between md:w-[50vw]">
            <div className="h-6 w-[93.5px] rounded-xl border bg-white"></div>
            <div className="h-6 w-[127.5px] rounded-xl border bg-white"></div>
          </div>
          <AccountHr />
          <div className="flex w-[90vw] flex-row justify-between md:w-[50vw]">
            <div className="h-6 w-[41px] rounded-xl border bg-white"></div>
            <div className="h-6 w-[80px] rounded-xl border bg-white"></div>
          </div>
          <AccountHr />
          <div className="flex w-[90vw] flex-row justify-between md:w-[50vw]">
            <div className="h-6 w-[59px] rounded-xl border bg-white"></div>
            <div className="h-6 w-[147px] rounded-xl border bg-white"></div>
          </div>
          <AccountHr />
          <div className="flex w-[90vw] flex-row justify-between md:w-[50vw]">
            <div className="h-6 w-[41px] rounded-xl border bg-white"></div>
            <div className="h-6 w-[100px] rounded-xl border bg-white"></div>
          </div>
          <AccountHr />
          <div className="flex w-[90vw] flex-row justify-between md:w-[50vw]">
            <div className="h-6 w-[70px] rounded-xl border bg-white"></div>
            <div className="h-6 w-[54px] rounded-xl border bg-white"></div>
          </div>
        </div>
      </div>
      <div className="h-[42px] w-[118px] rounded-xl border bg-white"></div>
    </div>
  );
}
