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
import { createuser } from "@/actions/users/createUser";

interface Inputs {
  email: string;
  username: string;
  password: string;
}

export function SignupFormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const { email, password, username } = data;
    const { ok, error, msg } = await createuser({ email, password, username });
    if (!ok) {
      toast.error(error);
      return;
    }
    toast.success(msg);
  });

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
          Welcome to PassKeeper
        </h2>
      </div>
      <p className=" text-sm max-w-sm mt-2 text-neutral-300">
        the best way to keep save your passwords and private information
      </p>
      <form className="my-8" onSubmit={onSubmit}>
        <LabelInputContainer className="mb-4">
          <Label>Email Address</Label>
          <Input
            className={cn("border-red-500", {
              "border-red-500": !!errors.email,
            })}
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
          <Label>Username</Label>
          <Input
            id="username"
            placeholder="Jhon Doe"
            type="text"
            className={cn("", {
              "border-red-500": !!errors.username,
            })}
            {...register("username", {
              required: {
                value: true,
                message: "username is required",
              },
              minLength: {
                value: 4,
                message: "username must contain 4 characters at least",
              },
            })}
          />
          {errors.username?.message && (
            <span className=" font-medium tracking-wide text-red-500 text-xs ml-1">
              {errors.username.message}
            </span>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label>Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "name is required",
              },
              minLength: {
                value: 6,
                message: "password must to contain 6 characters at least",
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

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium   bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <GitHubIcon className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">GitHub</span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium   bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <GoogleIcon className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-300 text-sm">Google</span>
            <BottomGradient />
          </button>
        </div>
      </form>
      <p className="text-white">
        Already have an account? login{" "}
        <Link className="underline text-white" href="/login">
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
