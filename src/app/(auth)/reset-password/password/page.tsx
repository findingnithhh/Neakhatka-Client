'use client'
import * as Yup from "yup";

import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import "../../globals.css";
import { ResetPasswordSchema } from "../../../validation/resetPasswordValidate";
import { AnyARecord } from "dns";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [resetPasswordError, setResetPasswordError] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await ResetPasswordSchema.validate(
        { newPassword, confirmPassword },
        { abortEarly: false }
      );

      // Your reset password logic goes here
      console.log("Resetting password with new password:", newPassword);

      // Simulating successful password reset
      setResetSuccess(true);

      // Redirect to login page after successful password reset
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } catch (error: any) {
      if (error.name === "ValidationError") {
        error.inner.forEach((e: any) => {
          switch (e.path) {
            case "newPassword":
              setNewPasswordError(e.message);
              break;
            case "confirmPassword":
              setConfirmPasswordError(e.message);
              break;
            default:
              break;
          }
        });
      } else {
        setResetPasswordError("Error resetting password");
      }
    }
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
    setNewPasswordError("");
    setResetPasswordError("");
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
    setResetPasswordError("");
  };

  return (
    <div className="flex h-screen mx-auto overflow-hidden">
      <div className="left hidden lg:block w-full h-full p-10 bg-[#18181B] flex-col justify-between rounded-r-2xl">
        <div className="flex justify-center items-center h-screen">
          <Image
            src="/auth/reset_password.svg"
            alt="ResetPassword"
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
            <h1 className="font-bold mb-1 text-lg">Reset new password</h1>
            <div className="flex justify-center">
              <p className="text-gray-500 text-sm w-[70%] my-4">
                Enter your new password below we will change you, your new
                password
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="relative">
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                placeholder="New password"
                className={`w-[350px] ${
                  newPasswordError ? "border-red-500" : ""
                }`}
                onChange={handleNewPasswordChange}
                value={newPassword}
              />
              {newPasswordError && (
                <div className="text-red-500 text-xs mt-1">
                  {newPasswordError}
                </div>
              )}
            </div>
            <div className="relative mt-4">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className={`w-[350px] ${
                  confirmPasswordError ? "border-red-500" : ""
                }`}
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
              />
              {confirmPasswordError && (
                <div className="text-red-500 text-xs mt-1">
                  {confirmPasswordError}
                </div>
              )}
            </div>
            <Button
              type="submit"
              className={`mt-4 w-[350px] bg-[#343A40] hover:bg-[#4a535c]`}
            >
              Continue
            </Button>
            {resetPasswordError && (
              <div className="text-red-500 text-xs mt-1">
                {resetPasswordError}
              </div>
            )}
            {resetSuccess && (
              <div className="text-green-500 text-xs mt-1">
                Password reset successfully! Redirecting to login page...
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
