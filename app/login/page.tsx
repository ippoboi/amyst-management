import LoginCard from "./components/loginCard";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="flex-1 flex justify-center items-center bg-background">
      <div className="w-11/12 h-[800px] border-inputField-outline border rounded-3xl absolute overflow-hidden flex justify-center items-center">
        <div className="w-full h-[1px] bg-[#2E2E2E] absolute" />
        <div className="h-full w-[1px] bg-[#2E2E2E] absolute" />
      </div>

      <LoginCard />
    </div>
  );
}
