import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { signUpFormSchema } from "../../validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const form = useForm({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      number: "",
      password: "",
    },
  });
 const navigate = useNavigate();
  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("account created successfully !!");
    form.reset();
    navigate('/')
  };
  return (
    <div className="flex justify-center items-center mt-50  ">
      <Card className="">
        <CardHeader className="space-y-1">
          <CardTitle className="justify-center flex text-2xl">
            Welcome User
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form} className="space-y-4 gap-5 py-10">
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FullName</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="enter your name"
                        {...field}
                        className="my-2 w-100"
                      />
                    </FormControl>
                    <FormMessage className="my-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="username@email.com"
                        {...field}
                        className="my-2 w-100"
                      />
                    </FormControl>
                    <FormMessage className="my-1" />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="enter your phone number"
                        {...field}
                        className="my-2 w-100"
                      />
                    </FormControl>
                    <FormMessage className="my-1" />
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="enter new password"
                        {...field}
                        className="my-2 w-100"
                      />
                    </FormControl>
                    <FormMessage className="my-1" />
                  </FormItem>
                )}
              ></FormField>
              <div className="flex justify-between gap-5">
                <Button
                  type="reset"
                  className="flex items-center mt-10 w-50"
                  onClick={() => form.reset()}
                >
                  Reset
                </Button>
                <Button type="submit" className="flex items-center mt-10 w-50">
                  Submit
                </Button>
              </div>
              <div className="mt-3 flex justify-center">
                Do you have already account ?{" "}
                <Link to="/signin" className="font-bold">
                  {" "}
                  Click here
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
