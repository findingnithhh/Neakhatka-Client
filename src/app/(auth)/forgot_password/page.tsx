// ForgotPassword.tsx
"use client";
import * as Yup from "yup";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import "../../globals.css";
import { ForgotPasswordSchema } from "../../../validation/forgotPasswordValidate";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [forgotPasswordError, setForgotPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await ForgotPasswordSchema.validate({ email }, { abortEarly: false });

      // Redirect to reset_password page
      window.location.href = "/reset_password";
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((e) => {
          if (e.path === "email") setEmailError(e.message);
        });
      } else {
        setForgotPasswordError("Error sending reset password email");
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError("");
    setForgotPasswordError("");
  };

  const handleEmailFocus = () => {
    setEmailError("");
    setForgotPasswordError("");
  };

  return (
    <div className="flex h-screen mx-auto overflow-hidden">
      <div className="left hidden lg:block w-full h-full p-10 bg-[#18181B] flex-col justify-between rounded-r-2xl">
        <div className="flex justify-center items-center h-screen">
          <Image
            src="/auth/forgot_password.svg"
            alt="ForgotPassword"
            width={450}
            height={450}
            className="mb-20"
          />
        </div>
      </div>
      <div className="right w-full p-10">
        <div className="flex flex-col justify-center items-center h-full">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="-mt-20 mb-10"
            />
          </Link>
          <div className="text-center">
            <h1 className="font-bold mb-1 text-lg">
              Did you forget your password?
            </h1>
            <div className="flex justify-center">
              <p className="text-gray-500 text-sm w-[60%] my-4">
                Enter your email address you’re using for account below and we
                will send you a password reset link
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className={`w-[350px] ${emailError ? "border-red-500" : ""}`}
                onChange={handleEmailChange}
                value={email}
                onFocus={handleEmailFocus}
              />
              {emailError && (
                <div className="text-red-500 text-xs mt-1">{emailError}</div>
              )}
            </div>
            <Button
              type="submit"
              className="mt-4 w-[350px] bg-[#343A40] hover:bg-[#4a535c]"
            >
              Continue
            </Button>
            {forgotPasswordError && (
              <div className="text-red-500 text-xs mt-1">
                {forgotPasswordError}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
