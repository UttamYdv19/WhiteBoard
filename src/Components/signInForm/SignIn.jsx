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
import { signInFormSchema } from "../../validation/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const form = useForm({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      number: "",
      password: "",
    },
  });

  const savedUser =JSON.parse( localStorage.getItem("user")) || "user";
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (savedUser.email == data.email && savedUser.password == data.password)
      alert("login successfully !!");
    else alert("you do not have account. please create first");
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
                <Button type="button"
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
                Create new account !!{" "}
                <Link to="/signup" className="font-bold">
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
