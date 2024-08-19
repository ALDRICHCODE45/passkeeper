"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { GitHubIcon, GoogleIcon } from "@/components/icons/icons";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

interface Inputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (response?.ok) {
      toast.success("User logged in successfully");
      router.replace("/dashboard/settings");
    } else {
      toast.error("There was an error: " + response?.error);
    }
  });

  const router = useRouter();
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
      <div className="flex gap-5">
        <MoveLeft
          className="text-white cursor-pointer"
          onClick={() => {
            router.push("/home");
          }}
        />
        <h2 className="font-bold text-xl text-neutral-200">
          Welcome Back to PassKeeper
        </h2>
      </div>
      <p className=" text-sm max-w-sm mt-2 text-neutral-300">
        the best way to keep save your passwords and private information
      </p>

      <form className="my-8" onSubmit={onSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "email is required",
              },
            })}
          />
          {errors.email?.message && (
            <span className=" font-medium tracking-wide text-red-500 text-xs ml-1">
              {errors.email.message}
            </span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 6,
                message: "password mus contain 6 characters at least",
              },
            })}
          />
          {errors.password?.message && (
            <span className=" font-medium tracking-wide text-red-500 text-xs ml-1">
              {errors.password.message}
            </span>
          )}
        </LabelInputContainer>

        <button
          className=" relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
      <p className="text-white">
        Dont have an account? register{" "}
        <Link className="underline text-white" href="/signup">
          here
        </Link>{" "}
      </p>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
