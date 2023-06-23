"use client";
import CustomSpinner from "@/components/CustomSpinner";
import { useAuth } from "@/hooks/useAuth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { login, loading, error } = useAuth();

  const handleSubmit = (values: LoginFormValues) =>
    login(values.email, values.password);

  useEffect(() => {
    if (error) toast.error(`${error.message}`);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <img src="logo-waco.svg" width={200} alt="logo" className="my-10" />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/signup"
              >
                Don't have an account? Sign Up
              </a>
            </div>
          </Form>
        </Formik>
        <p className="text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Brayan Coy. All rights reserved.
        </p>
      </div>
      <Toaster />
      <CustomSpinner loading={loading} />
    </div>
  );
};

export default Login;
