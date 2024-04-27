import LoginCard from "./components/loginCard";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="flex-1 flex justify-center items-center bg-background">
      <LoginCard />
    </div>
  );
}
