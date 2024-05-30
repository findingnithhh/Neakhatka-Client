// Signup.tsx
"use client";
import * as Yup from "yup";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import Image from "next/legacy/image";
import "../../globals.css";
import { Icon } from "@/components";
import { SeekerSignUpSchema } from "../../../validation/seekerSignUp";
import axios from "axios";




const Signup = () => {
  const [signupError, setSignupError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "user";
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const validationResult = await SeekerSignUpSchema.validate(
        { username, email, password, role },
        { abortEarly: false }
      );
      await axios.post("http://localhost:4000/v1/auth/signup", {
        username,
        email,
        password,
        role,
      });
      console.log("Signup successful!"); // Log successful signup (if applicable)
      alert("Submitted!"); // Alert user of successful submission

      // Redirect to YouTube after successful signup
      window.location.href = "https://neakhatka.com/"; // Change URL to desired YouTube URL
    } catch (error: any | unknown) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((e) => {
          switch (e.path) {
            case "username":
              setUsernameError(e.message);
              break;
            case "email":
              setEmailError(e.message);
              break;
            case "password":
              setPasswordError(e.message);
              break;
            default:
              break;
          }
        });
        if (error instanceof axios) {
          console.log("error :", error);
        }
      } else {
        setSignupError("Error signing up. Please try again.");
      }
    }
  }

  const handleUsernameFocus = () => {
    setUsernameError("");
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };

  const handlePasswordFocus = () => {
    setPasswordError("");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Use flexbox to make it full height */}
      <div className="left hidden lg:block w-full h-full p-10 bg-[#18181B] flex-col justify-between rounded-r-2xl">
        {/* <div>⚛</div> */}
        <div className="flex justify-center items-center h-screen">
          <Image
            src="/auth/signup.svg"
            alt="login"
            width={450}
            height={450}
            className="mb-20"
          />
        </div>
      </div>
      <div className="right w-full p-10">
        <div className="text-end">
          <Link
            href="/login"
            color="primary"
            className="text-sm text-blue-500 underline"
          >
            Login
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          {/* Use flexbox to make it full height */}
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
            <h1 className="font-bold mb-1 text-lg">Create an account</h1>
            <p className="text-gray-500 text-sm text-center w-[380px]">
              Enter your email below to sign up with Matching Internship
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5" method="POST">
            <div className="relative">
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="username"
                className={`w-[350px] ${usernameError ? "border-red-500" : ""}`}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                onFocus={handleUsernameFocus}
              />
              {usernameError && (
                <div className="text-red-500 text-xs mt-1">{usernameError}</div>
              )}
            </div>
            <div className="relative mt-4">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className={`w-[350px] ${emailError ? "border-red-500" : ""}`}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                onFocus={handleEmailFocus}
              />
              {emailError && (
                <div className="text-red-500 text-xs mt-1">{emailError}</div>
              )}
            </div>
            <div className="relative mt-4">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password123"
                className={`w-[350px] ${passwordError ? "border-red-500" : ""}`}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                onFocus={handlePasswordFocus}
              />
              {passwordError && (
                <div className="text-red-500 text-xs mt-1">{passwordError}</div>
              )}
            </div>
            <Button
              type="submit"
              className="mt-4 w-[350px] bg-[#343A40] hover:bg-[#4a535c]"
            >
              Sign Up
            </Button>
            {signupError && (
              <div className="text-red-500 text-xs mt-1">{signupError}</div>
            )}
          </form>
          <div className="mt-5">
            <span className="flex text-gray-300">or continue with</span>
          </div>
          <div className="flex flex-col w-[350px]">
            <Button
              className="mt-4 mb-2 flex justify-center items-center"
              variant="outline"
            >
              <Icon label="Google" className="-ml-10 mr-5" />
              Continue with Google
            </Button>

            <Button
              className="flex justify-center items-center"
              variant="outline"
            >
              <FaFacebook className="-ml-6 mr-5 w-[22px] h-[22px] text-blue-600" />
              Continue with facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
