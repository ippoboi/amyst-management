import Link from "next/link";

import Image from "next/image";
import Input from "./input";

import githubIcon from "@/assets/githubIcon.png";
import googleIcon from "@/assets/googleIcon.png";
import rightArrowIcon from "@/assets/rightArrow.svg";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "../submit-button";

import logo from "@/assets/logoNoGrad.svg";

export default function LoginCard() {
  const onBlur = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, and one number."
      );
      return;
    }
  };

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
  };
  return (
    <div className="flex-1 animate-in max-w-md flex flex-col rounded-3xl border-btn-outline border w-full bg-componentBackground px-8 pt-10 pb-6 sm:max-w-md justify-center items-center gap-10">
      <Image
        src={logo}
        alt="Logo"
        width={80}
        className=" bg-inputField-background border-inputField-outline border rounded-3xl p-2"
      />

      <div className="text-center">
        <h1 className="text-2xl font-medium text-white ">Welcome back</h1>
        <p className="text-base font-normal text-subTitle">
          Time to get back in and finish what you started.
        </p>
      </div>

      <div className="w-full">
        <form className="animate-in flex-1 flex gap-10 flex-col w-full justify-center ">
          <div className="space-y-3">
            <Input type="email" placeholder="Email" autoComplete={false} />
            <Input
              type="password"
              placeholder="Password"
              isPassword={true}
              autoComplete={false}
            />
          </div>
          <div className="space-y-4">
            <SubmitButton formAction={signIn} pendingText="Signing In...">
              Sign In
            </SubmitButton>

            <div className="flex w-full justify-center items-center gap-4 text-subTitle">
              <div className="h-[1px] w-full bg-[#2E2E2E]" />
              Or
              <div className="h-[1px] w-full bg-[#2E2E2E]" />
            </div>

            <div className="w-full space-y-3">
              <button className="border-btn-outline hover:bg-btn-outline-hover transition-all w-full text-subTitle border rounded-xl p-3 flex justify-center items-center gap-3">
                <Image
                  alt="google logo"
                  src={googleIcon}
                  width={16}
                  height={16}
                />
                Sign in with Google
              </button>
              <button className="border-btn-outline hover:bg-btn-outline-hover transition-all w-full text-subTitle border rounded-xl p-3 flex justify-center items-center gap-3">
                <Image
                  alt="google logo"
                  src={githubIcon}
                  width={16}
                  height={16}
                />
                Sign in with Github
              </button>
            </div>
          </div>

          {/* {searchParams?.message && (
      <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
        {searchParams.message}
      </p>
    )} */}
        </form>
      </div>

      <div className="text-subTitle flex gap-2">
        Forgot password?
        <Link href="/">
          <div className="text-subtileText flex gap-px hover:text-subTitle transition-all group">
            Reset{" "}
            <Image
              src={rightArrowIcon}
              alt=""
              width={14}
              className="opacity-20 group-hover:opacity-100 transition-all"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
